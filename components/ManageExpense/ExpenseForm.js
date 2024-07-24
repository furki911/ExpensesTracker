import { View } from "react-native";
import Input from "./Input";
import { useCallback } from "react";

const ExpenseForm = () => {
  const amountChangedHandler = useCallback(() => {}, []);

  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: () => {},
          //   autoCapitalize: 'none'
          //   autoCorrect: false //default is true
        }}
      />
    </View>
  );
};

export default ExpenseForm;
