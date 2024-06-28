import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { style } from '../../config/app-theme';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const ConversionInput = ({ value, onChangeText }: Props ) => {
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