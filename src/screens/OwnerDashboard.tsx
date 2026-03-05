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
import PropertyDetails from './PropertyDetails';
import ExecutiveTitleModal from '../components/ExecutiveTitleModal';
import RevenueScreen from './RevenueScreen';
import TenantsListScreen from './TenantsListScreen';

const OwnerDashboard: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [guaranteeActive, setGuaranteeActive] = useState(true);
  const [showExecutiveModal, setShowExecutiveModal] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'dashboard' | 'wallet' | 'tenants' | 'settings' | 'property-details'>('dashboard');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);
  const properties = [
    { id: '1', name: 'Zayed Regency, Apt 402', tenant: 'Amr Ahmed', status: 'Occupied', rent: '15,000' },
    { id: '2', name: 'New Cairo, Villa 12', tenant: 'Sara Khaled', status: 'Occupied', rent: '45,000' },
  ];

  const renderOwnerView = () => {
    switch (currentView) {
      case 'dashboard':
        return (
          <>
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
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="font-bold text-sakani-navy flex items-center gap-1 active:scale-95 transition-all"
                          onClick={() => handleOpenDetails(prop)}
                        >
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
                      onClick={() => setShowExecutiveModal(true)}
                    >
                      <Scale className="w-5 h-5" />
                      {t('owner.view_title')}
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </>
        );
      case 'wallet':
        return <RevenueScreen />;
      case 'tenants':
        return <TenantsListScreen />;
      case 'settings':
        return <div className="p-10 text-center font-bold text-sakani-navy animate-in fade-in slide-in-from-bottom-4 duration-500">Owner Settings coming soon</div>;
      case 'property-details':
        return <PropertyDetails property={selectedProperty} onBack={() => setCurrentView('dashboard')} />;
      default:
        return null;
    }
  };

  const getNotificationText = () => {
    switch (currentView) {
      case 'dashboard': return 'Viewing My Assets';
      case 'wallet': return 'Viewing Revenue';
      case 'tenants': return 'Viewing Tenants';
      case 'settings': return 'Viewing Settings';
      case 'property-details': return `Viewing ${selectedProperty?.name}`;
      default: return 'Sakani Guarantee: ACTIVE';
    }
  };
  const handleOpenDetails = (prop: any) => {
    setSelectedProperty(prop);
    setCurrentView('property-details');
  };

  return (
    <div className="min-h-screen bg-sakani-bg pb-24">
      {renderOwnerView()}

      <ExecutiveTitleModal 
        isOpen={showExecutiveModal} 
        onClose={() => setShowExecutiveModal(false)} 
        data={{
          id: 'Unified-MOJ-9938472',
          ownerName: 'Dr. Sherif Hassan',
          tenantName: 'Amr Ahmed',
          ownerId: '28001019902345',
          tenantId: '29512151203456',
          address: 'Zayed Regency, Apartment 402, Sheikh Zayed City, Egypt',
          duration: '3 Years (36 Months)',
          rent: '15,000',
          adminFees: '750',
          date: '06 March 2026'
        }}
      />

      {/* Dynamic Notification Bar (Toast) */}
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          key={currentView}
          className="fixed bottom-24 left-6 right-6 z-50 pointer-events-none"
        >
          <div className="bg-sakani-navy text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md bg-sakani-navy/90">
            <ShieldCheck className="w-5 h-5 text-sakani-emerald" />
            <span className="text-sm font-bold">{getNotificationText()}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around p-5 rounded-t-[2.5rem] shadow-lg z-50">
        <NavIcon icon={<LayoutDashboard />} active={currentView === 'dashboard'} onClick={() => setCurrentView('dashboard')} />
        <NavIcon icon={<Wallet />} active={currentView === 'wallet'} onClick={() => setCurrentView('wallet')} />
        <NavIcon icon={<Users />} active={currentView === 'tenants'} onClick={() => setCurrentView('tenants')} />
        <NavIcon icon={<Settings />} active={currentView === 'settings'} onClick={() => setCurrentView('settings')} />
      </div>
    </div>
  );
};

// Nav Icon Helper
const NavIcon = ({ icon, active, onClick }: { icon: React.ReactNode, active?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={cn(
      "w-12 h-12 flex items-center justify-center rounded-2xl transition-all active:scale-90", 
      active ? "bg-sakani-navy text-white shadow-lg shadow-navy-900/10" : "text-gray-400 hover:bg-gray-50"
    )}
  >
    {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
  </button>
);

// Helper
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(' ');
}

export default OwnerDashboard;
