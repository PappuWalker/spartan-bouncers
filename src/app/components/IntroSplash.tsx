import React, { useEffect, useState } from 'react';
import Lightning from '../Lightning';
import Image from 'next/image';

interface IntroSplashProps {
  onFinish: () => void;
  duration?: number; // in seconds
}

type FadeState = 'in' | 'shown' | 'out';

const IntroSplash: React.FC<IntroSplashProps> = ({ onFinish, duration = 7 }) => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState<FadeState>('in');

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => setFade('shown'), 1000);
    const fadeOutTimeout = setTimeout(() => setFade('out'), (duration - 1) * 1000);
    const finishTimeout = setTimeout(() => {
      setVisible(false);
      onFinish();
    }, duration * 1000);
    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish, duration]);

  if (!visible) return null;

  const opacityClass =
    fade === 'in' ? 'opacity-0' : fade === 'shown' ? 'opacity-100' : 'opacity-0';

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${opacityClass}`}
      style={{ pointerEvents: 'none' }}
    >
      {/* Lightning effect as background */}
      <div className="absolute inset-0 w-full h-full">
        <Lightning hue={220} xOffset={0} speed={1} intensity={1} size={1} />
      </div>
      {/* Logo centered */}
      <div className={`relative flex flex-col items-center justify-center w-full h-full transition-opacity duration-1000 ${opacityClass}`}
        style={{ pointerEvents: 'none' }}
      >
        <Image
          src="/images/opening-logo.png"
          alt="Spartan Bouncers Logo"
          width={250}
          height={250}
          className="mx-auto mb-6 drop-shadow-xl rounded-full bg-black/60 p-4"
          priority
        />
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg tracking-wide text-center">
          Spartan Bouncers
        </h1>
      </div>
    </div>
  );
};

export default IntroSplash; 