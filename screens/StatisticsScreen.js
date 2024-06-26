import { View, Text } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../store/context';

// Styles
import { statisticsScreenStyles } from '../styles/statistics-screen-styles/statisticsScreenStyles'
import { appStyles } from '../styles/appStyles';

export default function StatisticsScreen() {
  const {theme} = useContext(AppContext);
  const appThemedStyle = appStyles(theme);
  const statisticsScreenThemedStyles = statisticsScreenStyles(theme); 
  return (
    <View style = {appThemedStyle.container}>
      <View style = {statisticsScreenThemedStyles.container}>
        <Text style = {statisticsScreenThemedStyles.text}>Statistics Screen</Text>
      </View>
    </View>
  );
}