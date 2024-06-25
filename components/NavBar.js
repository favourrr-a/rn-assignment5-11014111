import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home-screen/HomeScreen';
import SettingsScreen from './settings-screen/SettingsScreen';
import MyCardsScreen from './my-cards-screen/MyCardsScreen';
import StatisticsScreen from './statistics-screen/StatisticsScreen';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {HomeScreen} />
      <Tab.Screen name = "My Cards" component = {MyCardsScreen} />
      <Tab.Screen name = "Statistics" component = {StatisticsScreen} />
      <Tab.Screen name = "Settings" component = {SettingsScreen} />
    </Tab.Navigator>
  );
}