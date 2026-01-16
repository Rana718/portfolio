"use client";

import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const TruckButton = () => {
    const [status, setStatus] = useState('idle'); // idle, running, done

    const handleClick = () => {
        if (status !== 'idle') return;

        setStatus('running');

        // Sequence timing based on CSS animations
        setTimeout(() => {
            setStatus('done');

            // Reset back to idle after showing success state
            setTimeout(() => {
                setStatus('idle');
            }, 2000);
        }, 4000); // Duration of the truck drive
    };

    return (
        <button
            className={`truck-button ${status}`}
            onClick={handleClick}
        >
            <span className="default">Download Item</span>
            <span className="success">
                Order Placed
                <svg viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
            </span>

            <div className="truck">
                <div className="wheel"></div>
                <div className="back"></div>
                <div className="front"></div>
                <div className="box"></div>
            </div>
        </button>
    );
};

export default function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`app-container ${isDark ? 'dark' : 'light'}`}>

            {/* Theme Toggle */}
            <button
                className="theme-toggle"
                onClick={() => setIsDark(!isDark)}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
                {isDark ? ' Light Mode' : ' Dark Mode'}
            </button>

            {/* The Animated Component */}
            <div className="center-stage">
                <TruckButton />
            </div>

            {/* STYLES */}
            <style>{`
        :root {
          --bg: #F4F7FF;
          --text: #2B3044;
          --btn-bg: #2B3044;
          --btn-text: #FFFFFF;
          --truck: #2B3044;
          --box: #FFC400;
          --success: #16BF78;
          --road: #E1E6F9;
        }

        .app-container.dark {
          --bg: #121212;
          --text: #E1E6F9;
          --btn-bg: #4F46E5;
          --btn-text: #FFFFFF;
          --truck: #FFFFFF;
          --box: #FFC400;
          --success: #16BF78;
          --road: #333333;
        }

        .app-container {
          min-height: 100vh;
          background: var(--bg);
          color: var(--text);
          transition: background 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }

        .theme-toggle {
          position: absolute;
          top: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 20px;
          border: none;
          background: var(--btn-bg);
          color: var(--btn-text);
          cursor: pointer;
          font-weight: 600;
          transition: transform 0.2s;
        }
        .theme-toggle:active { transform: scale(0.95); }

        /* --- TRUCK BUTTON STYLES --- */
        .truck-button {
          --width: 180px;
          --height: 60px;
          border: 0;
          position: relative;
          min-width: var(--width);
          min-height: var(--height);
          border-radius: var(--height);
          color: var(--btn-text);
          background: var(--btn-bg);
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          overflow: hidden;
          transition: width 0.3s ease, background 0.3s ease;
          outline: none;
        }

        /* Text States */
        .truck-button .default,
        .truck-button .success {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s;
        }
        
        .truck-button .success {
          opacity: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .truck-button .success svg {
          width: 12px;
          height: 10px;
          stroke: currentColor;
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* STATE: RUNNING (The Road) */
        .truck-button.running {
          background: var(--road); 
          color: transparent; /* hide text */
          width: 280px; /* Stretch for the road */
        }
        .truck-button.running .default { opacity: 0; }

        /* STATE: DONE */
        .truck-button.done {
          background: var(--success);
        }
        .truck-button.done .default { opacity: 0; }
        .truck-button.done .success { opacity: 1; }

        /* --- TRUCK GRAPHICS --- */
        .truck {
          position: absolute;
          width: 72px;
          height: 28px;
          transform: translate(-50%, -50%);
          top: 50%;
          left: 50%;
          z-index: 2;
          opacity: 0;
        }
        
        /* Truck Body */
        .truck .back {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 22px;
          background: var(--truck);
          z-index: 1;
        }
        .truck .front {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 26px;
          height: 18px;
          background: var(--truck);
          border-radius: 0 6px 6px 0;
        }
        .truck .front:before {
          content: '';
          position: absolute;
          right: 0;
          bottom: 100%;
          width: 20px;
          height: 10px;
          background: var(--truck);
          border-radius: 6px 0 0 0;
        }
        .truck .front:after {
          /* Window */
          content: '';
          position: absolute;
          top: -6px;
          right: 4px;
          width: 14px;
          height: 4px;
          background: var(--bg);
          border-radius: 2px;
        }

        /* Wheels */
        .truck .wheel {
          position: absolute;
          bottom: -4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #2F3640;
          z-index: 2;
          box-shadow: 0 0 0 2px var(--bg); /* Spacing from road */
        }
        .truck .wheel:before, .truck .wheel:after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: inherit;
          box-shadow: inherit;
        }
        .truck .wheel:before { left: 0; }
        .truck .wheel:after { left: 46px; }

        /* The Box */
        .truck .box {
          position: absolute;
          width: 10px;
          height: 10px;
          background: var(--box);
          bottom: 22px; /* Start above */
          left: 12px;
          z-index: 0;
          border-radius: 1px;
          opacity: 0;
        }

        /* --- ANIMATIONS --- */
        
        /* When running, animate the truck */
        .truck-button.running .truck {
          opacity: 1;
          animation: drive 4s ease forwards;
        }
        
        .truck-button.running .truck .box {
          animation: boxDrop 4s ease forwards;
        }

        @keyframes drive {
          0% {
            left: -30px; /* Start off screen left */
            transform: translate(0, -50%);
          }
          20% {
            left: 50%; /* Stop in middle */
            transform: translate(-50%, -50%);
          }
          45% {
             left: 50%; /* Wait for box */
             transform: translate(-50%, -50%);
          }
          100% {
            left: 110%; /* Drive off screen right */
            transform: translate(0, -50%);
          }
        }

        @keyframes boxDrop {
          0%, 20% {
            opacity: 0;
            transform: translateY(-50px) rotate(-45deg);
          }
          30% {
             opacity: 1;
             transform: translateY(0px) rotate(0deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) rotate(0deg);
          }
        }

      `}</style>
        </div>
    );
}