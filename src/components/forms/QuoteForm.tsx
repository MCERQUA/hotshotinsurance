"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
];

const freightTypes = [
  "General Freight",
  "Hazmat/Dangerous Goods",
  "Oversized/Heavy Equipment",
  "High-Value Cargo",
  "Mixed Freight",
  "Other"
];

const yearsInBusiness = [
  "Less than 1 year",
  "1-2 years",
  "3-5 years",
  "5-10 years",
  "10+ years"
];

const numTrucks = [
  "1 truck",
  "2-3 trucks",
  "4-5 trucks",
  "6-10 trucks",
  "10+ trucks"
];

export function QuoteForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    yearsInBusiness: "",
    numTrucks: "",
    freightType: "",
    numEmployees: "",
    currentInsurance: "",
    additionalInfo: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    // Validate required fields
    if (!formData.companyName || !formData.firstName || !formData.lastName || 
        !formData.email || !formData.phone || !formData.state || !formData.yearsInBusiness ||
        !formData.numTrucks || !formData.freightType) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields");
      return;
    }

    try {
      // Prepare form data for Netlify Forms
      const submitData = new FormData();
      submitData.append("form-name", "hotshot-quote");
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, String(value));
      });

      const response = await fetch("/", {
        method: "POST",
        body: submitData,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          companyName: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          state: "",
          yearsInBusiness: "",
          numTrucks: "",
          freightType: "",
          numEmployees: "",
          currentInsurance: "",
          additionalInfo: "",
        });
      } else {
        setStatus("error");
        setErrorMessage("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An error occurred. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        name="hotshot-quote"
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6 bg-slate-800/50 p-8 rounded-lg border border-slate-700"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Get Your Hotshot Insurance Quote</h2>

        {/* Company Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-emerald-400">Company Information</h3>
          
          <div>
            <Label htmlFor="companyName" className="text-slate-200">
              Company Name *
            </Label>
            <Input
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your company name"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-slate-200">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-slate-200">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-emerald-400">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-slate-200">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-slate-200">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="state" className="text-slate-200">
              Primary State of Operation *
            </Label>
            <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                {states.map((state) => (
                  <SelectItem key={state} value={state} className="text-white hover:bg-slate-600">
                    {state}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hotshot Operation Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-emerald-400">Operation Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="yearsInBusiness" className="text-slate-200">
                Years in Hotshot Business *
              </Label>
              <Select value={formData.yearsInBusiness} onValueChange={(value) => handleSelectChange("yearsInBusiness", value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select years" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {yearsInBusiness.map((year) => (
                    <SelectItem key={year} value={year} className="text-white hover:bg-slate-600">
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="numTrucks" className="text-slate-200">
                Number of Trucks *
              </Label>
              <Select value={formData.numTrucks} onValueChange={(value) => handleSelectChange("numTrucks", value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select number" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {numTrucks.map((num) => (
                    <SelectItem key={num} value={num} className="text-white hover:bg-slate-600">
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="freightType" className="text-slate-200">
                Primary Freight Type *
              </Label>
              <Select value={formData.freightType} onValueChange={(value) => handleSelectChange("freightType", value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select freight type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  {freightTypes.map((type) => (
                    <SelectItem key={type} value={type} className="text-white hover:bg-slate-600">
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="numEmployees" className="text-slate-200">
                Number of Employees
              </Label>
              <Input
                id="numEmployees"
                name="numEmployees"
                type="number"
                value={formData.numEmployees}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="currentInsurance" className="text-slate-200">
              Current Insurance Status
            </Label>
            <Input
              id="currentInsurance"
              name="currentInsurance"
              value={formData.currentInsurance}
              onChange={handleChange}
              placeholder="e.g., No current coverage, Renewal needed, Looking to switch"
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <Label htmlFor="additionalInfo" className="text-slate-200">
            Additional Information or Questions
          </Label>
          <Textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Tell us about your specific coverage needs..."
            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-32"
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 p-4 bg-emerald-900/20 border border-emerald-500/50 rounded-lg">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <p className="text-emerald-200">
              Thank you! We've received your quote request. Josh will contact you shortly with personalized coverage options.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center gap-2 p-4 bg-red-900/20 border border-red-500/50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-400" />
            <p className="text-red-200">{errorMessage}</p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-lg transition"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get Your Quote"
          )}
        </Button>

        <p className="text-xs text-slate-400 text-center">
          * Required fields. We'll contact you within 24 hours with a personalized quote.
        </p>
      </form>
    </div>
  );
}
