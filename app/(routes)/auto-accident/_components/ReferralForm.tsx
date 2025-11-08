"use client";

import { useState, useRef } from "react";

interface FormData {
  role: string;
  referrerFirstName: string;
  referrerLastName: string;
  firmClinic: string;
  referrerPhone: string;
  referrerEmail: string;
  patientName: string;
  patientDob: string;
  patientPhone: string;
  caseDetails: string;
  consent: boolean;
}

export default function ReferralForm() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Please upload PDF files only.');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB.');
        return;
      }
      setUploadedFile(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setError(null);

    try {
      const formElement = e.currentTarget;
      const formData = new FormData(formElement);
      
      // Store form data for print summary
      const data: FormData = {
        role: formData.get('role') as string,
        referrerFirstName: formData.get('referrerFirstName') as string,
        referrerLastName: formData.get('referrerLastName') as string,
        firmClinic: formData.get('firmClinic') as string,
        referrerPhone: formData.get('referrerPhone') as string,
        referrerEmail: formData.get('referrerEmail') as string,
        patientName: formData.get('patientName') as string,
        patientDob: formData.get('patientDob') as string,
        patientPhone: formData.get('patientPhone') as string,
        caseDetails: formData.get('caseDetails') as string,
        consent: Boolean(formData.get('consent'))
      };

      // Submit to API endpoint (placeholder)
      const response = await fetch('/api/referrals/auto-accident', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to submit referral');
      }

      // Analytics - success
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'aa_referral_submit_success', {
          event_category: 'form',
          role: data.role
        });
      }

      setFormData(data);
      setSuccess(true);
      formElement.reset();
      setUploadedFile(null);

    } catch (err) {
      console.error('Referral submission error:', err);
      setError('Failed to submit referral. Please try again or call 313-914-3736.');
      
      // Analytics - error
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'aa_referral_submit_error', {
          event_category: 'form',
          error_message: err instanceof Error ? err.message : 'Unknown error'
        });
      }
    } finally {
      setPending(false);
    }
  };

  const handlePrintSummary = () => {
    if (!formData) return;
    
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const printContent = `
      <html>
        <head>
          <title>Auto Accident Referral Summary</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
            h1 { color: #10254D; border-bottom: 2px solid #10254D; padding-bottom: 10px; }
            .section { margin: 20px 0; }
            .label { font-weight: bold; color: #374151; }
            .value { margin-left: 10px; }
            .pharmacy-info { background: #f8fafc; padding: 15px; border-radius: 8px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <h1>Auto Accident Referral Summary</h1>
          
          <div class="section">
            <h3>Referrer Information</h3>
            <p><span class="label">Role:</span><span class="value">${formData.role}</span></p>
            <p><span class="label">Name:</span><span class="value">${formData.referrerFirstName} ${formData.referrerLastName}</span></p>
            <p><span class="label">Firm/Clinic:</span><span class="value">${formData.firmClinic}</span></p>
            <p><span class="label">Phone:</span><span class="value">${formData.referrerPhone}</span></p>
            <p><span class="label">Email:</span><span class="value">${formData.referrerEmail}</span></p>
          </div>

          <div class="section">
            <h3>Patient Information</h3>
            <p><span class="label">Name:</span><span class="value">${formData.patientName}</span></p>
            <p><span class="label">Date of Birth:</span><span class="value">${formData.patientDob}</span></p>
            <p><span class="label">Phone:</span><span class="value">${formData.patientPhone}</span></p>
          </div>

          <div class="section">
            <h3>Case Details</h3>
            <p>${formData.caseDetails}</p>
          </div>

          <div class="pharmacy-info">
            <h3>Destination Pharmacy</h3>
            <p><strong>Xpress Care Pharmacy</strong></p>
            <p>3040 E 7 Mile, Detroit, MI 48234</p>
            <p>Phone: 313-914-3736 • Fax: 313-914-5105</p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #6b7280;">
            Referral submitted on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
          </p>
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
  };

  // Analytics - form opened
  const handleFormFocus = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'aa_referral_open', {
        event_category: 'form'
      });
    }
  };

  if (success) {
    return (
      <div className="space-y-4">
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
          <h3 className="font-semibold text-emerald-800">Referral Submitted Successfully!</h3>
          <p className="mt-1 text-sm text-emerald-700">
            We've received your referral and will begin the benefits verification process immediately. 
            You'll receive confirmation within 2 hours.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePrintSummary}
            className="rounded-md bg-[#10254D] px-4 py-2 text-white hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
          >
            Print Summary
          </button>
          <button
            onClick={() => {
              setSuccess(false);
              setFormData(null);
            }}
            className="rounded-md border border-slate-300 bg-white px-4 py-2 text-brand-navy hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/30"
          >
            Submit Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-4">
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Referring as
        </label>
        <select
          name="role"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          defaultValue=""
        >
          <option value="">Select your role...</option>
          <option value="Attorney">Attorney</option>
          <option value="Physician">Physician</option>
          <option value="Claim Adjuster">Claim Adjuster</option>
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            First name
          </label>
          <input
            type="text"
            name="referrerFirstName"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Last name
          </label>
          <input
            type="text"
            name="referrerLastName"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Firm/Clinic name
        </label>
        <input
          type="text"
          name="firmClinic"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Your phone
          </label>
          <input
            type="tel"
            name="referrerPhone"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Your email
          </label>
          <input
            type="email"
            name="referrerEmail"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
      </div>

      <div className="border-t border-slate-200 pt-4">
        <h4 className="font-medium text-brand-navy">Patient Information</h4>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Patient full name
        </label>
        <input
          type="text"
          name="patientName"
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Date of birth
          </label>
          <input
            type="date"
            name="patientDob"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">
            Patient phone
          </label>
          <input
            type="tel"
            name="patientPhone"
            required
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Case details & medication needs
        </label>
        <textarea
          name="caseDetails"
          rows={4}
          required
          placeholder="Brief description of the case, anticipated medication needs, and any special considerations..."
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-[#10254D] focus:outline-none focus:ring-1 focus:ring-[#10254D]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Supporting documents (optional)
        </label>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="mt-1 w-full text-sm text-slate-500 file:mr-4 file:rounded-md file:border-0 file:bg-slate-50 file:px-4 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-100"
        />
        {uploadedFile && (
          <div className="mt-2 flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
            <span className="text-sm text-slate-700">{uploadedFile.name}</span>
            <button
              type="button"
              onClick={removeFile}
              className="text-slate-400 hover:text-slate-600"
              aria-label={`Remove ${uploadedFile.name}`}
            >
              ✕
            </button>
          </div>
        )}
        <p className="mt-1 text-xs text-slate-600">
          PDF only, max 10MB. For PHI, use our fax or encrypted portal.
        </p>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
        <h4 className="font-medium text-brand-navy">Destination Pharmacy</h4>
        <div className="mt-2 text-sm text-slate-700">
          <p><strong>Xpress Care Pharmacy</strong></p>
          <p>3040 E 7 Mile, Detroit, MI 48234</p>
          <p>Phone: 313-914-3736 • Fax: 313-914-5105</p>
        </div>
      </div>

      <div>
        <label className="flex items-start gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4"
          />
          <span>
            I consent to the sharing of necessary information for medication coordination 
            and confirm I have authority to refer this patient. I understand this referral 
            does not guarantee coverage or treatment.
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-[#10254D] px-4 py-2 text-white hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-[#10254D]/30"
      >
        {pending ? "Submitting Referral..." : "Submit Secure Referral"}
      </button>
    </form>
  );
}















