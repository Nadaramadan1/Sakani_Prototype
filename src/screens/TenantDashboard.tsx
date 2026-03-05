import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  Settings, 
  CreditCard, 
  ShieldCheck, 
  X,
  CreditCard as PaymentIcon,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import Button from '../components/Button';
import SakaniScoreGauge from '../components/SakaniScoreGauge';
import RNPLCalculator from '../components/RNPLCalculator';

const TenantDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [showHalalModal, setShowHalalModal] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const handlePay = () => {
    setShowPaymentSuccess(true);
    setTimeout(() => setShowPaymentSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-sakani-bg pb-24">
      {/* Top Bar */}
      <div className="bg-white px-6 pt-12 pb-6 flex justify-between items-center rounded-b-[2.5rem] shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-sakani-navy rounded-2xl flex items-center justify-center text-white font-bold text-xl">
            N
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-400">Marhaban, Nada</h2>
            <h1 className="text-xl font-bold text-sakani-navy">{t('dashboard.tenant.title')}</h1>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-12 h-12 rounded-2xl bg-sakani-bg flex items-center justify-center text-sakani-navy border border-gray-100/50">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-8 max-w-md mx-auto">
        {/* Sakani Score Section */}
        <Card variant="white" className="relative overflow-hidden">
          <SakaniScoreGauge score={842} />
          <div className="mt-6 pt-6 border-t border-gray-100 flex justify-around">
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">History</p>
              <p className="font-bold text-sakani-navy text-lg">Good</p>
            </div>
            <div className="w-[1px] bg-gray-100"></div>
            <div className="text-center">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Verify</p>
              <p className="font-bold text-sakani-emerald text-lg">Active</p>
            </div>
          </div>
        </Card>

        {/* Rent Status Card */}
        <Card variant="navy" className="relative">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-white/60 text-sm font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {t('rent.due_date')}: <span className="text-white font-bold">15 Mar 2026</span>
                </span>
                <h3 className="text-lg font-bold">{t('rent.next_amount')}</h3>
              </div>
              <ShieldCheck className="w-8 h-8 text-white/20" />
            </div>
            
            <div className="text-4xl font-black">EGP 12,500</div>
            
            <Button 
                variant="secondary" 
                size="full" 
                className="py-4 text-sakani-navy font-bold rounded-2xl"
                onClick={handlePay}
            >
              <PaymentIcon className="w-5 h-5 mr-2" />
              {t('rent.pay_now')}
            </Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setShowHalalModal(true)}
            className="bg-sakani-emerald/10 p-5 rounded-[2rem] border border-sakani-emerald/20 flex flex-col items-center gap-3 transition-all active:scale-95"
          >
            <div className="w-12 h-12 bg-sakani-emerald rounded-2xl flex items-center justify-center">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-sakani-emerald text-center">
              {t('halal.title')}
            </span>
          </button>
          <button className="bg-sakani-navy/5 p-5 rounded-[2rem] border border-sakani-navy/10 flex flex-col items-center gap-3 transition-all active:scale-95">
            <div className="w-12 h-12 bg-sakani-navy rounded-2xl flex items-center justify-center">
              <CreditCard className="text-white w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-sakani-navy text-center">
              Rent History
            </span>
          </button>
        </div>

        {/* RNPL Calculator Section */}
        <RNPLCalculator />
      </div>

      {/* Halal Modal */}
      <AnimatePresence>
        {showHalalModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHalalModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-[3rem] p-8 max-w-sm w-full relative z-10 shadow-2xl"
            >
              <button 
                onClick={() => setShowHalalModal(false)}
                className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-sakani-emerald/10 rounded-3xl flex items-center justify-center mb-2">
                  <ShieldCheck className="text-sakani-emerald w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-sakani-navy">{t('halal.title')}</h2>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {t('halal.wakala')}
                </p>
                <div className="bg-sakani-bg p-4 rounded-2xl w-full text-left space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-sakani-emerald w-5 h-5" />
                    <span className="text-sm font-bold text-sakani-navy">Zero Interest (Riba-Free)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-sakani-emerald w-5 h-5" />
                    <span className="text-sm font-bold text-sakani-navy">Fixed Service Fees</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="text-sakani-emerald w-5 h-5" />
                    <span className="text-sm font-bold text-sakani-navy">Ethical Management</span>
                  </div>
                </div>
                <Button variant="primary" size="full" onClick={() => setShowHalalModal(false)}>
                  I Understand
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Payment Success Toast/Overlay */}
      <AnimatePresence>
        {showPaymentSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-10 left-6 right-6 z-50"
          >
            <div className="bg-sakani-emerald text-white p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold">{t('payment.success')}</h3>
                <p className="text-white/80 font-medium">Breakdown: Base Rent + Service Fee</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar (Mockup) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around p-5 rounded-t-[2.5rem] shadow-lg">
        <HomeIcon active />
        <CalendarIcon />
        <CreditCardIcon />
        <SettingsIcon />
      </div>
    </div>
  );
};

// Mock Nav Icons
const HomeIcon = ({ active }: { active?: boolean }) => (
  <div className={cn("w-12 h-12 flex items-center justify-center rounded-2xl", active ? "bg-sakani-navy text-white" : "text-gray-400")}>
    <ShieldCheck className="w-7 h-7" />
  </div>
);

const CalendarIcon = () => (
    <div className="w-12 h-12 flex items-center justify-center text-gray-400">
      <Calendar className="w-7 h-7" />
    </div>
);

const CreditCardIcon = () => (
    <div className="w-12 h-12 flex items-center justify-center text-gray-400">
      <CreditCard className="w-7 h-7" />
    </div>
);

const SettingsIcon = () => (
    <div className="w-12 h-12 flex items-center justify-center text-gray-400">
      <Settings className="w-7 h-7" />
    </div>
);

// Helper
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}

export default TenantDashboard;
