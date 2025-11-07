"use client";

import { useState } from "react";
import { track } from "../../_shared/analytics";

type TravelData = {
  country: string;
  region: string;
  startDate: string;
  endDate: string;
  tripType: string;
  activities: string[];
  medicalNotes: string;
};

type VaccineRecommendation = {
  name: string;
  priority: "essential" | "recommended" | "consider";
  notes?: string;
};

export default function DestinationAdvisor() {
  const [isOpen, setIsOpen] = useState(false);
  const [travelData, setTravelData] = useState<TravelData>({
    country: "",
    region: "",
    startDate: "",
    endDate: "",
    tripType: "",
    activities: [],
    medicalNotes: ""
  });
  const [recommendations, setRecommendations] = useState<VaccineRecommendation[]>([]);
  const [timingWarning, setTimingWarning] = useState<string>("");

  const handleOpen = () => {
    setIsOpen(true);
    track("travel_destination_open");
  };

  const handleActivityChange = (activity: string, checked: boolean) => {
    setTravelData(prev => ({
      ...prev,
      activities: checked 
        ? [...prev.activities, activity]
        : prev.activities.filter(a => a !== activity)
    }));
  };

  const generateRecommendations = () => {
    const recs: VaccineRecommendation[] = [];
    
    // Base recommendations for most international travel
    recs.push(
      { name: "Hepatitis A", priority: "essential", notes: "Food/water risk worldwide" },
      { name: "Routine Updates", priority: "essential", notes: "Tdap, Flu, COVID-19, MMR" }
    );

    // Regional/activity-based recommendations
    if (travelData.country.toLowerCase().includes("africa") || 
        travelData.country.toLowerCase().includes("south america") ||
        travelData.country.toLowerCase().includes("asia")) {
      recs.push(
        { name: "Typhoid", priority: "recommended", notes: "Injection or oral series" },
        { name: "Hepatitis B", priority: "recommended", notes: "If not previously vaccinated" }
      );
    }

    if (travelData.activities.includes("rural") || travelData.activities.includes("animal")) {
      recs.push({ name: "Rabies Pre-exposure", priority: "consider", notes: "3-dose series" });
    }

    if (travelData.activities.includes("healthcare")) {
      recs.push({ name: "Meningococcal ACWY", priority: "recommended" });
    }

    if (travelData.activities.includes("freshwater")) {
      recs.push({ name: "Japanese Encephalitis", priority: "consider", notes: "Rural Asia areas" });
    }

    // Malaria advisory for tropical areas
    if (travelData.country.toLowerCase().includes("africa") || 
        travelData.country.toLowerCase().includes("amazon") ||
        travelData.activities.includes("rural")) {
      recs.push({ name: "Malaria Prevention", priority: "essential", notes: "Prophylaxis + prevention" });
    }

    // Yellow fever for certain areas
    if (travelData.country.toLowerCase().includes("africa") || 
        travelData.country.toLowerCase().includes("south america")) {
      recs.push({ name: "Yellow Fever", priority: "essential", notes: "Required for many countries*" });
    }

    // Check timing
    if (travelData.startDate) {
      const tripDate = new Date(travelData.startDate);
      const today = new Date();
      const daysUntilTrip = Math.ceil((tripDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysUntilTrip < 14) {
        setTimingWarning("Late planning! Some vaccines need 2+ weeks for protection. We'll prioritize key vaccines and prevention strategies.");
      } else if (daysUntilTrip < 30) {
        setTimingWarning("Consider scheduling soon. Some vaccines work better with more time.");
      } else {
        setTimingWarning("Good timing! You have time for full vaccine series if needed.");
      }
    }

    setRecommendations(recs);
    track("travel_destination_selected", { 
      country: travelData.country, 
      activities: travelData.activities.join(','),
      daysUntilTrip: travelData.startDate ? Math.ceil((new Date(travelData.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0
    });
  };

  const activities = [
    "rural", "hiking", "freshwater", "animal", "healthcare", "cruise"
  ];

  const activityLabels: Record<string, string> = {
    rural: "Rural areas/villages",
    hiking: "Hiking/trekking", 
    freshwater: "Freshwater activities",
    animal: "Animal contact",
    healthcare: "Healthcare work",
    cruise: "Cruise travel"
  };

  if (!isOpen) {
    return (
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm text-center">
        <h3 className="text-lg font-semibold text-brand-navy">Destination Advisory Tool</h3>
        <p className="mt-2 text-slate-600">
          Get personalized vaccine recommendations based on your destination and activities.
        </p>
        <button
          onClick={handleOpen}
          className="mt-4 rounded-md bg-[#10254D] px-4 py-2 text-white shadow hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
        >
          Check My Destination
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-brand-navy">Travel Advisory Tool</h3>
      <p className="mt-1 text-sm text-slate-600">
        Information only • Not stored • Not medical advice
      </p>
      
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700">Country/Region</label>
          <input
            type="text"
            value={travelData.country}
            onChange={(e) => setTravelData(prev => ({ ...prev, country: e.target.value }))}
            placeholder="e.g., Kenya, Thailand, Brazil"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700">City/Region (optional)</label>
          <input
            type="text"
            value={travelData.region}
            onChange={(e) => setTravelData(prev => ({ ...prev, region: e.target.value }))}
            placeholder="e.g., Nairobi, Bangkok"
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700">Travel start date</label>
          <input
            type="date"
            value={travelData.startDate}
            onChange={(e) => setTravelData(prev => ({ ...prev, startDate: e.target.value }))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700">Travel end date</label>
          <input
            type="date"
            value={travelData.endDate}
            onChange={(e) => setTravelData(prev => ({ ...prev, endDate: e.target.value }))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700">Trip type</label>
          <select
            value={travelData.tripType}
            onChange={(e) => setTravelData(prev => ({ ...prev, tripType: e.target.value }))}
            className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
          >
            <option value="">Select...</option>
            <option value="leisure">Leisure</option>
            <option value="business">Business</option>
            <option value="humanitarian">Humanitarian/Remote</option>
            <option value="vfr">Visiting Friends/Relatives</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-700">Activities (check all that apply)</label>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {activities.map((activity) => (
            <label key={activity} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={travelData.activities.includes(activity)}
                onChange={(e) => handleActivityChange(activity, e.target.checked)}
                className="h-4 w-4 text-brand-navy"
              />
              {activityLabels[activity]}
            </label>
          ))}
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-medium text-slate-700">Medical notes (pregnancy, conditions, etc.) - optional</label>
        <textarea
          value={travelData.medicalNotes}
          onChange={(e) => setTravelData(prev => ({ ...prev, medicalNotes: e.target.value }))}
          rows={2}
          placeholder="Any relevant health conditions (not stored)"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-slate-500 focus:outline-none focus:ring-0"
        />
      </div>
      
      <button
        onClick={generateRecommendations}
        disabled={!travelData.country}
        className="mt-4 rounded-md bg-[#10254D] px-4 py-2 text-white shadow hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#10254D]"
      >
        Get Advisory
      </button>
      
      {recommendations.length > 0 && (
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <h4 className="font-semibold text-brand-navy">Advisory Results for {travelData.country}</h4>
          
          {timingWarning && (
            <div className="mt-2 rounded-md bg-amber-50 border border-amber-200 p-3 text-sm text-amber-800">
              ⚠️ {timingWarning}
            </div>
          )}
          
          <div className="mt-3 space-y-2">
            <p className="text-sm font-medium text-slate-700">Suggested to discuss:</p>
            <div className="flex flex-wrap gap-2">
              {recommendations.map((rec, index) => (
                <span
                  key={index}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    rec.priority === "essential" 
                      ? "bg-red-100 text-red-800" 
                      : rec.priority === "recommended"
                      ? "bg-amber-100 text-amber-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {rec.name}
                  {rec.notes && <span className="ml-1 text-xs opacity-75">({rec.notes})</span>}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p><strong>Water/Food Safety:</strong> Drink bottled/boiled water, eat hot cooked foods, avoid raw vegetables and street food.</p>
            <p><strong>Mosquito Prevention:</strong> Use DEET repellent, wear long sleeves/pants at dawn/dusk, consider permethrin-treated clothing.</p>
          </div>
          
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => {
                // Trigger consult modal with destination pre-filled
                const consultBtn = document.querySelector('[data-consult-trigger]') as HTMLButtonElement;
                if (consultBtn) consultBtn.click();
              }}
              className="rounded-md bg-[#10254D] px-3 py-2 text-sm text-white shadow hover:opacity-95"
            >
              Book Pre-Travel Consult
            </button>
          </div>
        </div>
      )}
    </div>
  );
}









