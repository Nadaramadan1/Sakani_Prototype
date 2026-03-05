import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, ShieldCheck, QrCode } from 'lucide-react';
import Button from './Button';

interface ExecutiveTitleModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        id: string;
        ownerName: string;
        tenantName: string;
        ownerId: string;
        tenantId: string;
        address: string;
        duration: string;
        rent: string;
        adminFees: string;
        date: string;
    } | null;
}

const ExecutiveTitleModal: React.FC<ExecutiveTitleModalProps> = ({ isOpen, onClose, data }) => {
    if (!data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-sakani-navy/90 backdrop-blur-xl"
                    />
                    
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-[#fdfbf7] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl relative z-10 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] flex flex-col border-[12px] border-white"
                        style={{ fontFamily: "'Amiri', serif" }}
                    >
                        {/* Status Bar / Watermark Container */}
                        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] overflow-hidden">
                           <svg viewBox="0 0 200 200" className="w-[80%] h-[80%] fill-current text-sakani-navy">
                                <path d="M100 20 C80 20 60 40 60 60 C60 80 80 100 100 100 C120 100 140 80 140 60 C140 40 120 20 100 20 M100 120 C70 120 40 140 40 170 L40 180 L160 180 L160 170 C160 140 130 120 100 120" />
                                <text x="50" y="110" className="text-[10px] font-bold">MINISTRY OF JUSTICE</text>
                           </svg>
                        </div>

                        {/* Document Header */}
                        <div className="p-8 border-b-2 border-[#e5e1da] relative">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-right space-y-1">
                                    <h2 className="text-xl font-bold text-[#2d2a26]">جمهورية مصر العربية</h2>
                                    <h3 className="text-lg font-bold text-[#2d2a26]">وزارة العدل</h3>
                                    <p className="text-sm font-medium text-[#5d5a56]">مصلحة الشهر العقاري والتوثيق</p>
                                </div>
                                <div className="w-20 h-20 bg-white border border-[#e5e1da] rounded-xl flex items-center justify-center p-2 shadow-sm">
                                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Coat_of_arms_of_Egypt_%28Official%29.svg/1200px-Coat_of_arms_of_Egypt_%28Official%29.svg.png" alt="Egypt Shield" className="w-full h-full object-contain grayscale opacity-60" />
                                </div>
                                <div className="text-left space-y-1">
                                    <p className="text-xs font-bold text-sakani-navy p-2 bg-sakani-navy/5 rounded-lg border border-sakani-navy/10 tracking-widest">SAKANI | MOJ</p>
                                    <p className="text-xs text-[#5d5a56] font-bold mt-2">رقم التوثيق: {data.id}</p>
                                </div>
                            </div>
                            
                            <div className="text-center py-4 bg-[#f8f5f0] border border-[#e5e1da] rounded-xl">
                                <h1 className="text-2xl font-black text-[#2d2a26] underline underline-offset-8">عقد إيجار موحد - سند تنفيذي</h1>
                                <p className="text-sm font-bold text-sakani-navy mt-2 tracking-[0.2em]">{data.id}</p>
                            </div>
                        </div>

                        {/* Document Body */}
                        <div className="p-10 space-y-8 text-right leading-loose text-[#2d2a26]" dir="rtl">
                            <p className="text-lg">
                                إنه في يوم <span className="font-bold underline">{data.date}</span>، تم إبرام هذا العقد الرقمي عبر منصة <span className="text-sakani-navy font-black">سكني (Sakani)</span> الموثقة، بين كل من:
                            </p>

                            <div className="space-y-4 pr-4 border-r-4 border-sakani-navy/20">
                                <div>
                                    <p className="font-bold">الطرف الأول (المؤجر): <span className="underline">{data.ownerName}</span></p>
                                    <p className="text-sm">الرقم القومي: <span className="font-mono">{data.ownerId}</span></p>
                                </div>
                                <div>
                                    <p className="font-bold">الطرف الثاني (المستأجر): <span className="underline">{data.tenantName}</span></p>
                                    <p className="text-sm">الرقم القومي: <span className="font-mono">{data.tenantId}</span></p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <p className="font-bold text-xl">تفاصيل الوحدة السكنية:</p>
                                <p className="text-lg bg-white p-4 rounded-xl border border-[#e5e1da] shadow-sm italic">
                                    "وحدة سكنية كائنة في: {data.address}"
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8 bg-white p-6 rounded-2xl border border-[#e5e1da] shadow-sm">
                                <div>
                                    <p className="text-sm text-gray-500 font-bold mb-1">مدة الإيجار</p>
                                    <p className="text-xl font-black">{data.duration}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold mb-1">القيمة الإيجارية الشهرية</p>
                                    <p className="text-xl font-black text-sakani-navy">{data.rent} ج.م</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 font-bold mb-1">رسوم الإدارة والضمان</p>
                                    <p className="text-lg font-bold text-sakani-emerald">{data.adminFees} ج.م <span className="text-[10px] opacity-60">(ثابتة - وكالة بأجر)</span></p>
                                </div>
                                <div className="flex items-end flex-col">
                                    <p className="text-sm text-gray-500 font-bold mb-1">حالة الضمان</p>
                                    <span className="bg-sakani-emerald text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                        <ShieldCheck className="w-3 h-3" /> فعال بالكامل
                                    </span>
                                </div>
                            </div>

                            <div className="bg-[#2d2a26] text-white p-6 rounded-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-sakani-emerald" />
                                <p className="text-xl font-bold leading-relaxed">
                                    هذا العقد له قوة السند التنفيذي طبقاً للقانون رقم ١٣٧ لسنة ٢٠٠٦، ويجوز التنفيذ به جبرياً في حال الإخلال ببنوده دون الحاجة للجوء للقضاء.
                                </p>
                            </div>

                            <div className="flex justify-between items-end pt-12">
                                <div className="flex flex-col items-center">
                                    <div className="w-24 h-24 border-4 border-[#2d2a26]/10 rounded-2xl p-2 flex items-center justify-center relative bg-white">
                                        <QrCode className="w-full h-full text-[#2d2a26]" />
                                        <div className="absolute -top-2 -right-2 bg-sakani-emerald text-white p-1 rounded-full border-2 border-white">
                                            <ShieldCheck className="w-3 h-3" />
                                        </div>
                                    </div>
                                    <p className="text-[10px] font-bold mt-2 text-gray-400">تحقق عبر بوابة مصر الرقمية</p>
                                </div>
                                <div className="text-center relative">
                                    <div className="w-32 h-32 border-4 border-sakani-navy/5 rounded-full flex items-center justify-center border-dashed mb-2 opacity-40">
                                         <p className="text-[10px] font-bold text-sakani-navy rotate-[-15deg]">OFFICIAL DIGITAL SEAL<br/>وزارة العدل</p>
                                    </div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ختم النسر الرقمي</p>
                                    <div className="absolute top-4 left-4 w-24 h-24 rounded-full border-4 border-sakani-navy/20 border-double flex items-center justify-center opacity-80 scale-150 rotate-[-12deg]">
                                         <p className="text-[8px] font-black text-sakani-navy/30 text-center leading-tight">وثيقة مؤمنة<br/>وزارة العدل<br/>MAINTAINED BY SAKANI</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Barcode Mockup */}
                        <div className="px-10 pb-10">
                            <div className="flex items-center gap-1 h-8 opacity-40 grayscale">
                                {[...Array(60)].map((_, i) => (
                                    <div key={i} className={`bg-black h-full`} style={{ width: `${Math.random() * 4 + 1}px` }} />
                                ))}
                            </div>
                            <p className="text-[8px] font-mono text-center mt-1 tracking-[1em]">SAKANI-MOJ-EGY-2026-993-8472-102</p>
                        </div>
                    </motion.div>

                    {/* Floating Controls */}
                    <div className="absolute bottom-10 right-10 flex flex-col gap-4 z-20">
                        <Button 
                            variant="primary" 
                            className="w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center p-0 bg-sakani-navy active:scale-90 transition-all"
                            onClick={() => window.print()}
                        >
                            <Printer className="w-6 h-6 text-white" />
                        </Button>
                        <Button 
                            variant="secondary" 
                            className="w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center p-0 bg-sakani-emerald border-none active:scale-90 transition-all font-black text-white"
                        >
                            <Download className="w-6 h-6" />
                        </Button>
                        <Button 
                            variant="ghost" 
                            className="w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center p-0 bg-white active:scale-90 transition-all text-sakani-navy"
                            onClick={onClose}
                        >
                            <X className="w-6 h-6" />
                        </Button>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ExecutiveTitleModal;
