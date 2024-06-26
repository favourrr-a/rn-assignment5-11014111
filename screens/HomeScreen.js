import { View } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../store/context';

// Custom components 
import Card from '../components/home-screen/Card';
import ProfileAndSearch from '../components/home-screen/ProfileAndSearch';

// Styles
import { appStyles } from '../styles/appStyles';
import { homeScreenStyles } from '../styles/home-screen-styles/homeScreenStyles';

export default function HomeScreen() {
  const { theme } = useContext(AppContext);
  const appThemedStyle = appStyles(theme);
  const homeScreenThemedStyle = homeScreenStyles(theme);

  return (
    <View style = {appThemedStyle.container}>
      <View style = {homeScreenThemedStyle.container}>
        <ProfileAndSearch />
        <Card />
      </View>
    </View>
  );
}