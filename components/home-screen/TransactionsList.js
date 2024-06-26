import { View } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

// Custom components
import TransactionsCard from './TransactionsCard';

// Styles
import { transactionsListStyles } from '../../styles/home-screen-styles/transactionsListStyles';

//assets
import apple from '../../assets/transactions/apple.png'

export default function TransactionsList() {
    const theme = useContext(AppContext);
    const transactionsListThemed = transactionsListStyles(theme);

    const transactions = [
        { id: 1, icon: apple, name: 'Apple', category: 'Entertainment', amount: 400},
        { id: 2, icon: apple, name: 'Beats', category: 'Entertainment', amount: 250},
        { id: 3, icon: apple, name: 'Burger King', category: 'Entertainment', amount: 290},
        { id: 4, icon: apple, name: 'EA', category: 'Entertainment', amount: 300},
        { id: 5, icon: apple, name: 'Facebook', category: 'Entertainment', amount: 99},
        { id: 6, icon: apple, name: 'Google', category: 'Entertainment', amount: 200},
        { id: 7, icon: apple, name: 'Linux', category: 'Entertainment', amount: 80},
        { id: 8, icon: apple, name: 'Oracle', category: 'Entertainment', amount: 89},
        { id: 9, icon: apple, name: 'Rockstar Games', category: 'Entertainment',  amount:70},
        { id: 10, icon: apple, name: 'Twitter', category: 'Entertainment', amount: 60},
    ];
    return(
        <View data = {transactions} style = {transactionsListThemed.container}>
            {transactions.map(transaction => (
                <TransactionsCard
                    icon = {transaction.icon}
                    name = {transaction.name}
                    category = {transaction.category}
                    amount = {transaction.amount}
                />
            ))}   
        </View>
    )
}