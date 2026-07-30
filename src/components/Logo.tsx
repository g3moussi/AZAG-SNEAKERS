import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showTagline = true,
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const mainTextColor = isDark ? 'text-[#2C2118]' : 'text-white';
  const taglineColor = isDark ? 'text-[#7C6E65]' : 'text-[#C8B8A6]';
  const goldColor = '#D4A373';

  const scaleHeights = {
    sm: 'h-5',
    md: 'h-7',
    lg: 'h-10',
  };

  return (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* Shopping bag handle icon matching the uploaded logo */}
      <svg
        viewBox="0 0 100 42"
        className={`${scaleHeights[size]} w-auto`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Handle */}
        <path
          d="M 36 22 C 36 9, 64 9, 64 22"
          stroke={goldColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Bag body top */}
        <path
          d="M 22 22 H 78 V 40 H 22 Z"
          stroke={goldColor}
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>

      {/* AZAG Text */}
      <span
        className={`font-serif tracking-[0.2em] font-black uppercase leading-tight ${mainTextColor} ${
          size === 'lg' ? 'text-3xl sm:text-4xl' : size === 'sm' ? 'text-lg' : 'text-2xl sm:text-3xl'
        }`}
      >
        A Z A G
      </span>

      {/* Tagline */}
      {showTagline && (
        <span
          className={`text-[9px] sm:text-[10px] tracking-[0.22em] font-sans uppercase font-bold ${taglineColor}`}
        >
          QUALITÉ • STYLE • CONFIANCE
        </span>
      )}
    </div>
  );
};
