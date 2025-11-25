# Resend Email Setup - Send Emails from Patient's Address

This guide explains how to configure the form system to send emails **FROM** the patient's email address using Resend, instead of using Google Apps Script.

## Overview

When using Resend, emails will be sent **FROM** the patient's email address (e.g., `patient@example.com`) **TO** the pharmacy email address. This is different from Google Apps Script, which always sends from the script owner's account.

## Prerequisites

1. A Resend account (sign up at [resend.com](https://resend.com))
2. A Resend API key
3. A verified domain in Resend (for sending from custom email addresses)

## Setup Instructions

### Step 1: Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up
2. Verify your email address

### Step 2: Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Give it a name (e.g., "Xpress Care Pharmacy Forms")
4. Copy the API key (starts with `re_`)

### Step 3: Verify Your Domain (Required for Custom From Addresses)

To send emails FROM patient addresses, you need to verify a domain in Resend:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `xpresscarepharmacy.com`)
4. Add the DNS records Resend provides to your domain's DNS settings
5. Wait for verification (usually a few minutes)

**Note**: If you don't verify a domain, Resend will still work but emails will be sent from `onboarding@resend.dev` or a similar default address, not from the patient's email.

### Step 4: Configure Environment Variables

Add these to your `.env.local` file (for development) and Vercel environment variables (for production):

```bash
# Resend API Key (required)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Pharmacy email address (where refill requests are sent)
PHARMACY_EMAIL=Pharmacy.xpresscare@gmail.com

# Remove or leave empty to use Resend instead of Google Apps Script
# NEXT_PUBLIC_FORM_ENDPOINT=
```

**Important**: 
- Remove or leave `NEXT_PUBLIC_FORM_ENDPOINT` empty to use the Resend-based Next.js API route
- If `NEXT_PUBLIC_FORM_ENDPOINT` is set, the form will use Google Apps Script instead

### Step 5: Deploy

1. Add the environment variables to Vercel:
   - Go to your project → **Settings** → **Environment Variables**
   - Add `RESEND_API_KEY` and `PHARMACY_EMAIL`
   - Set them for **Production** (and **Preview** if desired)
2. **Redeploy** your site

### Step 6: Test

1. Fill out the refill form on your website
2. Submit the form
3. Check the pharmacy email inbox
4. Verify the email shows as **FROM** the patient's email address

## How It Works

### With Resend (New Setup)

```
Patient fills form → Next.js API route (/api/refill) → Resend API → Email sent FROM patient@example.com TO pharmacy@example.com
```

- **From**: Patient's email address (e.g., `Lottiecatlin82@gmail.com`)
- **To**: Pharmacy email (`PHARMACY_EMAIL`)
- **Reply-To**: Patient's email (same as From)

### With Google Apps Script (Old Setup)

```
Patient fills form → Google Apps Script → Gmail API → Email sent FROM ibrahimmunaser@gmail.com TO pharmacy@example.com
```

- **From**: Script owner's email (`ibrahimmunaser@gmail.com`)
- **To**: Pharmacy email
- **Reply-To**: Patient's email

## Email Format

The email format is identical in both setups:
- HTML table with patient information
- Plain text version included
- Subject: "New refill request — [Patient Name]"
- All form fields included (name, DOB, phone, email, medications, etc.)

## Domain Verification Requirements

**Important**: To send emails FROM patient email addresses, you must verify a domain in Resend. Here's why:

1. **Without domain verification**: 
   - Resend will send emails, but they'll be FROM `onboarding@resend.dev` or similar
   - Not ideal for production use

2. **With domain verification**:
   - You can send FROM any email address on your verified domain
   - For patient emails (like `patient@gmail.com`), Resend will still send them, but they may be marked as spam if the domain doesn't match

**Best Practice**: 
- Verify your pharmacy's domain (e.g., `xpresscarepharmacy.com`)
- Use a "From" address like `refills@xpresscarepharmacy.com` 
- Set Reply-To to the patient's email
- This ensures deliverability while still allowing replies to go to the patient

## Troubleshooting

### Emails not being sent

1. Check that `RESEND_API_KEY` is set correctly
2. Check Resend dashboard for error logs
3. Check browser console and server logs for errors
4. Verify the form is submitting to `/api/refill` (not Google Apps Script)

### Emails sent from wrong address

1. Verify your domain in Resend dashboard
2. Check that the domain's DNS records are correct
3. Wait a few minutes for DNS propagation

### "Invalid API key" error

1. Verify `RESEND_API_KEY` is correct
2. Make sure there are no extra spaces or quotes
3. Check that the API key hasn't been revoked in Resend dashboard

## Cost

Resend offers:
- **Free tier**: 3,000 emails/month, 100 emails/day
- **Paid plans**: Start at $20/month for 50,000 emails

For a pharmacy, the free tier should be sufficient unless you're processing hundreds of refill requests per day.

## Security Notes

- API keys are stored as environment variables (never exposed to client)
- Form validation and honeypot protection still apply
- Rate limiting still applies
- No PHI is stored - emails are sent and data is discarded

## Comparison: Resend vs Google Apps Script

| Feature | Resend | Google Apps Script |
|---------|--------|-------------------|
| **From Address** | Patient's email | Script owner's email |
| **Setup Complexity** | Medium (domain verification) | Low |
| **Cost** | Free tier available | Free |
| **Email Limits** | 3,000/month (free) | 20/day (free Gmail) |
| **Deliverability** | Excellent (with verified domain) | Good |
| **Custom From** | ✅ Yes | ❌ No |

## Support

For issues:
1. Check Resend dashboard for delivery logs
2. Check server logs for errors
3. Verify environment variables are set correctly
4. Test with a simple form submission

