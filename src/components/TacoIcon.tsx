import React from 'react';

export const TacoIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Pressed French Taco wrap contour with rounded ends */}
    <rect x="3" y="6" width="18" height="12" rx="4" />
    {/* Diagonal grill marks */}
    <line x1="7" y1="9" x2="11" y2="15" />
    <line x1="11" y1="9" x2="15" y2="15" />
    <line x1="15" y1="9" x2="17" y2="12" />
  </svg>
);
