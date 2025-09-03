import React from 'react';

interface NeonBorderProps {
  color1?: string;
  color2?: string;
  animationType?: 'none' | 'half' | 'full';
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

const NeonBorder: React.FC<NeonBorderProps> = ({
  color1 = '#0496ff',
  color2 = '#ff0a54',
  animationType = 'half',
  duration = 6,
  className = '',
  children
}) => {
  const getWidth = (animType: 'none' | 'half' | 'full') => {
    switch (animType) {
      case 'none':
        return 12;
      case 'half':
        return 50;
      case 'full':
        return 100;
    }
  };

  const animWidth = `${getWidth(animationType)}%`;
  const durationInSeconds = `${duration}s`;

  const containerStyle = {
    '--neon-border-duration': durationInSeconds,
    '--color1': color1,
    '--color2': color2,
    '--anim-width': animWidth,
  } as React.CSSProperties;

  return (
    <div
      className={`relative inline-block h-auto w-full overflow-hidden rounded-lg p-1 z-10 ${className}`}
      style={containerStyle}
    >
      <div
        className={`neon-border-one rounded-lg ${
          animationType !== 'none' ? 'animate-neon-border' : ''
        }`}
      ></div>
      <div
        className={`neon-border-two rounded-lg ${
          animationType !== 'none' ? 'animate-neon-border' : ''
        }`}
      ></div>
      {children}
    </div>
  );
};

export default NeonBorder;
