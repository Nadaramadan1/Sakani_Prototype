import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface SakaniScoreGaugeProps {
  score: number; // 0 to 1000
}

const SakaniScoreGauge: React.FC<SakaniScoreGaugeProps> = ({ score }) => {
  const { t } = useLanguage();
  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const percentage = (score / 1000);
  const offset = circumference - percentage * circumference;

  return (
    <div className="relative flex flex-col items-center justify-center">
      <svg className="w-64 h-64 transform -rotate-90">
        {/* Background Circle */}
        <circle
          cx="128"
          cy="128"
          r={radius}
          stroke="currentColor"
          strokeWidth="20"
          fill="transparent"
          className="text-gray-100/50"
        />
        {/* Progress Circle */}
        <motion.circle
          cx="128"
          cy="128"
          r={radius}
          stroke="url(#scoreGradient)"
          strokeWidth="20"
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
          className="text-4xl font-bold text-sakani-navy"
        >
          {score}
        </motion.span>
        <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
          / 1000
        </span>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-bold text-sakani-navy">{t('score.title')}</h3>
        <p className="text-sm font-medium text-sakani-emerald flex items-center justify-center gap-1">
          <span className="w-2 h-2 rounded-full bg-sakani-emerald animate-pulse" />
          {t('score.status')}
        </p>
      </div>
    </div>
  );
};

export default SakaniScoreGauge;
