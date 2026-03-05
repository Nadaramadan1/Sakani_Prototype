import { Plus, ArrowUpRight, ArrowDownLeft, ShieldCheck, MoreVertical } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

const PaymentsScreen: React.FC = () => {

    const transactions = [
        { id: 1, title: 'Rent Payment - March', amount: '12,500', date: 'Just now', type: 'debit' },
        { id: 2, title: 'Wallet Top-up', amount: '5,000', date: 'Yesterday', type: 'credit' },
        { id: 3, title: 'Security Deposit Installment', amount: '2,083', date: '15 Feb 2026', type: 'debit' },
    ];

    return (
        <div className="min-h-screen bg-sakani-bg p-6 pb-32">
            {/* Header */}
            <div className="pt-12 mb-8 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black text-sakani-navy">Sakani Wallet</h1>
                    <p className="text-gray-500 font-medium text-sm">Manage your Sharia-compliant payments.</p>
                </div>
                <button className="w-12 h-12 rounded-2xl bg-sakani-navy text-white flex items-center justify-center shadow-lg">
                    <Plus className="w-6 h-6" />
                </button>
            </div>

            {/* Wallet Balance Card */}
            <Card variant="navy" className="mb-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                <div className="relative z-10 space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-white/60 text-sm font-medium">Available Balance</span>
                        <ShieldCheck className="w-6 h-6 text-sakani-emerald" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-4xl font-black">EGP 24,500</p>
                        <p className="text-xs text-white/40 font-medium uppercase tracking-widest">Active Limit: EGP 150,000</p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="secondary" size="sm" className="flex-1 rounded-xl font-bold bg-white text-sakani-navy hover:bg-gray-100">
                            Top Up
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 rounded-xl font-bold border-white/20 text-white hover:bg-white/5">
                            Transfer
                        </Button>
                    </div>
                </div>
            </Card>

            {/* Upcoming Dues */}
            <div className="mb-8">
                <h3 className="text-lg font-bold text-sakani-navy mb-4 px-2">Upcoming Dues</h3>
                <Card variant="white" padding="md" className="border-l-4 border-l-sakani-navy">
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <h4 className="font-bold text-sakani-navy">Rent Payment - April</h4>
                            <p className="text-xs text-gray-400 font-medium">Due: 15 Apr 2026</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-sakani-navy">EGP 12,500</p>
                            <span className="text-[10px] font-bold text-gray-400 uppercase">Status: Scheduled</span>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Activity */}
            <div>
                <div className="flex justify-between items-center mb-4 px-2">
                    <h3 className="text-lg font-bold text-sakani-navy">Activity</h3>
                    <span className="text-xs font-bold text-sakani-navy/40">View All</span>
                </div>
                <div className="space-y-3">
                    {transactions.map((tx) => (
                        <div key={tx.id} className="bg-white p-4 rounded-3xl flex justify-between items-center shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tx.type === 'debit' ? 'bg-red-50 text-red-500' : 'bg-sakani-emerald/10 text-sakani-emerald'}`}>
                                    {tx.type === 'debit' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownLeft className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sakani-navy text-sm">{tx.title}</h4>
                                    <p className="text-[10px] text-gray-400 font-medium">{tx.date}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-3">
                                <p className={`font-bold text-sm ${tx.type === 'debit' ? 'text-sakani-navy' : 'text-sakani-emerald'}`}>
                                    {tx.type === 'debit' ? '-' : '+'} EGP {tx.amount}
                                </p>
                                <MoreVertical className="w-4 h-4 text-gray-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaymentsScreen;
