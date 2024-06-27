// userConversion.js
import { useState } from 'react';

export const useConversion = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    // Example conversion logic
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      const converted = amountValue * 24.85; // Example conversion rate
      setConvertedAmount(converted.toFixed(2));
    } else {
      setConvertedAmount('');
    }
  };

  return {
    amount,
    convertedAmount,
    setAmount,
    convertCurrency,
  };
};
