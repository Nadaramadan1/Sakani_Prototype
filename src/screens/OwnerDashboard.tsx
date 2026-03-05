import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  ShieldCheck, 
  BadgeCheck, 
  ChevronRight, 
  FileText, 
  Plus, 
  LayoutDashboard,
  Wallet,
  Users,
  Settings,
  MoreVertical,
  Scale
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Card from '../components/Card';
import Button from '../components/Button';

const OwnerDashboard: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [guaranteeActive, setGuaranteeActive] = useState(true);
  const [showContract, setShowContract] = useState<{ id: string, name: string } | null>(null);

  const properties = [
    { id: '1', name: 'Zayed Regency, Apt 402', tenant: 'Amr Ahmed', status: 'Occupied', rent: '15,000' },
    { id: '2', name: 'New Cairo, Villa 12', tenant: 'Sara Khaled', status: 'Occupied', rent: '45,000' },
  ];

  return (
    <div className="min-h-screen bg-sakani-bg pb-24">
      {/* Top Bar */}
      <div className="bg-white px-6 pt-12 pb-6 flex justify-between items-center rounded-b-[2.5rem] shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-sakani-navy rounded-2xl flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-400">Marhaban, Dr. Sherif</h2>
            <h1 className="text-xl font-bold text-sakani-navy">{t('dashboard.owner.title')}</h1>
          </div>
        </div>
        <button className="w-12 h-12 rounded-2xl bg-sakani-navy flex items-center justify-center text-white shadow-lg shadow-navy-900/10">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      <div className="p-6 space-y-8 max-w-md mx-auto">
        {/* Guarantee Status Card */}
        <Card variant={guaranteeActive ? 'navy' : 'white'} className="relative overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <h3 className="text-sm font-bold opacity-60 uppercase tracking-widest">{t('owner.guarantee')}</h3>
              <p className="text-2xl font-black">{guaranteeActive ? t('owner.active') : 'INACTIVE'}</p>
            </div>
            <div 
              onClick={() => setGuaranteeActive(!guaranteeActive)}
              className={cn(
                "w-16 h-8 rounded-full p-1 cursor-pointer transition-colors duration-300",
                guaranteeActive ? "bg-sakani-emerald" : "bg-gray-200"
              )}
            >
              <motion.div 
                animate={{ x: guaranteeActive ? (isRTL ? -32 : 32) : 0 }}
                className="w-6 h-6 bg-white rounded-full shadow-sm"
              />
            </div>
          </div>
          <p className="mt-4 text-xs font-medium opacity-80 leading-relaxed">
            Your rent is 100% guaranteed by Sakani. Even if the tenant is late, we pay you on time.
          </p>
        </Card>

        {/* Asset Overview */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-lg font-bold text-sakani-navy">Your Properties</h3>
            <span className="text-sm font-bold text-sakani-navy/40">2 Assets</span>
          </div>

          <div className="space-y-4">
            {properties.map((prop) => (
              <Card key={prop.id} padding="md" variant="white" className="border-2 border-transparent hover:border-sakani-navy/10 transition-all active:scale-[0.98]">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-sakani-navy/5 rounded-2xl flex items-center justify-center text-sakani-navy">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sakani-navy">{prop.name}</h4>
                        <div className="flex items-center gap-1 bg-sakani-emerald/10 px-2 py-0.5 rounded-full">
                          <BadgeCheck className="w-3 h-3 text-sakani-emerald" />
                          <span className="text-[10px] font-bold text-sakani-emerald">{t('owner.verified')}</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 font-medium">Tenant: {prop.tenant}</p>
                    </div>
                  </div>
                  <MoreVertical className="w-5 h-5 text-gray-300" />
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-50 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase">Monthly Rent</p>
                    <p className="font-bold text-sakani-navy">EGP {prop.rent}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="font-bold text-sakani-navy flex items-center gap-1">
                    Details
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Contracts Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center px-2">
            <h3 className="text-lg font-bold text-sakani-navy">{t('owner.contracts')}</h3>
          </div>
          
          <Card variant="white" className="border border-dashed border-gray-200 bg-gray-50/30">
            <div className="flex flex-col items-center text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-white rounded-3xl shadow-sm flex items-center justify-center text-sakani-navy">
                <FileText className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sakani-navy">Unified Digital Contract</h4>
                <p className="text-xs text-gray-400 font-medium">Egypt E-Housing Integrated</p>
              </div>
              <Button 
                variant="outline" 
                size="md" 
                className="rounded-2xl flex items-center gap-2"
                onClick={() => setShowContract({ id: 'C-092', name: 'Zayed Regency Contract' })}
              >
                <Scale className="w-5 h-5" />
                {t('owner.view_title')}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Digital Title Overlay */}
      <AnimatePresence>
        {showContract && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContract(null)}
              className="absolute inset-0 bg-sakani-navy/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white w-full max-w-sm rounded-[3rem] overflow-hidden relative z-10 shadow-2xl flex flex-col"
            >
              <div className="bg-sakani-navy p-8 text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Scale className="text-white w-10 h-10" />
                </div>
                <h2 className="text-xl font-bold text-white pt-2">سند تنفيذي رقم {showContract.id}</h2>
                <p className="text-white/60 text-sm">Unified Executive Title</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-medium">Property</span>
                    <span className="text-sakani-navy font-bold">Zayed Regency</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-medium">Verification</span>
                    <span className="text-sakani-emerald font-bold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> Valid
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-medium">Executive Power</span>
                    <span className="text-sakani-navy font-bold text-right">Immediate Eviction/Payment</span>
                  </div>
                </div>

                <div className="bg-sakani-bg p-4 rounded-2xl">
                  <pre className="text-[10px] text-gray-500 font-mono whitespace-pre-wrap leading-tight">
                    By virtue of this Digital Executive Title authenticated by the Ministry of Justice...
                  </pre>
                </div>

                <Button variant="primary" size="full" onClick={() => setShowContract(null)}>
                  Close Viewer
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around p-5 rounded-t-[2.5rem] shadow-lg">
        <NavIcon icon={<LayoutDashboard />} active />
        <NavIcon icon={<Wallet />} />
        <NavIcon icon={<Users />} />
        <NavIcon icon={<Settings />} />
      </div>
    </div>
  );
};

// Nav Icon Helper
const NavIcon = ({ icon, active }: { icon: React.ReactNode, active?: boolean }) => (
  <div className={cn("w-12 h-12 flex items-center justify-center rounded-2xl", active ? "bg-sakani-navy text-white shadow-lg shadow-navy-900/10" : "text-gray-400")}>
    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
  </div>
);

// Helper
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}

export default OwnerDashboard;
