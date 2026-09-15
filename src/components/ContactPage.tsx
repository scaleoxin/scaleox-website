import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2, ShieldCheck, ArrowRight, Building, Globe } from 'lucide-react';
import { ContactFormData } from '../types';
import { BRAND_CONFIG } from '../data/content';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  onOpenStrategyCall: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenStrategyCall }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    instituteName: '',
    instituteType: 'Computer Training Institute',
    existingCourse: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({
    fullName: '',
    instituteName: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const snapshotName = formData.fullName;
    const snapshotInstitute = formData.instituteName;
    setSubmittedData({
      fullName: snapshotName,
      instituteName: snapshotInstitute
    });

    const googleFormAction = 'https://docs.google.com/forms/d/e/1FAIpQLScMk5NiM7x6m4BfDIAuPQrJq-deVhgMZkMewEc_VfyvXbx9KA/formResponse';
    const iframeTarget = 'gform_submission_hidden_iframe';

    // Reliable cross-origin-safe submission via dynamic hidden form targeted to hidden iframe
    try {
      let hiddenIframe = document.getElementById(iframeTarget) as HTMLIFrameElement | null;
      if (!hiddenIframe) {
        hiddenIframe = document.createElement('iframe');
        hiddenIframe.id = iframeTarget;
        hiddenIframe.name = iframeTarget;
        hiddenIframe.style.display = 'none';
        document.body.appendChild(hiddenIframe);
      }

      const postForm = document.createElement('form');
      postForm.action = googleFormAction;
      postForm.method = 'POST';
      postForm.target = iframeTarget;
      postForm.style.display = 'none';

      const fieldEntries: Record<string, string> = {
        'entry.550151508': formData.fullName,
        'entry.1791533940': formData.phone,
        'entry.979365783': formData.email,
        'entry.73639235': formData.instituteType,
        'entry.311825778': formData.instituteName,
        'entry.1757540095': formData.existingCourse,
        'entry.782064231': formData.message || ''
      };

      for (const [fieldName, fieldValue] of Object.entries(fieldEntries)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = fieldName;
        input.value = fieldValue;
        postForm.appendChild(input);
      }

      document.body.appendChild(postForm);
      postForm.submit();

      setTimeout(() => {
        postForm.remove();
      }, 3000);
    } catch (err) {
      console.error('Error submitting form via iframe:', err);
    }

    // Dual-redundancy submission with mode: 'no-cors'
    try {
      const formBody = new URLSearchParams();
      formBody.append('entry.550151508', formData.fullName);
      formBody.append('entry.1791533940', formData.phone);
      formBody.append('entry.979365783', formData.email);
      formBody.append('entry.73639235', formData.instituteType);
      formBody.append('entry.311825778', formData.instituteName);
      formBody.append('entry.1757540095', formData.existingCourse);
      formBody.append('entry.782064231', formData.message || '');

      fetch(googleFormAction, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody.toString()
      }).catch(() => {
        // Ignored in mode: no-cors
      });
    } catch {
      // Safe fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        instituteName: '',
        instituteType: 'Computer Training Institute',
        existingCourse: '',
        message: ''
      });
      try {
        confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
      } catch {
        // ignore
      }
    }, 750);
  };

  return (
    <div className="py-12 md:py-20 bg-[#F7F4EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#147D68] uppercase tracking-wider bg-[#DDEFE9] px-3.5 py-1 rounded-full">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#182A55] tracking-tight">
            Let's Talk About Your Institute.
          </h1>

          <p className="text-base sm:text-lg text-[#5F6B72] leading-relaxed">
            अगर आप अपने Existing Course को online ले जाकर Local Area से बाहर students तक पहुँचने की possibility explore करना चाहते हैं, हमसे बात करें.
          </p>
        </div>

        {/* 2 Column Layout: Direct Contact Info (5 cols) vs Inquiry Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Strategy Discussion Box */}
            <div className="bg-[#182A55] text-white p-6 sm:p-8 rounded-3xl space-y-4 shadow-md">
              <div className="text-xs font-bold uppercase tracking-wider text-[#DDEFE9]">
                Fastest Way to Get Feedback
              </div>
              <h3 className="text-xl font-bold text-white">
                Book a 1:1 Strategy Discussion
              </h3>
              <p className="text-xs sm:text-sm text-[#E2E0D8] leading-relaxed">
                Connect directly with our senior expansion strategist for a 30-minute review of your institute's courses.
              </p>
              <button
                onClick={onOpenStrategyCall}
                className="w-full bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 cursor-pointer cta-btn-shadow cta-pulse-btn"
              >
                <span>Book 1:1 Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
              </button>
            </div>

            {/* Direct Connect Methods */}
            <div className="bg-white border border-[#E2E0D8] rounded-3xl p-6 sm:p-8 space-y-5">
              <h4 className="text-base font-bold text-[#182A55]">
                Direct Contacts & Support
              </h4>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={BRAND_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F3] hover:bg-[#DDEFE9]/60 border border-[#E2E0D8] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#147D68] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#182A55]">WhatsApp Direct Line</div>
                    <div className="text-[#5F6B72]">{BRAND_CONFIG.supportPhone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_CONFIG.supportEmail}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F3] hover:bg-[#DDEFE9]/60 border border-[#E2E0D8] transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#182A55] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#182A55]">Email Inquiries</div>
                    <div className="text-[#5F6B72]">{BRAND_CONFIG.supportEmail}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF8F3] border border-[#E2E0D8]">
                  <div className="w-8 h-8 rounded-lg bg-[#B8734A] text-white flex items-center justify-center shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#182A55]">Operating Territory</div>
                    <div className="text-[#5F6B72]">{BRAND_CONFIG.addressLine}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#E2E0D8] rounded-3xl p-6 sm:p-8 shadow-sm">
            <iframe
              name="gform_submission_hidden_iframe"
              id="gform_submission_hidden_iframe"
              title="Google Form Submission Target"
              style={{ display: 'none' }}
              className="hidden"
            />
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-[#DDEFE9] text-[#147D68] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#182A55]">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6B72] max-w-md mx-auto">
                  Thank you! Your inquiry has been submitted successfully. Our team will get in touch with you shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/917583046291?text=Hi%20ScaleOX%20Team%2C%20I%20just%20sent%20a%20message%20regarding%20${encodeURIComponent(submittedData.instituteName || 'our institute')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#147D68] hover:bg-[#116956] text-white font-bold py-3 px-6 rounded-xl text-xs inline-flex items-center gap-2"
                  >
                    <span>Follow-up on WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsSubmitting(false);
                    }}
                    className="text-xs font-semibold text-[#182A55] hover:text-[#0F1C3D] underline cursor-pointer py-2 px-3"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-3 border-b border-[#E2E0D8]">
                  <h3 className="text-lg font-bold text-[#182A55]">
                    Institute Inquiry Form
                  </h3>
                  <p className="text-xs text-[#5F6B72]">
                    Fill in your details below and we will analyze your course viability.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="entry.550151508"
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      id="contact-phone"
                      name="entry.1791533940"
                      type="tel"
                      required
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="entry.979365783"
                      type="email"
                      required
                      placeholder="rajesh@institute.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Institute Category *
                    </label>
                    <select
                      id="contact-type"
                      name="entry.73639235"
                      value={formData.instituteType}
                      onChange={(e) => setFormData({ ...formData, instituteType: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    >
                      <option value="Computer Training Institute">Computer Training Institute</option>
                      <option value="IT & Software Training">IT & Software Training</option>
                      <option value="Accounting & Tally">Accounting & Tally</option>
                      <option value="Digital Skills">Digital Skills</option>
                      <option value="CAD & Drafting">CAD & Drafting</option>
                      <option value="Vocational Skills">Vocational Skills</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Institute Name *
                    </label>
                    <input
                      id="contact-inst-name"
                      name="entry.311825778"
                      type="text"
                      required
                      placeholder="e.g. Apex Computer Academy"
                      value={formData.instituteName}
                      onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#182A55] mb-1">
                      Existing Course Name *
                    </label>
                    <input
                      id="contact-course-name"
                      name="entry.1757540095"
                      type="text"
                      required
                      placeholder="e.g. Advanced Excel / Tally Prime"
                      value={formData.existingCourse}
                      onChange={(e) => setFormData({ ...formData, existingCourse: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#182A55] mb-1">
                    Your Message / Question
                  </label>
                  <textarea
                    id="contact-message"
                    name="entry.782064231"
                    rows={3}
                    placeholder="Tell us about your offline batches, target outstation reach, or specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F3] border border-[#E2E0D8] rounded-xl focus:border-[#182A55] focus:outline-hidden"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#182A55] hover:bg-[#0F1C3D] disabled:opacity-75 disabled:cursor-not-allowed text-white font-extrabold py-3.5 px-6 rounded-xl text-sm transition-all cta-btn-shadow cta-zoom-btn flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? 'SUBMITTING INQUIRY...' : 'BOOK A STRATEGY CALL / SEND INQUIRY'}</span>
                    <ArrowRight className="w-4 h-4 text-[#E8C8B7]" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1 text-[11px] text-[#5F6B72] text-center pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#147D68]" />
                  <span>Strict privacy • No third-party data sharing.</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
