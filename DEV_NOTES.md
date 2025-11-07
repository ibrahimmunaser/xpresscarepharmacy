# Xpress Care Pharmacy - Prescription Refill & Transfer System

## Overview

This system provides a production-ready online prescription refill and transfer system for Xpress Care Pharmacy. Patients can submit refill or transfer requests via web forms, which generates PDFs and faxes them securely to the pharmacy.

## Architecture

- **Frontend**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **PDF Generation**: pdf-lib for in-memory PDF creation
- **Fax Providers**: Abstracted adapter pattern supporting multiple providers
- **Validation**: Zod schemas for form validation
- **Security**: HIPAA-compliant design, rate limiting, honeypot protection

## Environment Configuration

Copy `.env.example` to `.env.local` and configure:

### Required Settings
```bash
CLINIC_NAME="Xpress Care Pharmacy"
CLINIC_ADDRESS="3040 E 7 Mile, Detroit, MI 48234"
CLINIC_PHONE="313-914-3736"
CLINIC_FAX="313-914-5105"
CLINIC_HOURS="Mon–Fri 10:00 AM – 6:00 PM"
```

### Fax Provider Configuration

Set `FAX_PROVIDER` to one of: `PHAXIO | SRFAX | RINGCENTRAL | FAXPLUS | MOCK`

#### PHAXIO
```bash
FAX_PROVIDER="PHAXIO"
PHAXIO_API_KEY="your_api_key"
PHAXIO_API_SECRET="your_api_secret"
```

#### SRFAX
```bash
FAX_PROVIDER="SRFAX"
SRFAX_API_KEY="your_api_key"
SRFAX_API_SECRET="your_api_secret"
SRFAX_ACCOUNT_ID="your_account_id"
```

#### RingCentral
```bash
FAX_PROVIDER="RINGCENTRAL"
RINGCENTRAL_CLIENT_ID="your_client_id"
RINGCENTRAL_CLIENT_SECRET="your_client_secret"
RINGCENTRAL_JWT="your_jwt_token"
```

#### FaxPlus
```bash
FAX_PROVIDER="FAXPLUS"
FAXPLUS_API_KEY="your_api_key"
```

#### Mock (Development)
```bash
FAX_PROVIDER="MOCK"
```

### Optional Settings
```bash
FAX_WEBHOOK_SECRET="random_32_byte_hex_string"
FAX_SENDING_WINDOW="08:00-21:00"
FAX_MAX_RETRIES="3"
FAX_RETRY_DELAY_SECONDS="60"
```

## Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Test with Mock provider**:
   - Set `FAX_PROVIDER="MOCK"` in `.env.local`
   - Visit `http://localhost:3000/test-fax` to test the system

## API Endpoints

- `POST /api/refill` - Submit prescription refill request
- `POST /api/transfer` - Submit prescription transfer request
- `POST /api/fax/webhook` - Receive fax delivery receipts (optional)

## Routes

- `/refill` - Prescription refill form
- `/transfer` - Prescription transfer form
- `/location` - Pharmacy location information
- `/test-fax` - Test fax functionality (development only)

## Testing Guide

### Local Testing with Mock Provider

1. Set `FAX_PROVIDER="MOCK"` in `.env.local`
2. Start the development server
3. Test the refill form:
   - Visit `http://localhost:3000/refill`
   - Fill out the form with test data
   - Submit and verify success message
4. Test the transfer form:
   - Visit `http://localhost:3000/transfer`
   - Fill out the form with test data
   - Submit and verify success message
5. Test the fax system directly:
   - Visit `http://localhost:3000/test-fax`
   - Click "Send Test Fax"
   - Verify success message and console logs

### Testing with Real Fax Provider

1. Configure your chosen fax provider credentials
2. Update `FAX_PROVIDER` to your provider
3. Use the `/test-fax` page to send a test fax
4. Verify receipt at the clinic fax machine (313-914-5105)

### Failure Path Testing

1. Temporarily break credentials (set invalid API key)
2. Submit a form
3. Verify error message appears: "We couldn't send your request by fax. Please call 313-914-3736."

## Security Features

- **Rate Limiting**: 5 submissions per 10 minutes per IP
- **Honeypot Protection**: Hidden fields to trap bots
- **Input Validation**: Zod schemas validate all form data
- **PHI Protection**: No patient data logged or stored
- **E.164 Normalization**: Phone numbers normalized before fax
- **PDF Memory-Only**: PDFs generated and discarded in memory

## Privacy & Compliance

- PHI is held in memory for the duration of the request only
- PDFs are generated in memory and never stored
- Form data is not persisted after fax transmission
- Logs contain only metadata (provider, fax ID, timestamps)
- HIPAA-capable fax providers used for transmission

## Post-Deployment Checklist

### Before Going Live

1. ✅ Set `FAX_PROVIDER` to your chosen real provider
2. ✅ Add real API credentials to environment variables
3. ✅ Send test fax from `/test-fax` to clinic machine
4. ✅ Verify paper header shows "Xpress Care Pharmacy"
5. ✅ Test failure path by breaking credentials temporarily
6. ✅ Review privacy notice in footer with clinic owner
7. ✅ Remove or restrict access to `/test-fax` page in production

### Production Monitoring

- Monitor fax delivery success rates
- Set up alerts for failed fax transmissions
- Review rate limiting effectiveness
- Monitor for bot/spam submissions

## File Structure

```
app/
├── api/
│   ├── refill/route.ts          # Refill API endpoint
│   ├── transfer/route.ts        # Transfer API endpoint
│   └── fax/webhook/route.ts     # Webhook for delivery receipts
├── refill/page.tsx              # Refill form page
├── transfer/page.tsx            # Transfer form page
├── location/page.tsx            # Single location page
└── test-fax/page.tsx           # Test page (dev only)

components/
├── forms/
│   ├── RefillForm.tsx          # Refill form component
│   └── TransferForm.tsx        # Transfer form component
└── ui/
    ├── Field.tsx               # Form field components
    ├── Button.tsx              # Button component
    ├── Alert.tsx               # Alert/notification component
    └── Section.tsx             # Layout section component

lib/
├── env.ts                      # Environment validation
├── schemas.ts                  # Zod validation schemas
├── phone.ts                    # Phone number utilities
├── ratelimit.ts               # Rate limiting utility
├── metrics.ts                 # Logging utility
├── fax/
│   ├── types.ts               # Fax provider interface
│   ├── index.ts               # Provider factory
│   ├── sendWithRetry.ts       # Retry logic
│   ├── mock.ts                # Mock provider
│   ├── phaxio.ts             # Phaxio provider
│   ├── srfax.ts              # SRFax provider
│   ├── ringcentral.ts        # RingCentral provider
│   └── faxplus.ts            # FaxPlus provider
└── pdf/
    ├── common.ts              # PDF utilities
    ├── refill.ts             # Refill PDF generator
    └── transfer.ts           # Transfer PDF generator
```

## Troubleshooting

### Common Issues

1. **"Missing credentials" error**
   - Verify your fax provider credentials are set correctly
   - Check that `FAX_PROVIDER` matches your configured provider

2. **PDF generation errors**
   - Ensure all required form fields are provided
   - Check for special characters in text fields

3. **Rate limiting triggered**
   - Default limit is 5 submissions per 10 minutes per IP
   - Adjust in `lib/ratelimit.ts` if needed

4. **Form validation errors**
   - Check Zod schemas in `lib/schemas.ts`
   - Ensure all required fields are provided

### Debug Mode

In development, detailed logs are shown in the console:
- Fax attempt/success/failure events
- Provider responses (without PHI)
- Rate limiting actions

## Future Enhancements

- Replace in-memory rate limiting with Redis for multi-instance deployments
- Add real-time fax status updates via webhooks
- Implement delayed sending based on business hours
- Add support for multiple pharmacy locations
- Integrate with pharmacy management systems


















