'use client'

import { useState, useRef, useEffect, useCallback } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'I have a headache',
  'What can I take for a cold?',
  'Find a GP near me',
  'How do I book an appointment?',
]

const NHS_LOGO = (
  <svg viewBox="0 0 50 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-auto">
    <rect width="50" height="26" rx="2" fill="white" fillOpacity="0.15" />
    <text x="25" y="19" textAnchor="middle" fill="white" fontSize="14" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">NHS</text>
  </svg>
)

interface Props {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function ChatBubble({ isOpen, onOpenChange }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi, I'm Nora 👋 — your NHS virtual health assistant. I can help with symptoms, medications, appointments, and more. How can I help you today?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionId] = useState(() => crypto.randomUUID())
  const [hasUnread, setHasUnread] = useState(true)
  const [panelMounted, setPanelMounted] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      setPanelMounted(true)
      setHasUnread(false)
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
        inputRef.current?.focus()
      }, 50)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const sendMessage = useCallback(async (text?: string) => {
    const userMessage = (text ?? input).trim()
    if (!userMessage || loading) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, sessionId }),
      })
      const data = await res.json()
      const reply =
        data.output || data.response || data.message || 'Sorry, I could not process your request.'
      setMessages(prev => [...prev, { role: 'assistant', content: reply }])
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ])
    } finally {
      setLoading(false)
    }
  }, [input, loading, sessionId])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const showSuggestions = messages.length === 1 && !loading

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      {panelMounted && (
        <div
          className={`
            w-[370px] max-w-[calc(100vw-3rem)] rounded-2xl overflow-hidden flex flex-col
            transition-all duration-300 ease-out origin-bottom-right
            ${isOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto chat-panel-enter'
              : 'opacity-0 scale-95 translate-y-3 pointer-events-none'
            }
          `}
          style={{
            maxHeight: '600px',
            boxShadow: '0 12px 48px rgba(0,48,135,0.18), 0 2px 12px rgba(0,0,0,0.1)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #003087 0%, #005EB8 100%)' }}
          >
            <div
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-inner"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight tracking-wide">Nora</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <p className="text-blue-200 text-xs leading-none">NHS Virtual Assistant · Online</p>
              </div>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white transition-colors hover:bg-white/20"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Disclaimer */}
          <div
            className="flex items-start gap-2 px-3.5 py-2 flex-shrink-0"
            style={{ background: '#FFF8E1', borderBottom: '1px solid #FFE082' }}
          >
            <svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#D97706' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-xs leading-relaxed" style={{ color: '#78350F' }}>
              Not a substitute for medical advice. Emergency? Call{' '}
              <strong className="font-bold">999</strong>. Urgent? Call{' '}
              <strong className="font-bold">111</strong>.
            </p>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-3 chat-scrollbar"
            style={{ background: '#F8FAFC', minHeight: 0, maxHeight: '360px' }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 min-w-0 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center shadow-sm mb-0.5"
                    style={{ background: '#005EB8' }}
                  >
                    <span className="text-white text-[9px] font-black">N</span>
                  </div>
                )}
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed max-w-[80%] break-words min-w-0 ${
                    msg.role === 'user'
                      ? 'rounded-br-sm text-white'
                      : 'rounded-bl-sm text-gray-800'
                  }`}
                  style={
                    msg.role === 'user'
                      ? { background: '#005EB8' }
                      : { background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Quick suggestion chips */}
            {showSuggestions && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(s)}
                    className="text-xs px-3 py-1.5 rounded-full border transition-all hover:text-white hover:shadow-sm active:scale-95"
                    style={{ borderColor: '#005EB8', color: '#005EB8', background: 'transparent' }}
                    onMouseEnter={e => {
                      const el = e.currentTarget
                      el.style.background = '#005EB8'
                      el.style.color = 'white'
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget
                      el.style.background = 'transparent'
                      el.style.color = '#005EB8'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Loading indicator */}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center shadow-sm"
                  style={{ background: '#005EB8' }}
                >
                  <span className="text-white text-[9px] font-black">N</span>
                </div>
                <div
                  className="rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ background: '#fff', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
                >
                  <div className="flex items-center gap-1">
                    {[0, 150, 300].map(delay => (
                      <div
                        key={delay}
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ background: '#94A3B8', animationDelay: `${delay}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white flex-shrink-0" style={{ borderTop: '1px solid #E2E8F0' }}>
            <div className="flex gap-2 items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a health question…"
                disabled={loading}
                className="flex-1 text-sm text-gray-900 placeholder-gray-400 px-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 focus:bg-white disabled:opacity-50 transition-all"
              />
              <button
                onClick={() => sendMessage()}
                disabled={loading || !input.trim()}
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                style={{ background: input.trim() && !loading ? '#005EB8' : '#94A3B8' }}
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-center text-[11px] text-gray-400 mt-2">
              Powered by <span style={{ color: '#005EB8' }} className="font-medium">NHS AI · AskNora</span>
            </p>
          </div>
        </div>
      )}

      {/* Floating Bubble Button */}
      <div className="relative">
        {!isOpen && hasUnread && (
          <div
            className="absolute inset-0 rounded-full pulse-ring"
            style={{ background: '#005EB8' }}
          />
        )}
        <button
          onClick={() => onOpenChange(!isOpen)}
          className="relative w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-xl"
          style={{ background: 'linear-gradient(135deg, #003087 0%, #005EB8 100%)' }}
          aria-label={isOpen ? 'Close Nora chat' : 'Chat with Nora'}
        >
          {!isOpen && hasUnread && (
            <span
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-white text-[9px] font-bold shadow"
            >
              1
            </span>
          )}
          <div
            className="transition-all duration-200"
            style={{ transform: isOpen ? 'rotate(0deg) scale(1)' : 'rotate(0deg) scale(1)' }}
          >
            {isOpen ? (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )}
          </div>
        </button>
      </div>
    </div>
  )
}
