"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    programme: "",
    mode: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-white border-b-4 border-primary">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 font-extrabold text-lg tracking-wide">
              <span className="text-primary">S</span>
              <span className="text-accent">H</span>
              <span className="text-primary">R</span>
              <span className="text-accent">P</span>
            </div>
            <span className="text-xs text-gray-500 hidden sm:inline">
              &times; HRCI
            </span>
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">
            Strategic HR Centre
          </span>
        </div>
      </header>

      {/* Hero — text left, flyer right with seamless blend */}
      <section className="relative overflow-hidden bg-primary-dark min-h-100 sm:min-h-120">
        {/* Flyer image on the right side */}
        <Image
          src="/flyer1.png"
          alt="SHRP International HR Certification Programme"
          fill
          sizes="(max-width: 640px) 100vw, 60vw"
          className="object-cover object-top"
          quality={100}
          priority
        />

        {/* Gradient overlay: solid brand left → transparent right to reveal flyer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--primary-dark)_0%,var(--primary-dark)_30%,rgba(160,24,48,0.85)_50%,rgba(160,24,48,0.3)_70%,transparent_90%)]" />
        {/* Mobile: stronger overlay so text stays readable */}
        <div className="absolute inset-0 bg-primary-dark/60 sm:bg-transparent" />
        {/* Top/bottom vignette for polish */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(160,24,48,0.3)_0%,transparent_30%,transparent_70%,rgba(160,24,48,0.5)_100%)]" />

        {/* Hero content — left-aligned */}
        <div className="relative z-10 py-16 sm:py-20 px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center sm:items-start">
            <div className="sm:w-1/2 text-center sm:text-left text-white">
              <p className="text-xs sm:text-sm uppercase tracking-widest mb-3 opacity-80">
                International HR Certification Programme
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                Become a Globally Certified
                <br />
                <span className="text-white/95">Strategic HR Leader</span>
              </h1>
              <p className="text-base sm:text-lg opacity-90 max-w-md">
                HRCI-accredited PHRi&#8482; &amp; SPHRi&#174; certifications delivered by SHRP Strategic HR Centre.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">
                <span className="bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                  aPHRi&#8482;
                </span>
                <span className="bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                  PHRi&#8482;
                </span>
                <span className="bg-white/15 border border-white/30 rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                  SPHRi&#174;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Banner */}
      <div className="bg-primary-dark text-white text-center py-3 px-6">
        <p className="text-sm sm:text-base font-bold uppercase tracking-wide animate-pulse">
          &#128276; Admissions in Progress for the Next Cohort &mdash; Secure Your Spot Now!
        </p>
      </div>

      {/* Signup Form */}
      <section
        id="signup"
        className="bg-gray-50 py-10 px-6"
      >
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-center mb-1">
            Register Your Interest
          </h2>
          <p className="text-sm text-gray-500 text-center mb-6">
            Fill in your details below. Our team will reach out to you.
          </p>

          {submitted ? (
            <div className="text-center py-10">
              <p className="text-lg font-semibold text-primary">
                Thank you!
              </p>
              <p className="text-sm text-gray-600 mt-1">
                We&rsquo;ve received your details. Our team will contact you
                shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              />
              <select
                name="programme"
                required
                value={form.programme}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Select Programme</option>
                <option value="aPHRi">aPHRi&#8482;</option>
                <option value="PHRi">PHRi&#8482;</option>
                <option value="SPHRi">SPHRi&#174;</option>
              </select>
              <select
                name="mode"
                required
                value={form.mode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
              >
                <option value="">Preferred Mode</option>
                <option value="in-person">In-Person</option>
                <option value="online">Online</option>
              </select>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 rounded-md transition-colors text-sm cursor-pointer"
              >
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Programmes */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* PHRi */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-primary mb-1">
              PHRi&#8482;
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Degree + 2-4 years HR experience
            </p>
            <ul className="text-sm space-y-1.5 text-gray-700 mb-5">
              <li>&#10003; Business Management</li>
              <li>&#10003; Workforce Planning &amp; Talent Acquisition</li>
              <li>&#10003; Learning &amp; Development</li>
              <li>&#10003; Total Rewards</li>
              <li>&#10003; Employee Engagement</li>
              <li>&#10003; Employee &amp; Labor Relations</li>
              <li>&#10003; HR Information Management</li>
              <li>&#10003; Labor Laws of Ghana*</li>
            </ul>
            <div className="text-xs space-y-1 text-gray-500 border-t pt-3">
              <p>
                <strong>Duration:</strong> 10 weeks + Exam Prep
              </p>
              <p>
                <strong>Schedule:</strong> Saturdays only
              </p>
              <p>
                <strong>In-person:</strong> 9:00 AM &ndash; 3:30 PM
              </p>
              <p>
                <strong>Online:</strong> 8:00 AM &ndash; 12:30 PM
              </p>
            </div>
          </div>

          {/* SPHRi */}
          <div className="border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-accent mb-1">
              SPHRi&#174;
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Degree/Masters + 5 years HR experience
            </p>
            <ul className="text-sm space-y-1.5 text-gray-700 mb-5">
              <li>&#10003; Leadership &amp; Strategy</li>
              <li>&#10003; Workforce Planning &amp; Talent Acquisition</li>
              <li>&#10003; Talent Management</li>
              <li>&#10003; Total Rewards (Management &amp; Administration)</li>
              <li>&#10003; HR Info Management, Safety &amp; Security</li>
              <li>&#10003; Labor Laws of Ghana*</li>
            </ul>
            <div className="text-xs space-y-1 text-gray-500 border-t pt-3">
              <p>
                <strong>Duration:</strong> 10 weeks + Exam Prep
              </p>
              <p>
                <strong>Schedule:</strong> Saturdays only
              </p>
              <p>
                <strong>In-person:</strong> 9:00 AM &ndash; 3:30 PM
              </p>
              <p>
                <strong>Online:</strong> 8:00 AM &ndash; 12:30 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-5 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="font-semibold">SHRP Strategic HR Centre</p>
          <p>
            <span className="opacity-80">Call / WhatsApp:</span>{" "}
            <a href="tel:+233241584334" className="font-bold underline">
              024 158 4334
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
