'use client'

import { useState } from 'react'
import ChatBubble from './components/ChatBubble'

// ── Decorative SVG elements ────────────────────────────────────────────────────

function EcgLine({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M0,28 L180,28 L196,28 L204,20 L210,36 L216,4 L222,52 L227,28 L260,28 L268,22 L274,28
           L480,28 L496,28 L504,20 L510,36 L516,4 L522,52 L527,28 L560,28 L568,22 L574,28
           L780,28 L796,28 L804,20 L810,36 L816,4 L822,52 L827,28 L860,28 L868,22 L874,28
           L1080,28 L1096,28 L1104,20 L1110,36 L1116,4 L1122,52 L1127,28 L1160,28 L1168,22 L1174,28 L1200,28"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MedicalCrossLarge({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <rect x="36" y="8" width="28" height="84" rx="10" />
      <rect x="8" y="36" width="84" height="28" rx="10" />
    </svg>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

// Clipboard with ECG pulse line — symptom checker
function IconSymptom() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h1.2l.8-2 1.8 4 1-3 .7 1H17" strokeWidth={1.5} />
    </svg>
  )
}

// Pill capsule — medication
function IconPill() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <rect x="3" y="9.5" width="18" height="5" rx="2.5" />
      <line x1="12" y1="9.5" x2="12" y2="14.5" strokeWidth={1.8} />
      <line x1="10.5" y1="7" x2="13.5" y2="7" strokeLinecap="round" strokeWidth={1.5} />
      <line x1="10.5" y1="17" x2="13.5" y2="17" strokeLinecap="round" strokeWidth={1.5} />
    </svg>
  )
}

// Map pin with medical cross inside — GP finder
function IconGpPin() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <line x1="12" y1="7" x2="12" y2="13" strokeLinecap="round" strokeWidth={1.8} />
      <line x1="9" y1="10" x2="15" y2="10" strokeLinecap="round" strokeWidth={1.8} />
    </svg>
  )
}

// Calendar with medical cross — appointments
function IconCalendar() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      <line x1="12" y1="12.5" x2="12" y2="17.5" strokeLinecap="round" strokeWidth={1.8} />
      <line x1="9.5" y1="15" x2="14.5" y2="15" strokeLinecap="round" strokeWidth={1.8} />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    id: 'symptom',
    title: 'Symptom Checker',
    description:
      'Describe what you\'re feeling and Nora will help you understand your symptoms, suggest what might be causing them, and advise on the right next step — whether that\'s home care, a GP visit, or calling 111.',
    icon: <IconSymptom />,
    accent: '#005EB8',
    bg: '#EBF4FF',
    examples: ['"I have a headache"', '"I feel dizzy"', '"My throat is sore"'],
    note: null,
  },
  {
    id: 'medication',
    title: 'Medication Advice',
    description:
      'Ask what you can take for a common condition, whether a medication is safe, or what home remedies might help — all grounded in NHS-trusted clinical information.',
    icon: <IconPill />,
    accent: '#007F3B',
    bg: '#E6F4EC',
    examples: ['"What can I take for a cold?"', '"Is ibuprofen safe?"', '"Home remedies for fever"'],
    note: null,
  },
  {
    id: 'gp',
    title: 'GP Finder',
    description:
      'Share your postcode and Nora will give you a direct Google Maps link showing GP surgeries, pharmacies, and urgent care centres near you, alongside the NHS service search.',
    icon: <IconGpPin />,
    accent: '#AE2573',
    bg: '#F9EEF5',
    examples: ['"Find a GP near SW1A 1AA"', '"Nearest pharmacy to me"', '"Urgent care centre nearby"'],
    note: null,
  },
  {
    id: 'appointment',
    title: 'Appointment Help',
    description:
      'Get clear, step-by-step instructions on how to book, reschedule, or cancel any NHS appointment — GP, specialist, nurse, or mental health. You remain in full control throughout.',
    icon: <IconCalendar />,
    accent: '#00A499',
    bg: '#E5F6F5',
    examples: ['"How do I book a GP?"', '"I need a specialist referral"', '"Cancel my appointment"'],
    note: 'Nora guides you through the process — she cannot book, cancel, or manage appointments on your behalf.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <div
      className="min-h-screen flex flex-col bg-health-pattern"
      style={{ background: '#F0F4F5', fontFamily: 'var(--font-geist-sans), Arial, sans-serif' }}
    >

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header style={{ background: '#005EB8' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="px-2 py-0.5 rounded text-white text-xs font-black tracking-widest select-none"
              style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.35)' }}
            >
              NHS
            </span>
            <span className="text-white font-bold text-base tracking-tight">AskNora</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-blue-100 text-xs hidden sm:inline">Assistant online</span>
          </div>
        </div>
      </header>

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden text-center px-5 sm:px-8 pt-16 sm:pt-20 pb-0"
        style={{ background: 'linear-gradient(155deg, #002060 0%, #003087 35%, #005EB8 70%, #0072CE 100%)' }}
      >
        {/* Decorative large medical crosses */}
        <MedicalCrossLarge className="absolute -top-8 -right-8 w-48 h-48 text-white opacity-[0.04] pointer-events-none select-none" />
        <MedicalCrossLarge className="absolute top-1/2 -left-14 w-40 h-40 text-white opacity-[0.04] pointer-events-none select-none" />
        <MedicalCrossLarge className="absolute -bottom-4 right-1/4 w-28 h-28 text-white opacity-[0.03] pointer-events-none select-none" />

        <div className="relative max-w-2xl mx-auto">
          {/* Medical cross avatar */}
          <div
            className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-2xl"
            style={{ background: 'rgba(255,255,255,0.14)', border: '2px solid rgba(255,255,255,0.28)' }}
          >
            <svg className="w-11 h-11 text-white" viewBox="0 0 44 44" fill="currentColor">
              <rect x="16" y="3" width="12" height="38" rx="4" />
              <rect x="3" y="16" width="38" height="12" rx="4" />
            </svg>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-4 border border-white/20 backdrop-blur-sm">
            <svg className="w-3.5 h-3.5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Available 24 hours · 7 days a week
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 leading-tight">
            Hi, I'm Nora
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            Your NHS virtual health assistant. Ask me about symptoms, medications, finding a GP, or getting appointment guidance — any time of day.
          </p>

          <button
            onClick={() => setChatOpen(true)}
            className="inline-flex items-center gap-2.5 bg-white font-bold text-sm px-7 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-105 active:scale-95 hover:shadow-xl mb-4"
            style={{ color: '#003087' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Start chatting with Nora
          </button>

          <p className="text-blue-200/70 text-xs mb-0">
            Not a substitute for medical advice · Emergency? Call <strong className="text-white/90">999</strong>
          </p>
        </div>

        {/* ECG line strip — at the base of the hero */}
        <div className="relative mt-10 -mb-px">
          <EcgLine className="w-full h-14 text-white/20" />
          {/* Gradient fade at the edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0072CE] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0072CE] to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── Capabilities ───────────────────────────────────────────────── */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-5 sm:px-8 py-12">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#768692' }}>
            What Nora can help with
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Four things, done well</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CAPABILITIES.map(cap => (
            <div
              key={cap.id}
              className="bg-white rounded-2xl overflow-hidden cursor-pointer group nhs-card-hover"
              style={{ boxShadow: '0 1px 6px rgba(0,0,0,0.08)' }}
              onClick={() => setChatOpen(true)}
            >
              {/* Coloured top accent strip */}
              <div className="h-1.5 w-full" style={{ background: cap.accent }} />

              <div className="p-6">
                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{ background: cap.bg, color: cap.accent }}
                  >
                    {cap.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base">{cap.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{cap.description}</p>

                {/* Appointment-only guidance disclaimer */}
                {cap.note && (
                  <div
                    className="flex items-start gap-2 p-2.5 rounded-xl mb-4"
                    style={{ background: '#FFF8E1', border: '1px solid #FFE082' }}
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#D97706' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs leading-relaxed" style={{ color: '#92400E' }}>
                      {cap.note}
                    </p>
                  </div>
                )}

                {/* Example prompts */}
                <div className="flex flex-wrap gap-1.5">
                  {cap.examples.map(ex => (
                    <span
                      key={ex}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ background: cap.bg, color: cap.accent }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>

                {/* Hover CTA */}
                <div
                  className="inline-flex items-center gap-1 mt-4 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: cap.accent }}
                >
                  Ask Nora
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ─────────────────────────────────────────── */}
        <div
          className="mt-8 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: '#fff', border: '1.5px solid #E2E8F0', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
        >
          <div className="flex items-center gap-4">
            {/* Heartbeat icon */}
            <div
              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: '#EBF4FF', color: '#005EB8' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Not sure where to start?</p>
              <p className="text-gray-500 text-xs mt-0.5">Just say "hi" — Nora will guide you from there.</p>
            </div>
          </div>
          <button
            onClick={() => setChatOpen(true)}
            className="flex-shrink-0 flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all hover:opacity-90 active:scale-95"
            style={{ background: '#005EB8' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Open chat
          </button>
        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer style={{ background: '#003087' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span
              className="px-2 py-0.5 rounded text-white text-[10px] font-black tracking-widest"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              NHS
            </span>
            <span className="text-blue-200 text-xs">AskNora — NHS Virtual Health Assistant</span>
          </div>
          <p className="text-blue-300/70 text-xs">
            For informational purposes only · Not a substitute for professional medical advice
          </p>
        </div>
      </footer>

      {/* ── Floating chat bubble ────────────────────────────────────────── */}
      <ChatBubble isOpen={chatOpen} onOpenChange={setChatOpen} />
    </div>
  )
}
