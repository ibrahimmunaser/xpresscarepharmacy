"use client";

import { useState, useRef } from "react";
import { track } from "../../_shared/analytics";

export function TravelUploadButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    track("travel_upload_cta_click");
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="text-sm text-brand-navy underline underline-offset-2 hover:text-brand-navy/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
      >
        Upload Itinerary / Shot Card
      </button>
      {isOpen && <TravelUploadModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}

function TravelUploadModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
    const validFiles = files.filter(file => {
      if (!allowedTypes.includes(file.type)) {
        alert(`${file.name}: Please upload PDF, JPG, or PNG files only.`);
        return false;
      }
      if (file.size > 10 * 1024 * 1024) {
        alert(`${file.name}: File size must be less than 10MB.`);
        return false;
      }
      return true;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0) return;
    
    try {
      // Simulate upload
      await new Promise((r) => setTimeout(r, 1000));
      
      track("travel_upload_submitted", { 
        fileCount: uploadedFiles.length,
        files: uploadedFiles.map(f => ({ name: f.name, type: f.type, size: f.size }))
      });
      
      setSuccess(true);
      
      // Auto-close after success
      setTimeout(() => {
        onClose();
        setSuccess(false);
        setUploadedFiles([]);
      }, 2000);
    } catch {
      alert('Upload failed. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-modal-title"
    >
      <div className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-6 shadow-xl">
        <h3 id="upload-modal-title" className="text-xl font-semibold text-brand-navy">
          Upload Travel Documents
        </h3>
        
        {success ? (
          <div className="mt-4 text-center">
            <div className="text-emerald-600">✓ Files uploaded successfully!</div>
            <p className="mt-2 text-sm text-slate-600">We'll review your documents before your consult.</p>
          </div>
        ) : (
          <div className="mt-4">
            <div className="mb-4 text-sm text-slate-600">
              <p>Upload your travel itinerary, vaccination records ("yellow card"), or doctor travel letters.</p>
              <p className="mt-1">Accepted: PDF, JPG, PNG • Max 10MB per file</p>
            </div>
            
            <div
              className={`relative rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
                dragActive
                  ? 'border-[#10254D] bg-[#10254D]/5'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                multiple
                onChange={handleFileInput}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              />
              
              <div className="text-sm text-slate-600">
                <div className="mb-2 text-2xl">📄</div>
                <div>Drag & drop files here</div>
                <div className="mt-1">or click to browse</div>
                <div className="mt-2 text-xs text-slate-500">PDF, JPG, PNG • Max 10MB each</div>
              </div>
            </div>
            
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-slate-700">Files to upload:</h4>
                <ul className="mt-2 space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <li key={index} className="flex items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                      <div className="text-sm">
                        <div className="font-medium text-brand-navy">{file.name}</div>
                        <div className="text-slate-500">
                          {(file.size / 1024 / 1024).toFixed(1)} MB
                        </div>
                      </div>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-slate-400 hover:text-slate-600"
                        aria-label={`Remove ${file.name}`}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-4">
            </div>
            
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-md border border-slate-300 px-4 py-2 text-brand-navy hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={uploadedFiles.length === 0}
                className="rounded-md bg-[#10254D] px-4 py-2 text-white hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
              >
                Upload Files
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelUploadButton;









