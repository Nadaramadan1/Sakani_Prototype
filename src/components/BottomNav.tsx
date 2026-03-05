import React from 'react';
import { LayoutDashboard, Wallet, Calendar, Settings, Calculator } from 'lucide-react';

export type TenantView = 'dashboard' | 'payments' | 'history' | 'calculator' | 'settings';

interface BottomNavProps {
    activeView: TenantView;
    onViewChange: (view: TenantView) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeView, onViewChange }) => {

    const menuItems: { id: TenantView, icon: React.ReactNode, label: string }[] = [
        { id: 'dashboard', icon: <LayoutDashboard />, label: 'Home' },
        { id: 'payments', icon: <Wallet />, label: 'Wallet' },
        { id: 'history', icon: <Calendar />, label: 'History' },
        { id: 'calculator', icon: <Calculator />, label: 'Plan' },
        { id: 'settings', icon: <Settings />, label: 'Settings' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around p-4 pb-8 rounded-t-[2.5rem] shadow-2xl z-[100]">
            {menuItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onViewChange(item.id)}
                    className={`
                        flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 relative
                        ${activeView === item.id 
                            ? "bg-sakani-navy text-white shadow-lg shadow-navy-900/20 scale-110" 
                            : "text-gray-400 hover:bg-gray-50 active:scale-90"
                        }
                    `}
                >
                    {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { 
                        className: "w-6 h-6" 
                    })}
                </button>
            ))}
        </div>
    );
};

export default BottomNav;
