export default function NoraAvatar({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Light blue background */}
      <rect width="100" height="100" fill="#C8E2F5" />

      {/* Blue scrubs body */}
      <rect x="14" y="70" width="72" height="38" rx="10" fill="#4E96C8" />

      {/* Collar/neck */}
      <rect x="43" y="55" width="14" height="16" rx="5" fill="#D9905A" />

      {/* Head */}
      <circle cx="50" cy="41" r="22" fill="#D9905A" />

      {/* Hair — dark brown curly mass */}
      <circle cx="50" cy="24" r="20" fill="#5C3317" />
      <circle cx="30" cy="37" r="12" fill="#5C3317" />
      <circle cx="70" cy="37" r="12" fill="#5C3317" />
      <circle cx="27" cy="47" r="10" fill="#5C3317" />
      <circle cx="73" cy="47" r="10" fill="#5C3317" />
      <ellipse cx="50" cy="23" rx="19" ry="11" fill="#5C3317" />

      {/* Nurse cap */}
      <ellipse cx="50" cy="21" rx="18" ry="6" fill="white" />
      {/* NHS cross on cap */}
      <rect x="47" y="15" width="6" height="13" rx="1.5" fill="#005EB8" />
      <rect x="43" y="19" width="14" height="5" rx="1.5" fill="#005EB8" />

      {/* Eyebrows */}
      <path d="M38 37 Q42 34 47 36" stroke="#3D2B1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M53 36 Q58 34 62 37" stroke="#3D2B1F" strokeWidth="1.6" fill="none" strokeLinecap="round" />

      {/* Eyes */}
      <circle cx="43" cy="41" r="4" fill="#2D1F1A" />
      <circle cx="57" cy="41" r="4" fill="#2D1F1A" />
      {/* Eye shine */}
      <circle cx="44.5" cy="39.5" r="1.5" fill="white" />
      <circle cx="58.5" cy="39.5" r="1.5" fill="white" />

      {/* Blush */}
      <ellipse cx="36" cy="47" rx="6" ry="4" fill="#F4A090" opacity="0.45" />
      <ellipse cx="64" cy="47" rx="6" ry="4" fill="#F4A090" opacity="0.45" />

      {/* Smile */}
      <path d="M42 51 Q50 58 58 51" stroke="#A0522D" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Teeth */}
      <path d="M43.5 51 Q50 56.5 56.5 51 Q50 58.5 43.5 51Z" fill="white" opacity="0.9" />

      {/* Stethoscope */}
      <path d="M30 74 Q24 83 27 91" stroke="#2C6E9E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="27" cy="93" r="3" fill="#2C6E9E" />

      {/* White cross on scrubs */}
      <rect x="46" y="75" width="8" height="20" rx="2.5" fill="white" opacity="0.9" />
      <rect x="39" y="82" width="22" height="7" rx="2.5" fill="white" opacity="0.9" />
    </svg>
  )
}
