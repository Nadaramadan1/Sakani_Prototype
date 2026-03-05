import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Download, Share2, QrCode } from 'lucide-react';
import Button from './Button';

interface PaymentReceiptModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        id: string;
        tenantName: string;
        amount: string;
        month: string;
        contractId: string;
        method: string;
        date: string;
    } | null;
}

const PaymentReceiptModal: React.FC<PaymentReceiptModalProps> = ({ isOpen, onClose, data }) => {
    if (!data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-sakani-navy/40 backdrop-blur-md"
                    />
                    
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-white w-full max-w-sm rounded-3xl overflow-hidden relative z-10 shadow-2xl flex flex-col"
                    >
                        {/* Receipt Top Header */}
                        <div className="bg-sakani-emerald/5 p-8 flex flex-col items-center border-b border-dashed border-gray-200 relative">
                             <div className="w-20 h-20 bg-sakani-emerald rounded-full flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/20">
                                 <Check className="w-10 h-10 stroke-[3]" />
                             </div>
                             <h2 className="text-xl font-black text-sakani-navy" style={{ fontFamily: 'Tajawal, sans-serif' }}>تمت عملية الدفع بنجاح</h2>
                             <p className="text-gray-400 font-bold text-xs mt-1">Digital Payment Receipt</p>
                             
                             {/* Tear-off effect circles */}
                             <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-sakani-navy/10 rounded-full" />
                             <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-sakani-navy/10 rounded-full" />
                        </div>

                        {/* Receipt Body */}
                        <div className="p-8 space-y-6 relative" dir="rtl">
                             {/* Official Paid Stamp Overlay */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] opacity-[0.08] pointer-events-none select-none">
                                 <div className="border-8 border-sakani-emerald p-4 rounded-3xl">
                                     <h3 className="text-6xl font-black text-sakani-emerald tracking-widest uppercase">PAID</h3>
                                     <p className="text-center font-bold text-sakani-emerald">SAKANI DIGITAL</p>
                                 </div>
                             </div>

                             <div className="space-y-4 relative">
                                 <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-400 font-bold">إيصال سداد رقمي</span>
                                     <span className="text-sakani-navy font-mono font-bold text-[10px]">{data.id}</span>
                                 </div>
                                 
                                 <div className="h-px bg-gray-50 w-full" />

                                 <div className="flex justify-between items-center">
                                     <span className="text-gray-400 font-bold text-sm">اسم المستأجر</span>
                                     <span className="text-sakani-navy font-black">{data.tenantName}</span>
                                 </div>

                                 <div className="flex justify-between items-center">
                                     <span className="text-gray-400 font-bold text-sm">قيمة القسط</span>
                                     <span className="text-sakani-navy font-black text-lg">{data.amount} ج.م</span>
                                 </div>

                                 <div className="flex justify-between items-center">
                                     <span className="text-gray-400 font-bold text-sm">عن شهر</span>
                                     <span className="text-sakani-navy font-black">{data.month}</span>
                                 </div>

                                 <div className="flex justify-between items-center">
                                     <span className="text-gray-400 font-bold text-sm">رقم العقد الموحد</span>
                                     <span className="text-sakani-navy font-bold font-mono text-xs">{data.contractId}</span>
                                 </div>

                                 <div className="flex justify-between items-center">
                                     <span className="text-gray-400 font-bold text-sm">طريقة السداد</span>
                                     <span className="text-sakani-navy font-black flex items-center gap-1">
                                         <div className="w-2 h-2 rounded-full bg-sakani-emerald" />
                                         {data.method}
                                     </span>
                                 </div>

                                 <div className="flex justify-between items-center">
                                     <span className="text-gray-400 font-bold text-sm">تاريخ العملية</span>
                                     <span className="text-sakani-navy font-bold text-xs">{data.date}</span>
                                 </div>
                             </div>

                             {/* QR & Verification */}
                             <div className="pt-8 flex flex-col items-center gap-2">
                                 <div className="w-24 h-24 bg-gray-50 rounded-2xl p-2 flex items-center justify-center border border-gray-100">
                                     <QrCode className="w-full h-full text-sakani-navy opacity-80" />
                                 </div>
                                 <p className="text-[10px] font-bold text-gray-400 tracking-wider">تحقق من صحة الإيصال عبر مسح الكود</p>
                             </div>
                        </div>

                        {/* Actions */}
                        <div className="p-6 bg-gray-50 grid grid-cols-2 gap-3 mt-auto relative">
                             {/* Dashed edge visual */}
                             <div className="absolute top-0 left-0 right-0 h-1 flex justify-between overflow-hidden">
                                 {[...Array(20)].map((_, i) => (
                                     <div key={i} className="w-2 h-2 bg-white rounded-full -mt-1" />
                                 ))}
                             </div>

                             <Button 
                                variant="outline" 
                                className="rounded-2xl flex items-center justify-center gap-2 font-bold py-4 text-xs border-sakani-navy text-sakani-navy"
                             >
                                <Download className="w-4 h-4" />
                                تحميل الوصل
                             </Button>
                             <Button 
                                variant="outline" 
                                className="rounded-2xl flex items-center justify-center gap-2 font-bold py-4 text-xs bg-white"
                             >
                                <Share2 className="w-4 h-4" />
                                مشاركة الوصل
                             </Button>
                             <Button 
                                variant="primary" 
                                size="full" 
                                onClick={onClose}
                                className="col-span-2 rounded-2xl py-4 font-black shadow-xl shadow-navy-900/10 mt-2"
                             >
                                Close
                             </Button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default PaymentReceiptModal;
