import React from 'react';
import { 
  ArrowLeft, 
  MessageSquare, 
  RefreshCw, 
  User, 
  Calendar, 
  AlertCircle,
  TrendingUp,
  CheckCircle2,
  Clock
} from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import SakaniScoreGauge from '../components/SakaniScoreGauge';

interface PropertyDetailsProps {
    property: {
        id: string;
        name: string;
        tenant: string;
        rent: string;
    };
    onBack: () => void;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ property, onBack }) => {
    return (
        <div className="min-h-screen bg-sakani-bg pb-12">
            {/* Header */}
            <div className="bg-white px-6 pt-12 pb-6 flex items-center gap-4 rounded-b-[2.5rem] shadow-sm">
                <button onClick={onBack} className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-sakani-navy active:scale-90 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <h1 className="text-xl font-bold text-sakani-navy">{property.name}</h1>
            </div>

            <div className="p-6 space-y-6 max-w-md mx-auto">
                {/* Tenant Profile Section */}
                <Card variant="white" padding="md" className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 bg-sakani-navy/5 rounded-[2rem] flex items-center justify-center text-sakani-navy border-2 border-sakani-navy/5 relative">
                             <User className="w-10 h-10" />
                             <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-sakani-emerald rounded-full border-4 border-white flex items-center justify-center">
                                 <CheckCircle2 className="w-4 h-4 text-white" />
                             </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-black text-sakani-navy">{property.tenant}</h3>
                            <p className="text-xs text-gray-400 font-medium italic">Verified Tenant since 2024</p>
                            <div className="mt-2 flex gap-2">
                                <span className="bg-sakani-emerald/10 text-sakani-emerald text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">On-Time Pay</span>
                                <span className="bg-sakani-navy/5 text-sakani-navy/40 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Premium Level</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                        <div className="flex flex-col items-center p-4 bg-sakani-bg rounded-3xl text-center">
                            <SakaniScoreGauge score={840} size={80} strokeWidth={8} />
                            <p className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Sakani Score</p>
                            <p className="text-sm font-black text-sakani-navy">Excellent</p>
                        </div>
                        <div className="flex flex-col justify-center p-4 bg-sakani-bg rounded-3xl">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-[10px] font-bold">
                                    <span className="text-gray-400 uppercase">On-Time</span>
                                    <span className="text-sakani-emerald">100%</span>
                                </div>
                                <div className="h-1.5 bg-white rounded-full overflow-hidden">
                                    <div className="h-full bg-sakani-emerald w-full" />
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-bold">
                                    <span className="text-gray-400 uppercase">Late pay</span>
                                    <span className="text-red-400">0%</span>
                                </div>
                                <div className="h-1.5 bg-white rounded-full overflow-hidden">
                                    <div className="h-full bg-red-400 w-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Financial Breakdown */}
                <div className="grid grid-cols-2 gap-4">
                    <Card variant="navy" padding="md" className="relative overflow-hidden">
                        <TrendingUp className="absolute -top-2 -right-2 w-16 h-16 opacity-10" />
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Collected</p>
                        <p className="text-xl font-black text-white mt-1">EGP 135k</p>
                        <p className="text-[10px] font-medium text-white/60 mt-2">9 Installments</p>
                    </Card>
                    <Card variant="white" padding="md" className="border-2 border-sakani-navy/5">
                        <Calendar className="w-5 h-5 text-sakani-navy/20 mb-2" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Transfer</p>
                        <p className="text-lg font-black text-sakani-navy mt-1">15 Mar</p>
                        <p className="text-[10px] font-medium text-sakani-emerald font-bold mt-2 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Scheduled
                        </p>
                    </Card>
                </div>

                <Card variant="white" padding="md" className="flex justify-between items-center">
                     <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Remaining Contract</p>
                        <p className="text-lg font-black text-sakani-navy">24 Months</p>
                     </div>
                     <div className="text-right">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">End Date</p>
                        <p className="text-sm font-bold text-sakani-navy">Feb 2028</p>
                     </div>
                </Card>

                {/* Maintenance Section */}
                <div className="space-y-3">
                    <h4 className="text-sm font-bold text-sakani-navy px-2">Maintenance Requests</h4>
                    <Card variant="white" padding="md" className="border-l-4 border-l-sakani-emerald">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-sakani-emerald/10 rounded-xl flex items-center justify-center text-sakani-emerald">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-sakani-navy">AC Filter Cleaning</h5>
                                    <p className="text-[10px] text-gray-400 font-medium">Completed: 10 Feb 2026</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card variant="white" padding="md" className="opacity-60 bg-gray-50/50">
                        <div className="flex justify-between items-center">
                            <p className="text-xs font-medium text-gray-400 italic">No pending requests</p>
                            <AlertCircle className="w-4 h-4 text-gray-300" />
                        </div>
                    </Card>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                    <Button variant="outline" size="full" className="rounded-2xl flex items-center gap-2 border-sakani-navy text-sakani-navy font-bold py-4">
                        <MessageSquare className="w-5 h-5" />
                        Contact Tenant
                    </Button>
                    <Button variant="primary" size="full" className="rounded-2xl flex items-center gap-2 font-bold py-4">
                        <RefreshCw className="w-5 h-5" />
                        Renew Contract
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
