import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import Card from '../components/Card';

const RentHistory: React.FC = () => {
  const history = [
    { id: 1, date: '15 Feb 2026', amount: '12,500', status: 'Paid', type: 'Rent Payment' },
    { id: 2, date: '15 Jan 2026', amount: '12,500', status: 'Paid', type: 'Rent Payment' },
    { id: 3, date: '15 Dec 2025', amount: '12,500', status: 'Paid', type: 'Rent Payment' },
    { id: 4, date: '01 Dec 2025', amount: '25,000', status: 'Paid', type: 'Security Deposit' },
  ];

  return (
    <div className="min-h-screen bg-sakani-bg p-6 pb-32">
      <div className="pt-12 mb-8">
        <h1 className="text-3xl font-black text-sakani-navy mb-2">Rent History</h1>
        <p className="text-gray-500 font-medium text-sm">Track your payments and Sakani benefits.</p>
      </div>

      <div className="space-y-4">
        {history.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="white" padding="md" className="flex justify-between items-center group active:scale-[0.98] transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sakani-bg rounded-2xl flex items-center justify-center text-sakani-navy">
                  {item.status === 'Paid' ? <CheckCircle2 className="w-6 h-6 text-sakani-emerald" /> : <Clock className="w-6 h-6" />}
                </div>
                <div>
                  <h4 className="font-bold text-sakani-navy">{item.type}</h4>
                  <p className="text-xs text-gray-400 font-medium">{item.date}</p>
                </div>
              </div>
              <div className="text-right flex items-center gap-3">
                <div>
                  <p className="font-bold text-sakani-navy text-sm">EGP {item.amount}</p>
                  <p className="text-[10px] font-bold text-sakani-emerald uppercase">{item.status}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-sakani-navy transition-colors" />
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RentHistory;
