import React from 'react';

export const TeaCupIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 8h1a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1" />
    <path d="M3 8h14v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <line x1="2" y1="19" x2="18" y2="19" />
    <path d="M9 8v3l2.5 2.5" />
  </svg>
);
