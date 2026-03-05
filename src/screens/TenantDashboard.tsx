import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  CreditCard, 
  ShieldCheck, 
  X,
  CreditCard as PaymentIcon,
  CheckCircle2,
  Calendar,
  ArrowUpRight,
  Wallet
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import Button from '../components/Button';
import SakaniScoreGauge from '../components/SakaniScoreGauge';
import RNPLCalculator from '../components/RNPLCalculator';
import PaymentReceiptModal from '../components/PaymentReceiptModal';

const TenantDashboard: React.FC = () => {
  const { t } = useLanguage();
  const [showHalalModal, setShowHalalModal] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [showPaymentSheet, setShowPaymentSheet] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const handlePay = () => {
    setShowPaymentSheet(true);
  };

  const confirmPayment = () => {
    setShowPaymentSheet(false);
    setShowPaymentSuccess(true);
    setTimeout(() => {
        setShowPaymentSuccess(false);
        setShowReceipt(true);
    }, 2000);
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
              className="bg-white rounded-[3.5rem] p-8 max-w-sm w-full relative z-[110] shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sakani-emerald/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <button 
                onClick={() => setShowHalalModal(false)}
                className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col items-center text-center space-y-6" dir="rtl">
                <div className="w-20 h-20 bg-sakani-emerald/10 rounded-3xl flex items-center justify-center mb-2">
                  <ShieldCheck className="text-sakani-emerald w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-sakani-navy" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  التزامنا بالمعايير الشرعية
                </h2>
                <p className="text-gray-500 leading-relaxed font-medium text-sm" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  تعتمد منصة 'سكني' في معاملاتها على فتاوى دار الإفتاء المصرية المتعلقة بتمويل المنافع وعقود الوكالة بأجر. نحن لا نقدم قروضاً ربوية، بل نقوم بدور 'الوكيل الضامن' الذي يسهل عملية السكن مقابل رسوم إدارية ثابتة.
                </p>
                <div className="bg-sakani-bg p-5 rounded-3xl w-full text-right space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-sakani-emerald/20 p-1 rounded-full">
                      <CheckCircle2 className="text-sakani-emerald w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-sakani-navy" style={{ fontFamily: 'Tajawal, sans-serif' }}>وكالة بأجر</h4>
                      <p className="text-[11px] text-gray-500 font-medium" style={{ fontFamily: 'Tajawal, sans-serif' }}>الرسوم الإدارية هي مقابل خدمات التقنية والضمان والتوثيق، وليست فوائد على المال.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-sakani-emerald/20 p-1 rounded-full">
                      <CheckCircle2 className="text-sakani-emerald w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-sakani-navy" style={{ fontFamily: 'Tajawal, sans-serif' }}>شفافية مطلقة</h4>
                      <p className="text-[11px] text-gray-500 font-medium" style={{ fontFamily: 'Tajawal, sans-serif' }}>إجمالي التكلفة محدد وثابت عند التعاقد ولا يتغير أبداً.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-sakani-emerald/20 p-1 rounded-full">
                      <CheckCircle2 className="text-sakani-emerald w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-sakani-navy" style={{ fontFamily: 'Tajawal, sans-serif' }}>تمويل منافع</h4>
                      <p className="text-[11px] text-gray-500 font-medium" style={{ fontFamily: 'Tajawal, sans-serif' }}>المعاملة تقع على منفعة السكن، وهو ما أجازه الفقهاء المعاصرون.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-[11px] font-bold text-sakani-navy bg-sakani-navy/5 p-3 rounded-xl border border-sakani-navy/10" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  هذا النموذج يضمن حقوق المالك والمستأجر مع الالتزام التام بتجنب شبهة الربا، مما يجعله حلاً أخلاقياً ومستداماً.
                </p>

                <Button variant="primary" size="full" onClick={() => setShowHalalModal(false)} className="rounded-2xl py-4 font-bold" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  أفهم ذلك | I Understand
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

      {/* Payment Method Bottom Sheet */}
      <AnimatePresence>
        {showPaymentSheet && (
          <div className="fixed inset-0 z-50 flex items-end justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPaymentSheet(false)}
              className="absolute inset-0 bg-sakani-navy/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-white w-full max-w-md rounded-t-[3rem] p-8 pb-12 relative z-10 shadow-2xl"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />
              
              <div className="space-y-6">
                <div>
                    <h2 className="text-2xl font-bold text-sakani-navy mb-1">Payment Method</h2>
                    <p className="text-gray-400 font-medium text-sm">Select your preferred way to pay</p>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'instapay', name: 'InstaPay', nameAr: 'انستا باي', label: 'Fast Transfer', icon: <ArrowUpRight className="text-sakani-emerald" /> },
                    { id: 'wallet', name: 'Mobile Wallet', nameAr: 'محفظة إلكترونية', label: 'Vodafone Cash / Bank Wallet', icon: <Wallet className="text-sakani-navy" /> },
                    { id: 'card', name: 'Bank Card', nameAr: 'بطاقة بنكية', label: 'Visa / Mastercard', icon: <CreditCard className="text-sakani-navy" /> }
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setSelectedMethod(method.id)}
                      className={`w-full p-5 rounded-3xl border-2 transition-all flex items-center justify-between text-left
                        ${selectedMethod === method.id 
                            ? "border-sakani-navy bg-sakani-navy/5 shadow-md shadow-navy-900/5 scale-[1.02]" 
                            : "border-gray-50 bg-gray-50/50 hover:bg-gray-100"
                        }
                      `}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${selectedMethod === method.id ? 'bg-white shadow-sm' : 'bg-white'}`}>
                            {method.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                             <span className="font-bold text-sakani-navy">{method.name}</span>
                             <span className="text-xs font-bold text-gray-400" dir="rtl">{method.nameAr}</span>
                          </div>
                          <p className="text-xs text-gray-400 font-medium">{method.label}</p>
                        </div>
                      </div>
                      {selectedMethod === method.id && (
                        <div className="w-6 h-6 bg-sakani-navy rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                <Button 
                    variant="primary" 
                    size="full" 
                    disabled={!selectedMethod}
                    onClick={confirmPayment}
                    className="py-5 text-lg font-bold shadow-xl shadow-navy-900/20 mt-4 rounded-[2rem]"
                >
                    Confirm Payment
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PaymentReceiptModal 
        isOpen={showReceipt} 
        onClose={() => setShowReceipt(false)} 
        data={{
          id: `REC-${Math.floor(Math.random() * 900000) + 100000}`,
          tenantName: 'Amr Ahmed',
          amount: '15,000',
          month: 'March 2026',
          contractId: 'Unified-MOJ-9938472',
          method: selectedMethod === 'instapay' ? 'InstaPay' : selectedMethod === 'wallet' ? 'Mobile Wallet' : 'Bank Card',
          date: new Date().toLocaleString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
        }}
      />
    </div>
  );
};

export default TenantDashboard;
