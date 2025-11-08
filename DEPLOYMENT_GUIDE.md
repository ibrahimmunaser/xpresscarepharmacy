# Deployment Guide: Email-Only Forms

Quick start guide to get the new email-based forms up and running.

## Prerequisites

- Google account (for Google Apps Script)
- Vercel account (where site is hosted)
- Access to the codebase

## Step 1: Deploy Google Apps Script (15 minutes)

### 1.1 Create the Script

1. Go to [script.google.com](https://script.google.com)
2. Click **"New project"**
3. Name it: "Xpress Care Pharmacy Forms"
4. Delete the default code
5. Open `GAS_SETUP.md` in this repository
6. Copy the complete script code from the "Complete Google Apps Script Code" section
7. Paste into the Apps Script editor
8. Click **Save** (💾)

### 1.2 Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone`
5. Click **Deploy**
6. Authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
7. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 2: Configure Vercel (5 minutes)

### 2.1 Add Environment Variable

1. Go to [vercel.com](https://vercel.com) and open your project
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `NEXT_PUBLIC_FORM_ENDPOINT`
   - **Value**: [Paste the Web App URL from Step 1.2]
   - **Environment**: Select "Production" (and "Preview" if desired)
4. Click **Save**

### 2.2 Redeploy the Site

1. Go to **Deployments** tab
2. Click the three dots (⋮) on the latest deployment
3. Click **Redeploy**
4. Wait for deployment to complete (~2 minutes)

## Step 3: Test the Forms (10 minutes)

### 3.1 Verify Configuration

1. Visit your live site
2. Open browser DevTools (F12)
3. Go to Console tab
4. No "Configuration Error" should appear

### 3.2 Test Refill Form

1. Go to `/refill` page
2. Fill out the form with test data:
   ```
   Patient Name: Test User
   DOB: 01/15/1990
   Phone: (313) 555-0123
   Email: your-test-email@example.com
   Medications: Test Medication
   ```
3. Click **Send Refill Request**
4. Should see success message
5. Check email at `ibrahimmunaser@gmail.com`
6. Verify email received with correct formatting

### 3.3 Test Transfer Form

1. Go to `/transfer` page
2. Fill out the form with test data:
   ```
   Current Pharmacy: Test Pharmacy
   Current Pharmacy Phone: (313) 555-9999
   Patient Name: Test User
   DOB: 01/15/1990
   Phone: (313) 555-0123
   Email: your-test-email@example.com
   Medications: Test Medication
   ```
3. Click **Send Transfer Request**
4. Should see success message
5. Check email at `ibrahimmunaser@gmail.com`
6. Verify email received with transfer-specific fields

### 3.4 Test Reply-To

1. Open one of the test emails
2. Click **Reply**
3. Verify the "To" address is the patient email you entered
4. (Don't actually send a reply, just verify)

## Step 4: Switch to Production (5 minutes)

### 4.1 Update Script Configuration

1. Go back to [script.google.com](https://script.google.com)
2. Open your "Xpress Care Pharmacy Forms" project
3. Find line 13 (in the CONFIGURATION section):
   ```javascript
   const TEST_MODE = true; // Set to false for production
   ```
4. Change to:
   ```javascript
   const TEST_MODE = false; // Set to false for production
   ```
5. Click **Save** (💾)

### 4.2 Redeploy Script

1. Click **Deploy** → **Manage deployments**
2. Click the **pencil icon** (✏️) next to your active deployment
3. Change **Version** to **New version**
4. Description: `v2 - Production mode`
5. Click **Deploy**
6. The Web App URL stays the same (no need to update Vercel)

### 4.3 Test Production

1. Submit a test refill form
2. Check email at `Pharmacy.xpresscare@gmail.com` (production inbox)
3. Verify email received
4. Verify no "TEST MODE" warning in email

## Step 5: Monitor (First 24 Hours)

### 5.1 Check Script Logs

1. Go to [script.google.com](https://script.google.com)
2. Open your project
3. Click **View** → **Executions**
4. See all form submissions and any errors
5. Check for patterns or issues

### 5.2 Verify Email Delivery

1. Check production inbox regularly
2. Verify all emails are being received
3. Check formatting is correct
4. Verify Reply-To works

### 5.3 Watch for Issues

Common issues to watch for:
- **Gmail quota exceeded**: 20 emails/day for free accounts (upgrade to Google Workspace if needed)
- **Spam filtering**: Check spam folder initially
- **Formatting issues**: Some email clients may render HTML differently

## Optional: Enable Rate Limiting

If you're getting spam submissions:

1. Open your Google Apps Script
2. Find line 18:
   ```javascript
   const RATE_LIMIT_ENABLED = false; // Set to true to enable rate limiting
   ```
3. Change to:
   ```javascript
   const RATE_LIMIT_ENABLED = true; // Set to true to enable rate limiting
   ```
4. Adjust limits if needed (lines 19-20):
   ```javascript
   const RATE_LIMIT_MAX = 3; // Max submissions
   const RATE_LIMIT_WINDOW = 15 * 60; // 15 minutes in seconds
   ```
5. Save and redeploy (new version)

This limits each IP address to 3 submissions per 15 minutes.

## Troubleshooting

### Email Not Received

**Check these:**
1. Google Apps Script execution logs for errors
2. Spam/junk folder
3. Recipient email is correct in script
4. Gmail quota not exceeded

**Solution:**
- View executions in Apps Script
- Fix any errors shown
- Check Google account quotas

### "Configuration Error" in Browser

**Check these:**
1. `NEXT_PUBLIC_FORM_ENDPOINT` is set in Vercel
2. Environment variable is in "Production" environment
3. Site was redeployed after adding variable

**Solution:**
- Add environment variable in Vercel
- Redeploy the site

### Form Submission Fails

**Check these:**
1. Browser console for errors
2. Network tab for failed requests
3. Google Apps Script execution logs

**Solution:**
- Check script is deployed as "Anyone" access
- Verify Web App URL is correct
- Check for script errors in execution logs

### Reply-To Not Working

**Check these:**
1. Patient email was provided in form
2. Email client supports Reply-To header

**Solution:**
- Ensure email field is filled
- Check email received has Reply-To header

## Success Checklist

- [ ] Google Apps Script deployed successfully
- [ ] Web App URL copied
- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` set in Vercel
- [ ] Site redeployed
- [ ] Test refill email received at test inbox
- [ ] Test transfer email received at test inbox
- [ ] Reply-To works correctly
- [ ] Switched to `TEST_MODE = false`
- [ ] Production email received at production inbox
- [ ] No errors in first 24 hours
- [ ] Forms are accessible and user-friendly
- [ ] Documentation reviewed

## Documentation Reference

- **`GAS_SETUP.md`**: Complete Google Apps Script code and detailed setup
- **`tests/forms.email-only.md`**: Comprehensive acceptance testing checklist
- **`MIGRATION_SUMMARY.md`**: What changed from fax to email system
- **`README.md`**: General project documentation

## Support

For issues or questions:

- **During Testing**: ibrahimmunaser@gmail.com
- **Production**: Pharmacy.xpresscare@gmail.com
- **Technical**: Review execution logs in Google Apps Script

---

**Estimated Total Time**: ~35 minutes  
**Complexity**: Low to Medium  
**Prerequisites**: Google account, Vercel access

