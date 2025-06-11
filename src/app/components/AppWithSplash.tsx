"use client";
import React, { useState, useEffect } from 'react';
import IntroSplash from './IntroSplash';
import Navigation from './Navigation';

const AppWithSplash = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);
  const [appFadeIn, setAppFadeIn] = useState(false);

  useEffect(() => {
    setShowSplash(true);
  }, []);

  const handleSplashFinish = () => {
    setShowSplash(false);
    setTimeout(() => setAppFadeIn(true), 10); // trigger fade in on next tick
  };

  return (
    <>
      {showSplash && <IntroSplash onFinish={handleSplashFinish} duration={5} />}
      {!showSplash && (
        <div className={`transition-opacity duration-2000 ${appFadeIn ? 'opacity-100' : 'opacity-0'}`}>
          <Navigation />
          <main className="min-h-screen bg-black text-white pt-16">
            {children}
          </main>
        </div>
      )}
    </>
  );
};

export default AppWithSplash; 