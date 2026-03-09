export default function Logo({ size = 48, color = '#c5a55a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stylized H monogram for Haven */}
      <g>
        {/* Decorative script H */}
        <path
          d="M25 20 C25 20, 28 18, 32 22 C36 26, 35 35, 35 45 L35 78 C35 82, 36 84, 38 84"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M35 52 C40 48, 50 44, 60 48 C65 50, 65 52, 65 52"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M65 22 C65 22, 67 20, 68 22 C70 26, 65 35, 65 45 L65 78 C65 82, 67 84, 70 84"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Decorative flourish */}
        <path
          d="M20 22 C22 16, 28 14, 32 18"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M70 84 C74 86, 78 84, 80 80"
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      {/* HAVEN GROUP text */}
      <text x="50" y="96" textAnchor="middle" fill={color} fontSize="8" fontFamily="Georgia, serif" letterSpacing="3">
        HAVEN GROUP
      </text>
    </svg>
  );
}
