import React from 'react';

export const HotChocolateIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 9h1a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-1" />
    <path d="M4 9h14v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z" />
    <line x1="3" y1="20" x2="19" y2="20" />
    <path d="M7 5c.8-.8.8-1.7 0-2.5" />
    <path d="M11 5c.8-.8.8-1.7 0-2.5" />
    <path d="M15 5c.8-.8.8-1.7 0-2.5" />
  </svg>
);
