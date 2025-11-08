# Form Email-Only Acceptance Checklist

This document provides a comprehensive acceptance checklist for the email-based form submission system (replacing fax functionality).

## Pre-Deployment Setup

- [ ] Google Apps Script deployed as Web App with "Anyone" access
- [ ] `NEXT_PUBLIC_FORM_ENDPOINT` environment variable set in Vercel
- [ ] TEST_MODE set to `true` in Google Apps Script
- [ ] Test recipient email: `ibrahimmunaser@gmail.com` configured

## Code Changes Verification

### Fax Logic Removal

- [ ] `lib/fax/` directory removed (all provider implementations)
- [ ] `lib/pdf/` directory removed (PDF generation code)
- [ ] `app/api/fax/` directory removed (webhook endpoint)
- [ ] `app/test-fax/` page removed
- [ ] All fax-related environment variables removed from `lib/env.ts`
- [ ] Fax references removed from `lib/site.ts` (SITE.fax)

### Schema Updates

- [ ] `lib/schemas.ts` updated with new field names:
  - [ ] `patientName` (2-100 chars)
  - [ ] `dob` (normalized to YYYY-MM-DD)
  - [ ] `phone` (normalized, digits only + leading +)
  - [ ] `email` (optional)
  - [ ] `medications` (max 1500 chars)
  - [ ] `rxNumber` (optional, max 40 chars)
  - [ ] `notes` (optional, max 1500 chars)
  - [ ] `website` (honeypot, must be empty)
  - [ ] `ts` (timestamp, ISO format)
  - [ ] `type` ('refill' or 'transfer')
- [ ] Transfer-specific fields added:
  - [ ] `fromPharmacy` (2-120 chars)
  - [ ] `fromPharmacyPhone` (normalized)

### Form Components

- [ ] `RefillForm.tsx` updated:
  - [ ] Uses new field names
  - [ ] Normalizes phone on submit (strips non-digits except leading +)
  - [ ] Normalizes DOB to YYYY-MM-DD
  - [ ] Adds `ts` timestamp on submit
  - [ ] Posts as `application/x-www-form-urlencoded` (AJAX path)
  - [ ] Has `action` and `method="POST"` for no-JS fallback
  - [ ] Shows spinner while loading
  - [ ] Success message: "Thanks — your request was emailed to the pharmacy."
  - [ ] Error message: "We couldn't send your request. Please try again or call the pharmacy."
  - [ ] Disclaimer text: "Avoid entering unnecessary sensitive details."
  - [ ] Honeypot field `website` is hidden
  - [ ] Accessible labels and ARIA attributes
  - [ ] Inline error messages with field focus
  - [ ] Shows config error in dev mode if endpoint missing

- [ ] `TransferForm.tsx` updated:
  - [ ] Uses new field names
  - [ ] Includes `fromPharmacy` and `fromPharmacyPhone` fields
  - [ ] Normalizes both phone fields on submit
  - [ ] Normalizes DOB to YYYY-MM-DD
  - [ ] Adds `ts` timestamp on submit
  - [ ] Posts as `application/x-www-form-urlencoded` (AJAX path)
  - [ ] Has `action` and `method="POST"` for no-JS fallback
  - [ ] Shows spinner while loading
  - [ ] Success message updated (no fax mention)
  - [ ] Error message updated (no fax mention)
  - [ ] Disclaimer text present
  - [ ] Honeypot field `website` is hidden
  - [ ] Accessible labels and ARIA attributes
  - [ ] Inline error messages with field focus
  - [ ] DestinationCard no longer shows fax number

### API Routes

- [ ] `app/api/refill/route.ts` simplified:
  - [ ] Validates data against schema
  - [ ] Checks honeypot field
  - [ ] Returns `{ ok: true }` on success
  - [ ] Rate limiting still in place
  - [ ] No fax sending logic
  - [ ] No PDF generation
  
- [ ] `app/api/transfer/route.ts` simplified:
  - [ ] Validates data against schema
  - [ ] Checks honeypot field
  - [ ] Returns `{ ok: true }` on success
  - [ ] Rate limiting still in place
  - [ ] No fax sending logic
  - [ ] No PDF generation

## Functional Testing - Refill Form

### AJAX Submission (JavaScript Enabled)

- [ ] **Required field validation**:
  - [ ] Submitting without patient name shows inline error and focuses field
  - [ ] Submitting without DOB shows inline error and focuses field
  - [ ] Submitting without phone shows inline error and focuses field
  - [ ] Submitting without medications shows inline error and focuses field

- [ ] **Data normalization**:
  - [ ] Phone `(313) 555-0123` normalized to `3135550123`
  - [ ] Phone `+1 313-555-0123` normalized to `+13135550123`
  - [ ] DOB `12/25/1990` normalized to `1990-12-25`
  - [ ] DOB `12-25-1990` normalized to `1990-12-25`

- [ ] **Successful submission**:
  - [ ] Form shows loading spinner while submitting
  - [ ] Submit button is disabled during submission
  - [ ] On success, form resets and shows success alert
  - [ ] Success message mentions "emailed" (not "faxed")
  - [ ] Email received at `ibrahimmunaser@gmail.com`

- [ ] **Email content**:
  - [ ] Subject: "New refill request — [Patient Name]"
  - [ ] All fields present: Type, Patient Name, DOB, Phone, Email (if provided), Medications, Rx Number (if provided), Notes (if provided), Submitted At
  - [ ] HTML table formatted correctly
  - [ ] Plain text version readable
  - [ ] Reply-To header set to patient email (if provided)
  - [ ] Test mode warning visible in email

- [ ] **Honeypot protection**:
  - [ ] Fill hidden `website` field with "http://spam.com"
  - [ ] Submit form
  - [ ] Form shows success message
  - [ ] NO email received (bot rejection)

### No-JS Fallback

- [ ] **Disable JavaScript** in browser
- [ ] Submit refill form with valid data
- [ ] Form submits directly to Google Apps Script endpoint
- [ ] Browser navigates to success page or receives JSON response
- [ ] Email received at `ibrahimmunaser@gmail.com`

## Functional Testing - Transfer Form

### AJAX Submission (JavaScript Enabled)

- [ ] **Required field validation**:
  - [ ] Submitting without current pharmacy name shows error
  - [ ] Submitting without current pharmacy phone shows error
  - [ ] Submitting without patient name shows error
  - [ ] Submitting without DOB shows error
  - [ ] Submitting without phone shows error
  - [ ] Submitting without medications shows error

- [ ] **Transfer-specific fields**:
  - [ ] `fromPharmacy` field present and required
  - [ ] `fromPharmacyPhone` field present and required
  - [ ] Both phone fields normalized on submit

- [ ] **Successful submission**:
  - [ ] Form shows loading spinner while submitting
  - [ ] Submit button is disabled during submission
  - [ ] On success, form resets and shows success alert
  - [ ] Success message mentions "emailed" (not "faxed")
  - [ ] Email received at `ibrahimmunaser@gmail.com`

- [ ] **Email content**:
  - [ ] Subject: "New transfer request — [Patient Name]"
  - [ ] Includes all transfer-specific fields: Current Pharmacy, Current Pharmacy Phone
  - [ ] All common fields present
  - [ ] HTML table formatted correctly
  - [ ] Reply-To header set to patient email (if provided)

- [ ] **Honeypot protection**:
  - [ ] Fill hidden `website` field
  - [ ] Submit form
  - [ ] Form shows success but NO email received

### No-JS Fallback

- [ ] **Disable JavaScript** in browser
- [ ] Submit transfer form with valid data
- [ ] Form submits directly to Google Apps Script endpoint
- [ ] Email received at `ibrahimmunaser@gmail.com`

## CORS & Network Testing

- [ ] AJAX submission uses `application/x-www-form-urlencoded` content type
- [ ] NO CORS preflight request occurs (visible in browser Network tab)
- [ ] Request completes successfully without CORS errors
- [ ] Response is valid JSON with `{ ok: true }`

## Accessibility Testing

- [ ] All form fields have associated `<label>` elements
- [ ] Required fields marked with `required` attribute
- [ ] Error messages have appropriate `aria-describedby` linking
- [ ] Error messages have `role="alert"` for screen readers
- [ ] Honeypot field has `aria-hidden="true"`
- [ ] Submit button shows loading state (text + spinner)
- [ ] Focus moves to first invalid field on validation error
- [ ] Success/error alerts are announced to screen readers

## Security Testing

- [ ] **Honeypot bypass attempt**:
  - [ ] Manually fill `website` field via browser console
  - [ ] Submit form
  - [ ] Verify no email is sent (bot rejection)

- [ ] **XSS attempt in form fields**:
  - [ ] Submit form with `<script>alert('xss')</script>` in name field
  - [ ] Check email: script tags are escaped in HTML version
  - [ ] No script execution in email client

- [ ] **Oversized input**:
  - [ ] Submit form with 5000 character medications field
  - [ ] Form validates and rejects (max 1500 chars)

- [ ] **Rate limiting** (if enabled):
  - [ ] Submit form 4 times rapidly from same IP
  - [ ] 4th submission should be rejected with "Too many requests" error

## Production Configuration

- [ ] **Switch to production mode**:
  - [ ] Open Google Apps Script
  - [ ] Change `TEST_MODE = false`
  - [ ] Save and redeploy (new version)

- [ ] **Production testing**:
  - [ ] Submit test refill form
  - [ ] Email received at `Pharmacy.xpresscare@gmail.com`
  - [ ] No test mode warning in email
  - [ ] All fields correct

- [ ] **Final verification**:
  - [ ] Submit test transfer form
  - [ ] Email received at `Pharmacy.xpresscare@gmail.com`
  - [ ] Reply-To works correctly

## Build & Deploy Testing

- [ ] **Vercel environment variable**:
  - [ ] `NEXT_PUBLIC_FORM_ENDPOINT` set in Vercel dashboard
  - [ ] Variable available in Production environment
  - [ ] Site redeployed after adding variable

- [ ] **Build succeeds**:
  - [ ] `npm run build` completes without errors
  - [ ] No TypeScript errors
  - [ ] No linter errors related to forms

- [ ] **Deploy succeeds**:
  - [ ] Vercel deployment completes successfully
  - [ ] Forms accessible on live domain
  - [ ] Forms functional on live domain
  - [ ] Submissions work end-to-end

## Documentation

- [ ] `GAS_SETUP.md` complete with:
  - [ ] Complete copy-paste script code
  - [ ] Step-by-step deployment instructions
  - [ ] Configuration switches documented
  - [ ] Testing instructions
  - [ ] Production switch instructions
  - [ ] Rate limiting documentation
  - [ ] Troubleshooting section

- [ ] `tests/forms.email-only.md` complete (this file)

## Cleanup Verification

- [ ] No references to "fax" in form UI text
- [ ] No references to "fax" in success/error messages
- [ ] No references to "fax" in form components
- [ ] No imports of removed fax/pdf modules
- [ ] No dead code or unused imports in form files
- [ ] `lib/metrics.ts` calls removed if they referenced fax metrics

## Final Sign-Off

- [ ] All tests passed
- [ ] Production emails going to correct recipient
- [ ] No PHI stored server-side
- [ ] No PHI in logs (except optional dev console, off by default)
- [ ] Forms work with and without JavaScript
- [ ] Forms are accessible
- [ ] Forms are secure (honeypot, rate limiting, sanitization)
- [ ] Documentation complete and accurate

---

## Test Data Templates

### Refill Test Data

```
Patient Name: John Doe
DOB: 01/15/1980
Phone: (313) 555-0123
Email: john.doe@example.com
Medications: Lisinopril 10mg, Metformin 500mg
Rx Number: RX123456
Notes: Please call before preparing
```

### Transfer Test Data

```
Current Pharmacy Name: ABC Pharmacy
Current Pharmacy Phone: (313) 555-9999
Patient Name: Jane Smith
DOB: 03/22/1975
Phone: (313) 555-0124
Email: jane.smith@example.com
Medications: Atorvastatin 20mg, Levothyroxine 75mcg
Rx Number: RX789012
Notes: Transfer all active prescriptions
```

---

**Date Tested**: _______________  
**Tested By**: _______________  
**Version**: _______________  
**Result**: ☐ PASS  ☐ FAIL  

**Notes**:

