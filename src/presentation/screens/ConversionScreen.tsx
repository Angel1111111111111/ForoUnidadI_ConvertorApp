import { View } from "react-native";
import { ConversionInput } from "../components/ConversionInput";
import { ConversionButton } from "../components/ConversionButton";
import { style } from "../../config/app-theme";
import { useConversion } from "../hooks/useConversion";
import { ConversionResult } from "../components/ConversionResult";

export const ConversionScreen = () => {
  const { amount, setAmount, convertedAmount, convertCurrency } = useConversion();

  return (
    <View style={style.container}>
      <ConversionInput value={amount} onChangeText={setAmount} />
      <ConversionButton onPress={convertCurrency} />
      <ConversionResult result={convertedAmount} />
    </View>
  );
};