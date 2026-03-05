import { Wallet, TrendingUp, ArrowDownRight, ArrowUpRight, Calendar, Banknote } from 'lucide-react';
import Card from '../components/Card';

const RevenueScreen: React.FC = () => {
    const transactions = [
        { id: '1', date: '01 March 2026', amount: '15,000', type: 'Rent Collected', status: 'Completed', tenant: 'Amr Ahmed' },
        { id: '2', date: '01 March 2026', amount: '45,000', type: 'Rent Collected', status: 'Completed', tenant: 'Sara Khaled' },
    ];

    return (
        <div className="p-6 space-y-8 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h1 className="text-2xl font-black text-sakani-navy">Revenue Tracker</h1>
                <p className="text-gray-400 font-medium">Monitoring your rental income</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 gap-4">
                <Card variant="navy" padding="lg" className="relative overflow-hidden">
                    <TrendingUp className="absolute -top-4 -right-4 w-32 h-32 opacity-10" />
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                <Wallet className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs font-bold text-white/60 uppercase tracking-widest">Total Collected (March)</span>
                        </div>
                        <h2 className="text-4xl font-black text-white">EGP 60,000</h2>
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2 rounded-xl text-[10px] font-bold text-sakani-emerald">
                            <ArrowUpRight className="w-3 h-3" />
                            <span>100% On-time Payment Success</span>
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                    <Card variant="white" padding="md" className="border-2 border-sakani-navy/5">
                        <Calendar className="w-5 h-5 text-sakani-navy/20 mb-2" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Next Payout</p>
                        <p className="text-lg font-black text-sakani-navy">EGP 57,000</p>
                        <p className="text-[9px] font-bold text-gray-400 mt-1">15 Mar 2026</p>
                    </Card>
                    <Card variant="white" padding="md" className="border-2 border-sakani-navy/5">
                        <Banknote className="w-5 h-5 text-sakani-emerald/20 mb-2" />
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Admin Fees</p>
                        <p className="text-lg font-black text-gray-400">EGP 3,000</p>
                        <p className="text-[9px] font-bold text-gray-400 mt-1">Inclusive of Sakani Guarantee</p>
                    </Card>
                </div>
            </div>

            {/* Recent Payouts/Transactions */}
            <div className="space-y-4">
                <h3 className="text-lg font-bold text-sakani-navy px-2">Recent Transactions</h3>
                <div className="space-y-3">
                    {transactions.map((tx) => (
                        <Card key={tx.id} variant="white" padding="md" className="flex justify-between items-center group active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-sakani-emerald/5 rounded-2xl flex items-center justify-center text-sakani-emerald">
                                    <ArrowDownRight className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sakani-navy">{tx.type}</h4>
                                    <p className="text-[10px] text-gray-400 font-medium">{tx.tenant} • {tx.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-black text-sakani-navy">+{tx.amount}</p>
                                <span className="text-[8px] font-bold text-sakani-emerald uppercase tracking-widest">{tx.status}</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RevenueScreen;
