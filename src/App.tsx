import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AuthScreen from './screens/AuthScreen';
import TenantDashboard from './screens/TenantDashboard';
import OwnerDashboard from './screens/OwnerDashboard';
import PaymentsScreen from './screens/PaymentsScreen';
import RentHistory from './screens/RentHistory';
import CalculatorScreen from './screens/CalculatorScreen';
import BottomNav from './components/BottomNav';
import type { TenantView } from './components/BottomNav';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<'tenant' | 'owner' | null>(null);
  const [currentView, setCurrentView] = useState<TenantView>('dashboard');

  const handleAuthComplete = (role: 'tenant' | 'owner') => {
    setUserRole(role);
  };

  const renderTenantView = () => {
    switch (currentView) {
      case 'dashboard':
        return <TenantDashboard />;
      case 'payments':
        return <PaymentsScreen />;
      case 'history':
        return <RentHistory />;
      case 'calculator':
        return <CalculatorScreen />;
      case 'settings':
        return <div className="p-10 text-center font-bold text-sakani-navy">Settings coming soon</div>;
      default:
        return <TenantDashboard />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-sakani-bg font-sans antialiased text-sakani-navy">
        {!userRole ? (
          <AuthScreen onComplete={handleAuthComplete} />
        ) : userRole === 'tenant' ? (
          <div className="pb-24">
            {renderTenantView()}
            <BottomNav activeView={currentView} onViewChange={setCurrentView} />
          </div>
        ) : (
          <OwnerDashboard />
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
