// React Native Components
import {View, Text, Image} from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

// Styles
import { transactionsCardStyles } from '../../styles/home-screen-styles/transactionsCardStyles';

export default function TransactionsCard({icon, name, category, amount}) {
    const {theme} = useContext(AppContext);
    const transactionsCardThemedStyle = transactionsCardStyles(theme);

    const formattedTransactionAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    return(
        <View style = {transactionsCardThemedStyle.container}>
            <View style = {transactionsCardThemedStyle.iconContainer}>
                    <Image source = {icon} style = {transactionsCardThemedStyle.icon}/>
            </View>
            <View style = {transactionsCardThemedStyle.nameAndCategory}>
                <Text style = {transactionsCardThemedStyle.name}>
                    {name}
                </Text>
                <Text style = {transactionsCardThemedStyle.category}>
                    {category}
                </Text>
            </View>
            <View style = {transactionsCardThemedStyle.amountContainer}>
                <Text style = {transactionsCardThemedStyle.amount}>
                    {formattedTransactionAmount}
                </Text>
            </View>
        </View>
    )
}