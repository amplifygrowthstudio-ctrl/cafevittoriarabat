import React from 'react';

export const TacoIllustration: React.FC<{ className?: string }> = ({ className = 'w-20 h-12' }) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Tortilla Outer Shell */}
    <path
      d="M8 40 C8 16, 32 8, 50 8 C68 8, 92 16, 92 40 C92 48, 78 52, 50 52 C22 52, 8 48, 8 40 Z"
      stroke="#D4952A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Tortilla Fold Rim */}
    <path
      d="M12 36 C28 45, 72 45, 88 36"
      stroke="#D4952A"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.9"
    />

    {/* Wavy Cheese & Lettuce Filling Layer */}
    <path
      d="M18 30 C24 22, 30 32, 36 24 C42 30, 48 22, 54 28 C60 22, 66 30, 72 24 C78 30, 82 26, 84 30"
      stroke="#E8A83A"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Signature French Fries Strips */}
    <path
      d="M28 26 L31 15 M36 26 L38 13 M58 27 L56 14 M66 26 L69 16"
      stroke="#F5EBD8"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Artisanal Grill Line Marks */}
    <path
      d="M26 43 L31 48 M46 44 L51 49 M64 43 L69 48"
      stroke="#B8562E"
      strokeWidth="1.5"
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);
