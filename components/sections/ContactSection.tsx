"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { COMPANY_INFO, OFFICE_LOCATIONS } from "@/data/companyData";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid work email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service category"),
  projectDescription: z.string().min(10, "Please provide project details (at least 10 characters)"),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAFAFA] text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-sans uppercase font-semibold text-brand-600 tracking-wider block">
                Start a Conversation
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Tell us what you&apos;re building &mdash; we&apos;ll take it from there.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                Share your requirements and we will respond within one business day with a direct assessment from our senior engineers.
              </p>
            </div>

            {/* Verified Benefits */}
            <div className="space-y-2 pt-2 border-t border-slate-200">
              <h4 className="text-xs font-sans uppercase font-semibold text-slate-500 tracking-wider mb-3">
                Why Clients Partner With Us
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-sans text-slate-700">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-600" /><span>Client-Oriented</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-600" /><span>Independent & Competent</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-600" /><span>Results-Driven</span></div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-brand-600" /><span>Transparent Pricing</span></div>
              </div>
            </div>

            {/* What Happens Next */}
            <div className="p-4 rounded-lg bg-white border border-slate-200 space-y-2">
              <h4 className="text-xs font-sans uppercase font-semibold text-slate-900">What Happens Next</h4>
              <ol className="space-y-1.5 text-xs text-slate-600 font-sans">
                <li><strong className="text-slate-900">1.</strong> We schedule a call at your convenience.</li>
                <li><strong className="text-slate-900">2.</strong> We conduct a discovery & consulting meeting.</li>
                <li><strong className="text-slate-900">3.</strong> We prepare a detailed proposal and timeline.</li>
              </ol>
            </div>

            {/* Direct Contacts */}
            <div className="space-y-3 pt-2 text-sm font-sans">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-slate-900 hover:text-brand-600 font-medium transition-colors">
                  {COMPANY_INFO.primaryEmail}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <div className="flex flex-wrap gap-4">
                  <span>US: <a href={`tel:${COMPANY_INFO.usPhone}`} className="text-slate-900 font-medium">{COMPANY_INFO.usPhone}</a></span>
                  <span>India: <a href={`tel:${COMPANY_INFO.indiaPhone}`} className="text-slate-900 font-medium">{COMPANY_INFO.indiaPhone}</a></span>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <h4 className="text-xs font-sans uppercase font-semibold text-slate-500 tracking-wider">
                Office Locations
              </h4>
              <ul className="space-y-3 text-xs font-sans text-slate-600">
                {OFFICE_LOCATIONS.map((loc) => (
                  <li key={loc.city} className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-semibold">{loc.city}, {loc.country}</strong>
                      {loc.isHQ && <span className="ml-2 text-[10px] font-mono bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">HQ</span>}
                      <p className="text-slate-600 mt-0.5 leading-relaxed">{loc.address}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "IT Consulting & Advisory",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  };

  return (
    <div>
      {isSuccess ? (
        <div className="p-8 rounded-lg bg-emerald-50 border border-emerald-200 text-center space-y-4 font-sans">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h3 className="font-display text-xl font-bold text-slate-900">Consultation Request Received</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you for contacting Aspire Software Consultancy. A senior technical consultant will review your project details and respond within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="mt-4 px-4 py-2 rounded bg-slate-900 text-white text-xs font-medium"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-sans text-slate-900" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                {...register("firstName")}
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.firstName ? "border-red-500" : "border-slate-300"
                } text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900`}
                placeholder="Jane"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                {...register("lastName")}
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.lastName ? "border-red-500" : "border-slate-300"
                } text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={`w-full px-4 py-3 rounded-lg bg-white border ${
                  errors.email ? "border-red-500" : "border-slate-300"
                } text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900`}
                placeholder="jane@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                Phone Number (Optional)
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                {...register("company")}
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
                Service Required <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                {...register("service")}
                className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                <option value="IT Consulting & Advisory">IT Consulting & Advisory</option>
                <option value="Salesforce CRM Solutions">Salesforce CRM Solutions</option>
                <option value="Microsoft Dynamics CRM">Microsoft Dynamics CRM</option>
                <option value="Web Application Development">Web Application Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="ASC HRMS Product Demo">ASC HRMS Product Demo</option>
                <option value="Application Maintenance & Support">Application Maintenance & Support</option>
                <option value="Dedicated Developer Teams">Dedicated Developer Teams</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="projectDescription" className="block text-xs font-semibold uppercase text-slate-700 mb-2">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              rows={4}
              {...register("projectDescription")}
              className={`w-full px-4 py-3 rounded-lg bg-white border ${
                errors.projectDescription ? "border-red-500" : "border-slate-300"
              } text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900`}
              placeholder="Briefly describe your goals, technology stack, or timeline requirements..."
            />
            {errors.projectDescription && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.projectDescription.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors shadow-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <span>Schedule a Free Consultation</span>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
