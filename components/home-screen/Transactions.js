import { View, Image, Text } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

// Styles
import { transactionsStyles } from '../../styles/home-screen-styles/transactionsStyles';
import TransactionsList from './TransactionsList';

export default function Operations() {
  const { theme } = useContext(AppContext);
  const transactionsThemedStyle = transactionsStyles(theme);

  return (
    <View style = {transactionsThemedStyle.container}>
        <View style = {transactionsThemedStyle.titleAndSeeAll}>
            <View>
                <Text style = {transactionsThemedStyle.title}>
                    Transactions
                </Text>
            </View>
            <View>
                <Text style = {transactionsThemedStyle.seeAll}>
                    Sell All
                </Text>
            </View>
        </View>
        <TransactionsList />
    </View>
  );
}