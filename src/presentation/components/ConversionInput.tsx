import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { style } from '../../config/app-theme';

interface ConversionInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const ConversionInput: React.FC<ConversionInputProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={style.input}
      placeholder="Cantidad en USD"
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
    />
  );
};