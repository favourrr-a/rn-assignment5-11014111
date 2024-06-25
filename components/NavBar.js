import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

// Screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MyCardsScreen from '../screens/MyCardsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';

// Tab Icons
import homeIcon from '../assets/nav-bar-icons/home.png';
import myCardsIcon from '../assets/nav-bar-icons/my-cards.png';
import statisticsIcon from '../assets/nav-bar-icons/statistics.png';
import settingsIcon from '../assets/nav-bar-icons/settings.png';
import settingsIconFocused from '../assets/nav-bar-icons/settings-focused.png';
import homeIconFocused from '../assets/nav-bar-icons/home-focused.png';
import myCardsIconFocused from '../assets/nav-bar-icons/my-cards-focused.png';
import statisticsIconFocused from '../assets/nav-bar-icons/statistics-focused.png';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ focused }) => {
        let icon;

        switch (route.name) {
          case 'Home':
            icon = focused ? homeIconFocused : homeIcon;
            break;
          case 'My Cards':
            icon = focused ? myCardsIconFocused : myCardsIcon;
            break;
          case 'Statistics':
            icon = focused ? statisticsIconFocused : statisticsIcon;
            break;
          case 'Settings':
            icon = focused ? settingsIconFocused : settingsIcon;
            break;
          default:
            icon = homeImage;
            break;
        }

        return <Image source={icon} style={{ width: 24, height: 24 }} />;
      },
    })}
    >
      <Tab.Screen name = "Home" component = {HomeScreen} />
      <Tab.Screen name = "My Cards" component = {MyCardsScreen} />
      <Tab.Screen name = "Statistics" component = {StatisticsScreen} />
      <Tab.Screen name = "Settings" component = {SettingsScreen} />
    </Tab.Navigator>
  );
}