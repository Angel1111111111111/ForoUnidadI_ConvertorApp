import React from 'react';
import {Text} from 'react-native';
import {style} from '../../config/app-theme';

interface Props {
  result: string | null;
}

const formatNumber = (num: string) => {
  return parseFloat(num).toLocaleString('hnl', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const ConversionResult = ({result}: Props ) => {
  return result ? <Text style={style.resultText}>{formatNumber(result)} HNL</Text> : null;
};
