import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'app.name': 'Sakani',
    'auth.signin': 'Sign In',
    'auth.signup': 'Sign Up',
    'auth.egypt_portal': 'Sign in with Egypt Digital Portal',
    'auth.phone': 'Phone Number',
    'auth.otp': 'Verify OTP',
    'auth.who_are_you': 'Who are you?',
    'role.tenant': 'Tenant',
    'role.owner': 'Property Owner',
    'dashboard.tenant.title': 'My Sakani',
    'dashboard.owner.title': 'My Assets',
    'score.title': 'Sakani Score',
    'score.status': 'Excellent Behavior',
    'rent.next_amount': 'Next Rent',
    'rent.due_date': 'Due Date',
    'rent.pay_now': 'Pay Now',
    'rnpl.calculator': 'RNPL Calculator',
    'rnpl.deposit': 'Security Deposit',
    'rnpl.advance': 'Advance Rent',
    'rnpl.period': 'Installment Period',
    'rnpl.months': 'Months',
    'rnpl.monthly_payment': 'Monthly Sakani Installment',
    'rnpl.service_fee': 'Halal Admin Fees',
    'halal.title': 'Halal-First Transparency',
    'halal.wakala': 'Sharia-compliant Wakala (Agency) model. No interest, just fixed service fees.',
    'owner.verified': 'Verified',
    'owner.guarantee': 'Sakani Guarantee',
    'owner.active': 'ACTIVE',
    'owner.contracts': 'Digital Contracts',
    'owner.view_title': 'View Digital Executive Title',
    'contract.sign': 'Sign Contract',
    'payment.success': 'Payment Successful',
    'common.back': 'Back',
    'common.continue': 'Continue',
    'common.submit': 'Submit',
  },
  ar: {
    'app.name': 'سكني',
    'auth.signin': 'تسجيل الدخول',
    'auth.signup': 'إنشاء حساب',
    'auth.egypt_portal': 'الدخول عبر مصر الرقمية',
    'auth.phone': 'رقم الهاتف',
    'auth.otp': 'تأكيد الرمز (OTP)',
    'auth.who_are_you': 'من أنت؟',
    'role.tenant': 'مستأجر',
    'role.owner': 'صاحب عقار',
    'dashboard.tenant.title': 'سكني الخاص بي',
    'dashboard.owner.title': 'أصولي العقارية',
    'score.title': 'تقييم سكني',
    'score.status': 'سلوك عقاري ممتاز',
    'rent.next_amount': 'الإيجار القادم',
    'rent.due_date': 'تاريخ الاستحقاق',
    'rent.pay_now': 'ادفع الآن',
    'rnpl.calculator': 'حاسبة تقسيط الإيجار',
    'rnpl.deposit': 'التأمين',
    'rnpl.advance': 'المقدم',
    'rnpl.period': 'فترة التقسيط',
    'rnpl.months': 'أشهر',
    'rnpl.monthly_payment': 'قسط سكني الشهري',
    'rnpl.service_fee': 'رسوم إدارية (متوافقة مع الشريعة)',
    'halal.title': 'شفافية "حلال أولاً"',
    'halal.wakala': 'نموذج "الوكالة" المتوافق مع الشريعة. لا توجد فوائد، فقط رسوم خدمات ثابتة.',
    'owner.verified': 'موثق',
    'owner.guarantee': 'ضمان سكني',
    'owner.active': 'نشط',
    'owner.contracts': 'العقود الرقمية',
    'owner.view_title': 'عرض السند التنفيذي',
    'contract.sign': 'توقيع العقد',
    'payment.success': 'تم الدفع بنجاح',
    'common.back': 'رجوع',
    'common.continue': 'متابعة',
    'common.submit': 'إرسال',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  const isRTL = lang === 'ar';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      <div className={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
