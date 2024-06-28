import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ConversionInput} from '../components/ConversionInput';
import {ConversionButton} from '../components/ConversionButton';

describe('ConversionInput', () => {
  it('Actualiza el valor en la entrada de texto', () => {
    const handleChangeText = jest.fn();
    const {getByPlaceholderText} = render(
      <ConversionInput value="" onChangeText={handleChangeText} />,
    );
    fireEvent.changeText(getByPlaceholderText('Cantidad en USD'), '100');
    expect(handleChangeText).toHaveBeenCalledWith('100');
  });
});

describe('ConversionButton', () => {
  it('Llama a onPress cuando se preciona el boton', () => {
    const handlePress = jest.fn();
    const {getByText} = render(<ConversionButton onPress={handlePress} />);
    fireEvent.press(getByText('Convertir a HNL'));
    expect(handlePress).toHaveBeenCalled();
  });
});
