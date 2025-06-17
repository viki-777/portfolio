// components/GradientBackground.tsx
import React from 'react';
import styles from './GradientBackground.module.css';

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`${styles.gradientContainer} ${className}`}>
    <div className={styles.saltEffect}></div>        
      <div className={styles.gradientOverlay}></div>
      <div className={styles.flowingCurves}>
        <div className={styles.curve1}></div>
        <div className={styles.curve2}></div>
        <div className={styles.curve3}></div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default GradientBackground;