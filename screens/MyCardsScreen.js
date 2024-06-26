import { View, Text } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../store/context';

// Styles
import { appStyles } from '../styles/appStyles';
import { myCardsStyles } from '../styles/my-cards-styles/myCardsStyles';

export default function MyCardsScreen() {
  const {theme} = useContext(AppContext);
  const appThemedStyle = appStyles(theme);
  const myCardsThemedStyle = myCardsStyles(theme);
  return (
    <View style = {appThemedStyle.container}>
      <View style = {myCardsThemedStyle.container}>
        <Text style = {myCardsThemedStyle.text}>My Cards Screen</Text>
      </View>
    </View>
  );
}