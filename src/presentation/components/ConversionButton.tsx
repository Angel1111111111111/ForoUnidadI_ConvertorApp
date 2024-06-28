import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from '../../config/app-theme';

interface Props {
  onPress: () => void;
}

export const ConversionButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.buttonText}>Convertir a HNL</Text>
    </TouchableOpacity>
  );
};
