import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home-screen/HomeScreen';
import SettingsScreen from './settings-screen/SettingsScreen';
const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name = "Home" component = {HomeScreen} />
      <Tab.Screen name = "Settings" component = {SettingsScreen} />
    </Tab.Navigator>
  );
}