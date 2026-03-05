import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface SakaniScoreGaugeProps {
  score: number; // 0 to 1000
  size?: number;
  strokeWidth?: number;
  showLabels?: boolean;
}

const SakaniScoreGauge: React.FC<SakaniScoreGaugeProps> = ({ 
  score, 
  size = 256, 
  strokeWidth = 20,
  showLabels = true
}) => {
  const { t } = useLanguage();
  const radius = (size / 2) - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const percentage = (score / 1000);
  const offset = circumference - percentage * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-100/50"
        />
        {/* Progress Circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#scoreGradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 2, ease: "easeOut" }}
          strokeLinecap="round"
          fill="transparent"
        />
        <defs>
          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A237E" />
            <stop offset="100%" stopColor="#2E7D32" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Score Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-[-10px]">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="font-bold text-sakani-navy"
          style={{ fontSize: size * 0.15 }}
        >
          {score}
        </motion.span>
        <span className="text-gray-400 font-medium" style={{ fontSize: size * 0.05 }}>
          / 1000
        </span>
      </div>

      {showLabels && (
        <div className="mt-8 text-center">
          <h3 className="text-lg font-bold text-sakani-navy">{t('score.title')}</h3>
          <p className="text-sm font-medium text-sakani-emerald flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-sakani-emerald animate-pulse" />
            {t('score.status')}
          </p>
        </div>
      )}
    </div>
  );
};

export default SakaniScoreGauge;
