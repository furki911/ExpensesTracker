import { FlatList, Text, View } from "react-native";

const renderExpenseItem = (itemData) => (
  <View>
    <Text>{itemData.item.description}</Text>
    <Text>{itemData.item.amount}</Text>
  </View>
);

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
export default ExpensesList;
