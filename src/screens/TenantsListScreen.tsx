import { Users, ShieldCheck, Star } from 'lucide-react';
import Card from '../components/Card';
import SakaniScoreGauge from '../components/SakaniScoreGauge';

const TenantsListScreen: React.FC = () => {
    const tenants = [
        { id: '1', name: 'Amr Ahmed', property: 'Zayed Regency, Apt 402', score: 840, status: 'On-Time Pay' },
        { id: '2', name: 'Sara Khaled', property: 'New Cairo, Villa 12', score: 910, status: 'Premium Level' },
    ];

    return (
        <div className="p-6 space-y-8 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h1 className="text-2xl font-black text-sakani-navy">My Tenants</h1>
                <p className="text-gray-400 font-medium">Managing your resident list</p>
            </div>

            <div className="space-y-4">
                {tenants.map((tenant) => (
                    <Card key={tenant.id} variant="white" padding="md" className="border-2 border-transparent hover:border-sakani-navy/5 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-sakani-navy/5 rounded-2xl flex items-center justify-center text-sakani-navy border border-sakani-navy/10">
                                    <Users className="w-7 h-7" />
                                </div>
                                <div>
                                    <h4 className="font-black text-sakani-navy text-lg">{tenant.name}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{tenant.property}</p>
                                </div>
                            </div>
                            <div className="bg-sakani-emerald/10 text-sakani-emerald p-2 rounded-xl">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                        </div>

                        <div className="flex items-center gap-6 pt-4 border-t border-gray-50">
                             <div className="flex-shrink-0">
                                <SakaniScoreGauge score={tenant.score} size={80} strokeWidth={8} showLabels={false} />
                             </div>
                             <div className="flex-grow space-y-2">
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                                    <span>Sakani Score</span>
                                    <span className="text-sakani-navy">{tenant.score} / 1000</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-3 h-3 text-sakani-emerald fill-sakani-emerald" />
                                    <span className="text-xs font-bold text-sakani-emerald">{tenant.status}</span>
                                </div>
                             </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Quick Insights */}
            <Card variant="white" padding="md" className="bg-sakani-bg/30 border-none">
                 <div className="flex gap-4 items-center">
                    <div className="flex-1 text-center border-r border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Avg Score</p>
                        <p className="text-xl font-black text-sakani-navy">875</p>
                    </div>
                    <div className="flex-1 text-center">
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Risk Level</p>
                        <p className="text-xl font-black text-sakani-emerald">LOW</p>
                    </div>
                 </div>
            </Card>
        </div>
    );
};

export default TenantsListScreen;
