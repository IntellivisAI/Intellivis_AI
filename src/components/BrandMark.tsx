interface BrandMarkProps { className?: string; }

const BrandMark = ({ className = 'h-9 w-9' }: BrandMarkProps) => (
  <svg className={className} viewBox="0 0 48 48" role="img" aria-label="Intellivis.AI neural network logo">
    <defs>
      <linearGradient id="brand-surface" x1="7" y1="5" x2="42" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#cffafe"/><stop offset="0.52" stopColor="#67e8f9"/><stop offset="1" stopColor="#60a5fa"/>
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="46" height="46" rx="14" fill="url(#brand-surface)"/>
    <g fill="none" stroke="#07101e" strokeWidth="2.1" strokeLinecap="round" opacity=".92">
      <path d="M10.5 15.5 20 19m-9.5-3.5L20 29m-9.5 3.5L20 19m-9.5 13.5L20 29M20 19l9-5.5M20 19l9 10.5M20 29l9-15.5M20 29l9 .5m0-16L38 24m-9 5.5L38 24"/>
    </g>
    <g fill="#07101e">
      <circle cx="10.5" cy="15.5" r="2.7"/><circle cx="10.5" cy="32.5" r="2.7"/>
      <circle cx="20" cy="19" r="3.1"/><circle cx="20" cy="29" r="3.1"/>
      <circle cx="29" cy="13.5" r="2.7"/><circle cx="29" cy="29.5" r="2.7"/>
      <circle cx="38" cy="24" r="3.5"/>
    </g>
    <circle cx="38" cy="24" r="1.15" fill="#cffafe"/>
  </svg>
);

export default BrandMark;
