import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { style } from '../../config/app-theme';

interface ConversionButtonProps {
  onPress: () => void;
}

export const ConversionButton: React.FC<ConversionButtonProps> = ({ onPress }) => {
    return (
      <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.buttonText}>Convertir a HNL</Text>
    </TouchableOpacity>
    );
};
