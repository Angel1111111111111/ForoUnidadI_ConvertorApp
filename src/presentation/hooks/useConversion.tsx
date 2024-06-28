import { useState } from 'react';

export const useConversion = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');

  const convertCurrency = () => {
    const amountValue = parseFloat(amount);
    if (!isNaN(amountValue)) {
      const converted = amountValue * 24.85; 
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
