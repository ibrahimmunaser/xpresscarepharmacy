# Google Apps Script Email Relay Setup

This document provides the complete Google Apps Script code and deployment instructions for the pharmacy form email relay endpoint.

## Overview

The forms on the Xpress Care Pharmacy website submit directly to a Google Apps Script Web App that:

1. Accepts form data via POST (both `application/x-www-form-urlencoded` and `application/json`)
2. Validates and sanitizes the data
3. Checks the honeypot field to filter out bots
4. Sends a formatted email to the configured recipient
5. Includes optional rate limiting per IP address

## Configuration

The script has three main configuration variables at the top:

```javascript
const TEST_MODE = true; // Set to false for production
const RECIPIENT_TEST = 'ibrahimmunaser@gmail.com';
const RECIPIENT_PROD = 'Pharmacy.xpresscare@gmail.com';
```

### Testing Phase
- Keep `TEST_MODE = true`
- Emails will be sent to `ibrahimmunaser@gmail.com`
- Test both refill and transfer forms
- Verify email formatting and Reply-To functionality

### Production Phase
- Set `TEST_MODE = false`
- Emails will be sent to `Pharmacy.xpresscare@gmail.com`
- Redeploy the script after making this change

## Complete Google Apps Script Code

Copy and paste the following code into your Google Apps Script project:

```javascript
/**
 * Xpress Care Pharmacy - Form Email Relay
 * 
 * This script receives form submissions from the pharmacy website
 * and sends formatted emails to the pharmacy staff.
 * 
 * Supports both Refill and Transfer requests.
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const TEST_MODE = true; // Set to false for production
const RECIPIENT_TEST = 'ibrahimmunaser@gmail.com';
const RECIPIENT_PROD = 'Pharmacy.xpresscare@gmail.com';

// Rate limiting: max submissions per IP address per time window
const RATE_LIMIT_ENABLED = false; // Set to true to enable rate limiting
const RATE_LIMIT_MAX = 3; // Max submissions
const RATE_LIMIT_WINDOW = 15 * 60; // 15 minutes in seconds

// ============================================================================
// MAIN HANDLER
// ============================================================================

/**
 * Handles POST requests from the pharmacy forms
 */
function doPost(e) {
  try {
    // Parse the incoming data
    const data = parseData(e);
    
    // Check honeypot (silent accept if filled - likely a bot)
    if (data.website && data.website.trim() !== '') {
      Logger.log('Honeypot triggered - rejecting silently');
      return json({ ok: true });
    }
    
    // Optional rate limiting
    if (RATE_LIMIT_ENABLED) {
      const ip = getClientIP(e);
      if (!checkRateLimit(ip)) {
        Logger.log('Rate limit exceeded for IP: ' + ip);
        return json({ ok: false, error: 'Too many requests. Please try again later.' });
      }
    }
    
    // Validate required fields
    const validation = validateData(data);
    if (!validation.valid) {
      Logger.log('Validation failed: ' + validation.error);
      return json({ ok: false, error: validation.error });
    }
    
    // Send the email
    sendFormEmail(data);
    
    Logger.log('Form submitted successfully - Type: ' + (data.type || 'unknown'));
    return json({ ok: true });
    
  } catch (error) {
    Logger.log('Error processing form: ' + error.toString());
    return json({ ok: false, error: 'Server error processing your request.' });
  }
}

/**
 * Handles GET requests (for testing/health check)
 */
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ 
      status: 'ok', 
      service: 'Xpress Care Pharmacy Form Handler',
      mode: TEST_MODE ? 'TEST' : 'PRODUCTION'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// ============================================================================
// DATA PARSING & VALIDATION
// ============================================================================

/**
 * Parse form data from either URL-encoded or JSON format
 */
function parseData(e) {
  try {
    // Try parsing as JSON first
    if (e.postData && e.postData.type === 'application/json') {
      return JSON.parse(e.postData.contents);
    }
    
    // Otherwise use URL-encoded parameters
    const params = e.parameter || {};
    return params;
    
  } catch (error) {
    Logger.log('Error parsing data: ' + error.toString());
    return e.parameter || {};
  }
}

/**
 * Validate required fields based on form type
 */
function validateData(data) {
  // Common required fields
  if (!data.patientName || !data.patientName.trim()) {
    return { valid: false, error: 'Patient name is required' };
  }
  
  if (!data.dob || !data.dob.trim()) {
    return { valid: false, error: 'Date of birth is required' };
  }
  
  if (!data.phone || !data.phone.trim()) {
    return { valid: false, error: 'Phone number is required' };
  }
  
  if (!data.medications || !data.medications.trim()) {
    return { valid: false, error: 'Medications are required' };
  }
  
  // Transfer-specific validation
  if (data.type === 'transfer') {
    if (!data.fromPharmacy || !data.fromPharmacy.trim()) {
      return { valid: false, error: 'Current pharmacy name is required' };
    }
    
    if (!data.fromPharmacyPhone || !data.fromPharmacyPhone.trim()) {
      return { valid: false, error: 'Current pharmacy phone is required' };
    }
  }
  
  return { valid: true };
}

/**
 * Sanitize and escape HTML to prevent XSS
 */
function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .slice(0, 2000); // Limit length
}

/**
 * Safe plain text version (trim whitespace, limit length)
 */
function safe(str) {
  if (!str) return '';
  return String(str).trim().slice(0, 2000);
}

/**
 * Truncate string to max length
 */
function truncate(str, maxLength) {
  if (!str) return '';
  str = String(str).trim();
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

// ============================================================================
// EMAIL COMPOSITION & SENDING
// ============================================================================

/**
 * Send formatted email with form data
 */
function sendFormEmail(data) {
  // Determine recipient based on mode
  const recipient = TEST_MODE ? RECIPIENT_TEST : RECIPIENT_PROD;
  
  // Sanitize and truncate data
  const formType = data.type || 'form';
  const patientName = truncate(data.patientName, 100);
  const dob = safe(data.dob);
  const phone = safe(data.phone);
  const email = safe(data.email);
  const medications = truncate(data.medications, 1500);
  const rxNumber = truncate(data.rxNumber, 40);
  const notes = truncate(data.notes, 1500);
  const timestamp = safe(data.ts) || new Date().toISOString();
  
  // Transfer-specific fields
  const fromPharmacy = formType === 'transfer' ? truncate(data.fromPharmacy, 120) : '';
  const fromPharmacyPhone = formType === 'transfer' ? safe(data.fromPharmacyPhone) : '';
  
  // Build field array (only include non-empty values)
  const fields = [];
  
  fields.push(['Type', formType.charAt(0).toUpperCase() + formType.slice(1)]);
  fields.push(['Patient Name', patientName]);
  fields.push(['Date of Birth', dob]);
  fields.push(['Phone', phone]);
  
  if (email) {
    fields.push(['Email', email]);
  }
  
  fields.push(['Medications', medications]);
  
  if (rxNumber) {
    fields.push(['Rx Number', rxNumber]);
  }
  
  // Transfer-specific fields
  if (formType === 'transfer') {
    fields.push(['Current Pharmacy', fromPharmacy]);
    fields.push(['Current Pharmacy Phone', fromPharmacyPhone]);
  }
  
  if (notes) {
    fields.push(['Notes', notes]);
  }
  
  fields.push(['Submitted At', timestamp]);
  
  // Subject line
  const subject = `New ${formType} request — ${patientName || 'Unknown'}`;
  
  // Plain text version
  const plainBody = fields.map(([key, value]) => `${key}: ${safe(value)}`).join('\n');
  
  // HTML version (styled table)
  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px;">
      <h2 style="color: #1e3a8a; margin-bottom: 20px;">${esc(subject)}</h2>
      <table cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
        ${fields.map(([key, value]) => `
          <tr>
            <td style="padding: 12px; font-weight: 600; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; width: 40%;">
              ${esc(key)}
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb; white-space: pre-wrap;">
              ${esc(value)}
            </td>
          </tr>
        `).join('')}
      </table>
      ${TEST_MODE ? '<p style="color: #dc2626; font-weight: bold; margin-top: 20px;">⚠️ TEST MODE - This email was sent to the test inbox</p>' : ''}
    </div>
  `;
  
  // Email options
  const options = {
    htmlBody: htmlBody,
    name: email ? `${patientName} (via Xpress Care Pharmacy Forms)` : 'Xpress Care Pharmacy Forms'
  };
  
  // Set Reply-To if patient provided email
  if (email) {
    options.replyTo = email;
  }
  
  // Send the email
  GmailApp.sendEmail(recipient, subject, plainBody, options);
  
  Logger.log('Email sent to: ' + recipient);
}

// ============================================================================
// RATE LIMITING (Optional)
// ============================================================================

/**
 * Check if IP address is within rate limit
 */
function checkRateLimit(ip) {
  if (!RATE_LIMIT_ENABLED) return true;
  
  try {
    const cache = CacheService.getScriptCache();
    const key = 'ratelimit_' + ip;
    const cached = cache.get(key);
    
    if (!cached) {
      // First request from this IP
      cache.put(key, '1', RATE_LIMIT_WINDOW);
      return true;
    }
    
    const count = parseInt(cached, 10);
    
    if (count >= RATE_LIMIT_MAX) {
      return false;
    }
    
    // Increment counter
    cache.put(key, String(count + 1), RATE_LIMIT_WINDOW);
    return true;
    
  } catch (error) {
    Logger.log('Rate limiting error: ' + error.toString());
    return true; // Fail open
  }
}

/**
 * Get client IP address from request
 */
function getClientIP(e) {
  try {
    // Try to get forwarded IP first
    if (e.parameter && e.parameter['x-forwarded-for']) {
      return e.parameter['x-forwarded-for'].split(',')[0].trim();
    }
    
    // Fallback to a generic identifier
    return 'unknown';
  } catch (error) {
    return 'unknown';
  }
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Return JSON response
 */
function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## Deployment Instructions

### Step 1: Create a New Google Apps Script Project

1. Go to [script.google.com](https://script.google.com)
2. Click **"New project"**
3. Give it a name: "Xpress Care Pharmacy Forms"
4. Delete the default `myFunction()` code
5. Paste the complete script code above

### Step 2: Save the Project

1. Click the **Save** icon (💾) or press `Ctrl+S` (Windows) / `Cmd+S` (Mac)
2. Confirm the project name

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: `v1 - Initial deployment` (or version note)
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone`
5. Click **Deploy**
6. Review permissions:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/XXXXX/exec`)

### Step 4: Configure the Website

Add the Web App URL to your Vercel environment variables:

```bash
NEXT_PUBLIC_FORM_ENDPOINT=https://script.google.com/macros/s/XXXXX/exec
```

**In Vercel Dashboard:**

1. Go to your project → **Settings** → **Environment Variables**
2. Add new variable:
   - **Name**: `NEXT_PUBLIC_FORM_ENDPOINT`
   - **Value**: Your Web App URL
   - **Environment**: Production (and Preview if desired)
3. Click **Save**
4. **Redeploy** your site for the changes to take effect

### Step 5: Test the Form

**With TEST_MODE = true:**

1. Go to your website's refill or transfer form
2. Fill out the form with test data
3. Submit the form
4. Check `ibrahimmunaser@gmail.com` for the email
5. Verify:
   - ✅ Email received
   - ✅ Subject line correct: "New refill request — [Patient Name]"
   - ✅ All fields present and formatted correctly
   - ✅ HTML table displays properly
   - ✅ Reply-To set to patient's email (if provided)
   - ✅ Test mode warning visible in email

### Step 6: Switch to Production

1. Open your Google Apps Script project
2. Change the configuration at the top:
   ```javascript
   const TEST_MODE = false; // Changed from true
   ```
3. Click **Save** (💾)
4. Deploy a new version:
   - Click **Deploy** → **Manage deployments**
   - Click the **pencil icon** (✏️) next to your active deployment
   - Change **Version** to **New version**
   - Add description: `v2 - Production mode`
   - Click **Deploy**

**Test again** to verify emails now go to `Pharmacy.xpresscare@gmail.com`.

## Updating the Script

If you need to make changes to the script:

1. Edit the code in the Apps Script editor
2. Click **Save**
3. Create a new deployment:
   - **Deploy** → **Manage deployments**
   - Click the pencil icon (✏️)
   - Select **New version**
   - Add a description of your changes
   - Click **Deploy**

**Note:** The Web App URL stays the same across versions.

## Rate Limiting (Optional)

To enable rate limiting and prevent spam:

1. In the script, change:
   ```javascript
   const RATE_LIMIT_ENABLED = true;
   ```
2. Adjust limits if needed:
   ```javascript
   const RATE_LIMIT_MAX = 3; // Max submissions
   const RATE_LIMIT_WINDOW = 15 * 60; // 15 minutes
   ```
3. Save and redeploy

This limits each IP address to 3 submissions per 15 minutes.

## Monitoring & Logs

To view logs and monitor submissions:

1. In the Apps Script editor, click **View** → **Executions**
2. See recent form submissions and any errors
3. Click on an execution to see detailed logs

## Security Notes

- **No PHI is stored** - emails are sent and the script doesn't persist any data
- **Honeypot field** (`website`) filters out bot submissions
- **Input sanitization** prevents XSS attacks in emails
- **Length limits** prevent abuse and oversized submissions
- **Rate limiting** (optional) prevents spam

## Troubleshooting

### Email not received

1. Check **Executions** log in Apps Script for errors
2. Verify the recipient email is correct
3. Check spam/junk folder
4. Ensure Gmail API quotas aren't exceeded (20 emails/day for free accounts)

### "Script not found" error

- The Web App URL may have changed - check the deployment URL
- Redeploy the script and update `NEXT_PUBLIC_FORM_ENDPOINT`

### CORS errors

- This should not happen with `application/x-www-form-urlencoded` POST
- Verify the form is using `URLSearchParams` and not JSON in the fetch

### Form validation errors

- Check browser console for validation messages
- Ensure all required fields are filled
- Phone and DOB are being normalized before submission

## Support

For issues with the script or email delivery:

1. Check the Apps Script execution logs
2. Test the endpoint directly using curl or Postman
3. Verify environment variables are set correctly in Vercel
4. Contact: ibrahimmunaser@gmail.com (during testing phase)

