import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import AuthScreen from './screens/AuthScreen';
import TenantDashboard from './screens/TenantDashboard';
import OwnerDashboard from './screens/OwnerDashboard';

const App: React.FC = () => {
  const [userRole, setUserRole] = useState<'tenant' | 'owner' | null>(null);

  const handleAuthComplete = (role: 'tenant' | 'owner') => {
    setUserRole(role);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-sakani-bg font-sans antialiased text-sakani-navy">
        {!userRole ? (
          <AuthScreen onComplete={handleAuthComplete} />
        ) : userRole === 'tenant' ? (
          <TenantDashboard />
        ) : (
          <OwnerDashboard />
        )}
      </div>
    </LanguageProvider>
  );
};

export default App;
