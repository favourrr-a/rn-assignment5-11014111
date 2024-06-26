import { View, Image, Text } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

// Styles
import { operationsStyles } from '../../styles/home-screen-styles/operationsStyles';

// Assets
import sendIcon from '../../assets/operations/send.png';
import sendIconDark from '../../assets/operations/send-dark.png';
import receiveIcon from '../../assets/operations/receive.png';
import receiveIconDark from '../../assets/operations/receive-dark.png';
import loanIcon from '../../assets/operations/loan.png';
import loanIconDark from '../../assets/operations/loan-dark.png';
import topup from '../../assets/operations/top-up.png';
import topupDark from '../../assets/operations/top-up-dark.png';

export default function Operations() {
  const { theme } = useContext(AppContext);
  const operationsThemedStyle = operationsStyles(theme);

  return (
    <View style = {operationsThemedStyle.container}>
        <View style = {operationsThemedStyle.opAndDesc}>
            <View style = {operationsThemedStyle.opIconContainer}>
                <Image source = {theme === 'light' ? sendIconDark : sendIcon } style = {operationsThemedStyle.opIcon} />
            </View>
            <View style = {operationsThemedStyle.opTextContainer}>
                <Text style = {operationsThemedStyle.opText}>
                    Send
                </Text>
            </View>
        </View>
        <View style = {operationsThemedStyle.opAndDesc}>
            <View style = {operationsThemedStyle.opIconContainer}>
                <Image source = {theme === 'light' ? receiveIconDark : receiveIcon } style = {operationsThemedStyle.opIcon} />
            </View>
            <View style = {operationsThemedStyle.opTextContainer}>
                <Text style = {operationsThemedStyle.opText}>
                    Receive
                </Text>
            </View>
        </View>
        <View style = {operationsThemedStyle.opAndDesc}>
            <View style = {operationsThemedStyle.opIconContainer}>
                <Image source = {theme === 'light' ? loanIconDark : loanIcon } style = {operationsThemedStyle.opIcon} />
            </View>
            <View style = {operationsThemedStyle.opTextContainer}>
                <Text style = {operationsThemedStyle.opText}>
                    Loan
                </Text>
            </View> 
        </View>
        <View style = {operationsThemedStyle.opAndDesc}>
            <View style = {operationsThemedStyle.opIconContainer}>
                <Image source = {theme === 'light' ? topupDark : topup } style = {operationsThemedStyle.opIcon} />
            </View>
            <View style = {operationsThemedStyle.opTextContainer}>
                <Text style = {operationsThemedStyle.opText}>
                    Topup
                </Text>
            </View>
        </View>
    </View>
  );
}