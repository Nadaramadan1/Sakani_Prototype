import React from 'react';
import RNPLCalculator from '../components/RNPLCalculator';

const CalculatorScreen: React.FC = () => {
  return (
    <div className="min-h-screen bg-sakani-bg p-6 pb-32">
      <div className="pt-12 mb-8">
        <h1 className="text-3xl font-black text-sakani-navy mb-2">RNPL Calculator</h1>
        <p className="text-gray-500 font-medium text-sm">Plan your rent installments with zero interest.</p>
      </div>
      
      <RNPLCalculator />
      
      <div className="mt-8 p-6 bg-sakani-navy/5 rounded-[2.5rem] border border-sakani-navy/10">
        <h4 className="font-bold text-sakani-navy mb-2 italic">Why use Sakani?</h4>
        <ul className="text-xs text-sakani-navy/70 space-y-2 font-medium">
          <li>• Split your security deposit into 12 months</li>
          <li>• Pay your annual rent advance monthly</li>
          <li>• Boost your Sakani Score by paying on time</li>
          <li>• 100% Sharia Merchant-Wakala Model</li>
        </ul>
      </div>
    </div>
  );
};

export default CalculatorScreen;
