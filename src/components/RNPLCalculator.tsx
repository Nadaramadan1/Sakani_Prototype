import React, { useState, useEffect } from 'react';
import { Info, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from './Button';
import Card from './Card';
import Input from './Input';

const RNPLCalculator: React.FC = () => {
  const { t } = useLanguage();
  const [deposit, setDeposit] = useState('5000');
  const [advance, setAdvance] = useState('2000');
  const [period, setPeriod] = useState(6);
  const [installment, setInstallment] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);

  useEffect(() => {
    const d = parseFloat(deposit) || 0;
    const a = parseFloat(advance) || 0;
    const total = d + a;
    
    // Simple simulation logic: 5% service fee total divided by period
    const fee = total * 0.05;
    const monthlyInstallment = (total + fee) / period;
    
    setInstallment(Math.round(monthlyInstallment));
    setServiceFee(Math.round(fee / period));
  }, [deposit, advance, period]);

  return (
    <Card variant="white" className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-sakani-navy">{t('rnpl.calculator')}</h3>
        <HelpCircle className="w-5 h-5 text-gray-300" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input 
          label={t('rnpl.deposit')} 
          value={deposit} 
          onChange={(e) => setDeposit(e.target.value)}
          type="number"
        />
        <Input 
          label={t('rnpl.advance')} 
          value={advance} 
          onChange={(e) => setAdvance(e.target.value)}
          type="number"
        />
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-500 px-1">
          {t('rnpl.period')} ({period} {t('rnpl.months')})
        </label>
        <div className="flex justify-between gap-2">
          {[6, 9, 12].map((m) => (
            <button
              key={m}
              onClick={() => setPeriod(m)}
              className={cn(
                "flex-1 py-3 rounded-2xl font-bold transition-all",
                period === m 
                  ? "bg-sakani-navy text-white shadow-md shadow-navy-900/10" 
                  : "bg-sakani-navy/5 text-sakani-navy hover:bg-sakani-navy/10"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-sakani-bg rounded-[2rem] p-6 space-y-4 border border-gray-100">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {t('rnpl.monthly_payment')}
            </span>
            <div className="text-3xl font-black text-sakani-navy">
              EGP {installment.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
             <span className="text-[10px] font-bold text-sakani-emerald bg-sakani-emerald/10 px-2 py-1 rounded-full uppercase">
               Sharia Ready
             </span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-dashed border-gray-200">
          <Info className="w-4 h-4 text-sakani-emerald" />
          <span className="text-xs font-medium text-gray-500">
            {t('rnpl.service_fee')}: <span className="text-sakani-navy font-bold">EGP {serviceFee}</span>
          </span>
        </div>
      </div>

      <Button size="full" variant="primary">
        Apply for RNPL
      </Button>
    </Card>
  );
};

// Helper function
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default RNPLCalculator;
