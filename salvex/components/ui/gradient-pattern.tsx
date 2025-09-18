"use client";

import React from 'react';
import styled from 'styled-components';

const GradientPattern = () => {
  return (
    <StyledWrapper>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 28px; /* Match the hero card border radius */
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.05),
      rgba(0, 0, 0, 0.02)
    );
  }

  .container::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg,
      #9CAFAA,
      #7e8e92,
      #F5E8DD,
      #D6A99D,
      #9CAFAA,
      rgb(245, 232, 221),
      #D6A99D,
      #9CAFAA,
      #7e8e92,
      #F5E8DD,
      #D6A99D,
      #9CAFAA
    );
    transform: translate(-50%, -50%);
    filter: blur(60px); /* Soft glowing effect */
    opacity: 0.6;
    animation: randomRotate 25s ease-in-out infinite, colorShift 15s ease-in-out infinite;
  }

  @keyframes randomRotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    15% {
      transform: translate(-50%, -50%) rotate(45deg) scale(1.1);
    }
    30% {
      transform: translate(-50%, -50%) rotate(120deg) scale(0.9);
    }
    45% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1.05);
    }
    60% {
      transform: translate(-50%, -50%) rotate(270deg) scale(0.95);
    }
    75% {
      transform: translate(-50%, -50%) rotate(315deg) scale(1.08);
    }
    90% {
      transform: translate(-50%, -50%) rotate(340deg) scale(0.98);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1);
    }
  }

  @keyframes colorShift {
    0%, 100% {
      opacity: 0.6;
      filter: blur(60px) hue-rotate(0deg);
    }
    50% {
      opacity: 0.8;
      filter: blur(60px) hue-rotate(30deg);
    }
  }


`;

export default GradientPattern;