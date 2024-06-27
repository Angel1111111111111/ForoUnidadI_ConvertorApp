import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {ConversionInput} from '../components/ConversionInput';
import {ConversionButton} from '../components/ConversionButton';

describe('ConversionInput', () => {
  it('updates value on text input', () => {
    const handleChangeText = jest.fn();
    const {getByPlaceholderText} = render(
      <ConversionInput value="" onChangeText={handleChangeText} />,
    );
    fireEvent.changeText(getByPlaceholderText('Cantidad en USD'), '100');
    expect(handleChangeText).toHaveBeenCalledWith('100');
  });
});

describe('ConversionButton', () => {
  it('calls onPress when button is pressed', () => {
    const handlePress = jest.fn();
    const {getByText} = render(<ConversionButton onPress={handlePress} />);
    fireEvent.press(getByText('Convertir a HNL'));
    expect(handlePress).toHaveBeenCalled();
  });
});
