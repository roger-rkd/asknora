'use client'

import { useState } from 'react'
import ChatBubble from './components/ChatBubble'
import NoraAvatar from './components/NoraAvatar'

// ── Feature icons ───────────────────────────────────────────────────────────

function IconStethoscope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.5v5a7.5 7.5 0 0015 0v-5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.5a2 2 0 014 0m7 0a2 2 0 014 0" />
      <circle cx="12" cy="19" r="2" />
      <line x1="12" y1="15.5" x2="12" y2="17" strokeLinecap="round" />
    </svg>
  )
}

function IconPill() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5l-5 5a4.243 4.243 0 006 6l5-5a4.243 4.243 0 00-6-6z" />
      <line x1="9.5" y1="14.5" x2="14.5" y2="9.5" strokeLinecap="round" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

// ── Speciality icons ────────────────────────────────────────────────────────

function IconDoc() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}

function IconCheckDoc() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  )
}

function IconTeam() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconBulb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  )
}

// ── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    id: 'symptom',
    title: 'Symptom Checker',
    desc: 'Describe your symptoms and Nora searches the NHS knowledge base to give you grounded, cited guidance on what might be happening and what to do next.',
    tags: ['RAG', 'Citation enforced'],
    icon: <IconStethoscope />,
    iconBg: '#EBF4FF',
    iconColor: '#005EB8',
    note: null,
  },
  {
    id: 'medication',
    title: 'Medication Info',
    desc: 'Ask about medications, dosages, home remedies, or drug interactions. Nora retrieves verified NHS information and flags special care for vulnerable groups.',
    tags: ['NHS-backed', 'Safe guidance'],
    icon: <IconPill />,
    iconBg: '#FFF0F3',
    iconColor: '#DA291C',
    note: null,
  },
  {
    id: 'appointment',
    title: 'Appointment Booking',
    desc: 'Get clear step-by-step instructions for booking any NHS appointment: routine GP, same-day urgent, specialist referral, nurse, or mental health support.',
    tags: ['All appointment types'],
    icon: <IconCalendar />,
    iconBg: '#F3F0FF',
    iconColor: '#7C3AED',
    note: 'Nora guides you through the process. She cannot book, cancel, or manage appointments on your behalf.',
  },
  {
    id: 'gp',
    title: 'GP Finder',
    desc: 'Share your postcode and Nora gives you a direct Google Maps link to GP surgeries nearby, plus the NHS service search for acceptance status and opening hours.',
    tags: ['England', 'Scotland', 'Wales', 'NI'],
    icon: <IconMapPin />,
    iconBg: '#FFF4F0',
    iconColor: '#EA580C',
    note: null,
  },
]

const STEPS = [
  {
    title: 'You send a message',
    desc: 'Type your health question naturally, just like texting a nurse.',
  },
  {
    title: 'Nora classifies intent',
    desc: 'An AI agent reads your message and routes it to the right specialist agent instantly.',
  },
  {
    title: 'NHS knowledge is retrieved',
    desc: 'The specialist agent searches a verified NHS document database before forming any response.',
  },
  {
    title: 'Confidence is scored',
    desc: 'Every response is scored 0 to 1. Low confidence routes to a human reviewer before reaching you.',
  },
]

const SPECIALITIES = [
  {
    title: 'NHS Standard RAG',
    desc: 'Responses generated using Retrieval-Augmented Generation from verified NHS documentation, not AI guesswork.',
    stat: 'Retrieval-first',
    icon: <IconDoc />,
    iconBg: '#EBF4FF',
    iconColor: '#005EB8',
  },
  {
    title: 'Citation Enforced',
    desc: 'Every answer must be traceable to a real NHS document or Nora returns an NHS 111 referral instead.',
    stat: '100% sourced',
    icon: <IconCheckDoc />,
    iconBg: '#E6F4EC',
    iconColor: '#007F3B',
  },
  {
    title: 'Emergency Bypass',
    desc: 'Emergency keywords skip all AI processing entirely. A 999 response is returned in under one second.',
    stat: 'Under 1 second',
    icon: <IconBolt />,
    iconBg: '#FFF0F0',
    iconColor: '#DA291C',
  },
  {
    title: 'Confidence Scoring',
    desc: 'Each response is scored 0 to 1. Scores below 0.7 are reviewed by a human before delivery.',
    stat: 'Threshold: 0.7',
    icon: <IconChart />,
    iconBg: '#F3F0FF',
    iconColor: '#7C3AED',
  },
  {
    title: '7-Agent Pipeline',
    desc: 'Seven specialist agents cover Symptoms, Medications, GP Finder, Appointments, Emergencies, Memory, and General queries.',
    stat: '7 specialists',
    icon: <IconTeam />,
    iconBg: '#FFF4F0',
    iconColor: '#EA580C',
  },
  {
    title: 'Session Memory',
    desc: 'Nora retains conversation context within each session so you never need to repeat yourself.',
    stat: 'Context-aware',
    icon: <IconBulb />,
    iconBg: '#E5F6F5',
    iconColor: '#00A499',
  },
]

const SAFETY_ITEMS = [
  {
    emoji: '🚨',
    title: 'Emergency bypass in under 1 second',
    desc: 'Any message containing emergency symptoms immediately returns a 999 response. No AI processing. No delay.',
  },
  {
    emoji: '📎',
    title: 'Every answer is citation-enforced',
    desc: 'If a response cannot be traced to a real NHS document, it is replaced with an NHS 111 referral. No uncited medical advice ever reaches a patient.',
  },
  {
    emoji: '👤',
    title: 'Human review on low confidence',
    desc: 'Responses scoring below 0.7 confidence trigger a human alert. A reviewer checks the draft before any follow-up is sent.',
  },
]

// ── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      {/* ── Fixed header: nav + emergency bar ───────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">

        {/* Nav */}
        <header style={{ background: '#005EB8' }}>
          <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span
                className="px-2.5 py-1 rounded text-white text-xs font-black tracking-widest select-none"
                style={{ background: '#003087', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                NHS
              </span>
              {/* Healthcare icon */}
              <svg className="w-4 h-4 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <rect x="9" y="2" width="6" height="20" rx="2" />
                <rect x="2" y="9" width="20" height="6" rx="2" />
              </svg>
              <span className="text-white font-bold text-sm tracking-tight hidden sm:inline">AskNora</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-white/75 hover:text-white text-sm transition-colors">Services</a>
              <a href="#how" className="text-white/75 hover:text-white text-sm transition-colors">How it works</a>
              <a href="#safety" className="text-white/75 hover:text-white text-sm transition-colors">Safety</a>
            </nav>
            <button
              onClick={() => setChatOpen(true)}
              className="text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors hover:bg-white hover:text-[#005EB8]"
              style={{ border: '1.5px solid rgba(255,255,255,0.6)' }}
            >
              Talk to Nora
            </button>
          </div>
        </header>

        {/* Emergency bar — always visible, fixed */}
        <div
          className="w-full px-5 sm:px-8 h-10 flex items-center gap-2.5"
          style={{ background: '#FFFDE7', borderBottom: '1px solid #FFE082' }}
        >
          <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#D97706' }} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-xs" style={{ color: '#78350F' }}>
            For emergencies call{' '}
            <strong className="font-bold" style={{ color: '#DA291C' }}>999</strong>.{' '}
            For urgent care call{' '}
            <strong className="font-bold" style={{ color: '#DA291C' }}>111</strong>.{' '}
            Nora does not replace professional medical advice.
          </p>
        </div>
      </div>

      {/* ── Hero (top padding clears 64px nav + 40px bar = 104px) ─────────── */}
      <section style={{ background: '#005EB8', paddingTop: '104px' }} className="relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'rgba(0,114,206,0.35)' }}
        />
        <div
          className="absolute bottom-0 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'rgba(0,48,135,0.4)' }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-5 rounded-full px-3.5 py-1.5 text-xs font-medium text-white"
              style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block flex-shrink-0" />
              NHS AI Health Assistant · Available 24/7
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-black text-white leading-tight mb-5"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              Your health questions,{' '}
              <span style={{ color: '#FFB81C' }}>answered instantly</span>
            </h1>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Nora is an AI-powered NHS virtual nurse. She checks symptoms, guides you to the right care,
              helps book appointments, and finds your nearest GP, all backed by verified NHS information.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => setChatOpen(true)}
                className="bg-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                style={{ color: '#003087' }}
              >
                Chat with Nora
              </button>
              <a
                href="#features"
                className="text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors hover:bg-white/10"
                style={{ border: '1.5px solid rgba(255,255,255,0.4)' }}
              >
                See what she can do
              </a>
            </div>

            <div className="flex gap-8" style={{ borderTop: '1px solid rgba(255,255,255,0.18)', paddingTop: '1.5rem' }}>
              {[
                { value: '7', label: 'Specialist agents' },
                { value: '<1s', label: 'Emergency response' },
                { value: '100%', label: 'NHS-cited answers' },
              ].map(s => (
                <div key={s.label}>
                  <p className="text-white text-2xl font-black leading-none mb-0.5">{s.value}</p>
                  <p className="text-blue-200 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Nora card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div
                className="absolute -top-3 right-6 z-10 flex items-center gap-1.5 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg"
                style={{ background: '#16A34A' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" />
                Online now
              </div>
              <div
                className="w-72 rounded-2xl p-6 text-center"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                }}
              >
                <div
                  className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden"
                  style={{ border: '3px solid rgba(255,255,255,0.6)', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
                >
                  <NoraAvatar className="w-full h-full" />
                </div>
                <h3
                  className="text-white font-bold text-lg mb-0.5"
                  style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
                >
                  Nora
                </h3>
                <p className="text-blue-200 text-xs mb-5">NHS Virtual Nurse Assistant</p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {['Symptoms', 'Medications', 'Appointments', 'GP Finder'].map(chip => (
                    <span
                      key={chip}
                      className="text-xs px-3 py-1 rounded-full text-white/80"
                      style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)' }}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────── */}
      <section id="features" className="py-16 lg:py-20" style={{ background: '#F8FAFC' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#005EB8' }}>
              WHAT NORA CAN DO
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              Four ways Nora helps you
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Every response is grounded in verified NHS documentation. Nora never guesses. If she is
              not confident, she tells you and connects you to the right service.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(f => (
              <div
                key={f.id}
                className="bg-white rounded-xl p-5 cursor-pointer hover:shadow-md transition-shadow"
                style={{ border: '1px solid #E2E8F0' }}
                onClick={() => setChatOpen(true)}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: f.iconBg, color: f.iconColor }}
                >
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{f.desc}</p>

                {f.note && (
                  <div
                    className="mb-3 p-2.5 rounded-lg text-xs leading-relaxed"
                    style={{ background: '#FFF8E1', border: '1px solid #FFE082', color: '#92400E' }}
                  >
                    <strong>Note:</strong> {f.note}
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {f.tags.map(t => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded font-medium"
                      style={{ background: '#EBF4FF', color: '#005EB8' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────────── */}
      <section id="how" className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#005EB8' }}>
              HOW IT WORKS
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900 mb-3"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              From message to answer in seconds
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
              Every message passes through a structured NHS-grade pipeline. Here is exactly what happens
              between you sending a question and Nora replying.
            </p>
          </div>

          {/* 4-step flow */}
          <div className="relative mb-16">
            <div
              className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
              style={{ background: '#CBD5E1' }}
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl mb-4 relative z-10"
                    style={{ background: '#005EB8', boxShadow: '0 0 0 4px white, 0 0 0 5px #CBD5E1' }}
                  >
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1.5">{step.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline stats bar */}
          <div
            className="rounded-2xl p-5 mb-12 grid grid-cols-2 sm:grid-cols-4 gap-5"
            style={{ background: '#F0F6FF', border: '1px solid #DBEAFE' }}
          >
            {[
              { value: '7', label: 'Agents in pipeline', sub: 'Symptom, Medication, GP, Appt, Emergency, Memory, General' },
              { value: '<3s', label: 'Avg. response time', sub: 'End-to-end including NHS retrieval' },
              { value: '0.7', label: 'Confidence threshold', sub: 'Below this triggers human review' },
              { value: '<1s', label: 'Emergency bypass', sub: '999 keywords skip AI entirely' },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-black mb-0.5" style={{ color: '#005EB8' }}>{stat.value}</p>
                <p className="text-gray-800 text-xs font-semibold mb-0.5">{stat.label}</p>
                <p className="text-gray-400 text-[11px] leading-snug">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Specialities grid */}
          <div className="mb-2">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#768692' }}>
              PIPELINE SPECIALITIES
            </p>
            <h3
              className="text-xl sm:text-2xl font-black text-gray-900 mb-6"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              What makes Nora different
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SPECIALITIES.map(s => (
              <div
                key={s.title}
                className="rounded-xl p-4 flex items-start gap-3"
                style={{ background: '#F8FAFC', border: '1px solid #E2E8F0' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: s.iconBg, color: s.iconColor }}
                >
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="font-bold text-gray-900 text-sm">{s.title}</p>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                      style={{ background: s.iconBg, color: s.iconColor }}
                    >
                      {s.stat}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety ───────────────────────────────────────────────────────── */}
      <section id="safety" className="py-16 lg:py-20" style={{ background: '#005EB8' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-blue-300">
              BUILT WITH SAFETY FIRST
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-fraunces), Georgia, serif' }}
            >
              Nora never guesses with your health
            </h2>
            <p className="text-blue-200 text-sm leading-relaxed mb-8">
              Every design decision in Nora&apos;s pipeline prioritises patient safety over helpfulness.
              If she cannot be certain, she says so and connects you to the right NHS service.
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="bg-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              style={{ color: '#005EB8' }}
            >
              Start a conversation
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {SAFETY_ITEMS.map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex items-start gap-4"
                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <span className="text-xl flex-shrink-0 mt-0.5">{s.emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-blue-200 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer style={{ background: '#003087' }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
          >
            <div className="flex items-center gap-3">
              <span
                className="px-2.5 py-1 rounded text-white text-xs font-black tracking-widest"
                style={{ background: '#005EB8', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                NHS
              </span>
              <div>
                <p className="text-white font-bold text-sm">AskNora</p>
                <p className="text-blue-300 text-xs">NHS AI Virtual Health Assistant</p>
              </div>
            </div>
            <nav className="flex gap-6">
              <a href="#features" className="text-blue-300 hover:text-white text-xs transition-colors">Services</a>
              <a href="#how" className="text-blue-300 hover:text-white text-xs transition-colors">How it works</a>
              <a href="#safety" className="text-blue-300 hover:text-white text-xs transition-colors">Safety</a>
            </nav>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5">
            <p className="text-blue-300 text-xs">
              Built by <span className="text-white font-medium">Rohit Kumar Dubey</span>
              {' '}&middot;{' '}
              <a
                href="https://github.com/roger-rkd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-white transition-colors underline"
              >
                GitHub
              </a>
            </p>
            <p className="text-blue-400/70 text-xs text-center sm:text-right">
              For informational purposes only. Not a substitute for professional medical advice.
            </p>
          </div>
        </div>
      </footer>

      <ChatBubble isOpen={chatOpen} onOpenChange={setChatOpen} />
    </>
  )
}
