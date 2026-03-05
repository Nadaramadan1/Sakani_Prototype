import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, User, Globe2, ShieldCheck, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

interface AuthScreenProps {
  onComplete: (role: 'tenant' | 'owner') => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onComplete }) => {
  const { t, lang, setLang, isRTL } = useLanguage();
  const [step, setStep] = useState<'login' | 'otp' | 'role'>('login');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [role, setRole] = useState<'tenant' | 'owner' | null>(null);

  const handleLogin = () => {
    if (phone.length >= 8) setStep('otp');
  };

  const handleVerifyOtp = () => {
    if (otp.length === 4) setStep('role');
  };

  const handleRoleSelect = (selectedRole: 'tenant' | 'owner') => {
    setRole(selectedRole);
    setTimeout(() => onComplete(selectedRole), 500);
  };

  const stepVariants = {
    initial: { opacity: 0, x: isRTL ? -20 : 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isRTL ? 20 : -20 },
  };

  return (
    <div className="min-h-screen bg-sakani-bg p-6 flex flex-col pt-12">
      {/* Header & Lang Toggle */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sakani-navy rounded-xl flex items-center justify-center">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-sakani-navy">{t('app.name')}</h1>
        </div>
        <button 
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 text-sakani-navy font-semibold px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100"
        >
          <Globe2 className="w-4 h-4" />
          {lang === 'en' ? 'العربية' : 'English'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {step === 'login' && (
          <motion.div 
            key="login"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-sakani-navy">{t('auth.signin')}</h2>
              <p className="text-gray-400 font-medium">Simplify your rent journey in Egypt.</p>
            </div>

            <Button 
              variant="secondary" 
              size="full" 
              className="py-5 border-2 border-gray-100/50 flex items-center justify-center gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <span className="font-bold text-gray-700">{t('auth.egypt_portal')}</span>
            </Button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm font-medium">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <Input 
              label={t('auth.phone')} 
              placeholder="01X XXXX XXXX" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
            />

            <Button 
              size="full" 
              onClick={handleLogin}
              disabled={phone.length < 8}
            >
              {t('common.continue')}
            </Button>
          </motion.div>
        )}

        {step === 'otp' && (
          <motion.div 
            key="otp"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-sakani-navy">{t('auth.otp')}</h2>
              <p className="text-gray-400 font-medium">{t('auth.phone')}: {phone}</p>
            </div>

            <div className="flex justify-between gap-4 py-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-14 h-16 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-inner-soft">
                  {otp[i-1] || ''}
                </div>
              ))}
            </div>

            <Input 
              placeholder="Enter 4-digit code (any 4 digits)" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={4}
              type="password"
              className="text-center tracking-[1em] text-2xl font-bold"
            />

            <Button 
              size="full" 
              onClick={handleVerifyOtp}
              disabled={otp.length < 4}
            >
              {t('common.submit')}
            </Button>

            <button 
              onClick={() => setStep('login')}
              className="w-full text-center text-sm font-bold text-sakani-navy"
            >
              {t('common.back')}
            </button>
          </motion.div>
        )}

        {step === 'role' && (
          <motion.div 
            key="role"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-8"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-sakani-navy">{t('auth.who_are_you')}</h2>
              <p className="text-gray-400 font-medium">Select your account type to personalize your experience.</p>
            </div>

            <div className="grid gap-4">
              <Card 
                variant={role === 'tenant' ? 'navy' : 'white'}
                className={cn(
                  "cursor-pointer active:scale-95 border-2",
                  role === 'tenant' ? "border-sakani-navy" : "border-transparent"
                )}
                onClick={() => handleRoleSelect('tenant')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      role === 'tenant' ? "bg-white/20" : "bg-sakani-navy/5"
                    )}>
                      <User className={cn("w-7 h-7", role === 'tenant' ? "text-white" : "text-sakani-navy")} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{t('role.tenant')}</h3>
                      <p className={cn("text-sm", role === 'tenant' ? "text-white/70" : "text-gray-400")}>
                        Rent-Now-Pay-Later
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={cn("w-6 h-6", role === 'tenant' ? "text-white" : "text-gray-300")} />
                </div>
              </Card>

              <Card 
                variant={role === 'owner' ? 'navy' : 'white'}
                className={cn(
                  "cursor-pointer active:scale-95 border-2",
                  role === 'owner' ? "border-sakani-navy" : "border-transparent"
                )}
                onClick={() => handleRoleSelect('owner')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      role === 'owner' ? "bg-white/20" : "bg-sakani-navy/5"
                    )}>
                      <Building2 className={cn("w-7 h-7", role === 'owner' ? "text-white" : "text-sakani-navy")} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{t('role.owner')}</h3>
                      <p className={cn("text-sm", role === 'owner' ? "text-white/70" : "text-gray-400")}>
                        Guaranteed Rent Management
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={cn("w-6 h-6", role === 'owner' ? "text-white" : "text-gray-300")} />
                </div>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-auto pt-8 flex items-center justify-center gap-2 text-gray-300">
        <ShieldCheck className="w-5 h-5" />
        <span className="text-sm font-medium">Secured by Egypt Digital Portal</span>
      </div>
    </div>
  );
};

// Helper function for AuthScreen internal use
function cn(...inputs: any[]) {
  // Simple implementation to avoid external dep for this specific file if needed
  return inputs.filter(Boolean).join(' ');
}

export default AuthScreen;
