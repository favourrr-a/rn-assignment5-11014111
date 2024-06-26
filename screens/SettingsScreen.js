import { View } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../store/context';

// Custom components
import ThemeSetting from '../components/settings-screen/ThemeSetting';

// Styles
import { appStyles } from '../styles/appStyles';
import { settingsScreenStyles } from '../styles/settings-screen-styles/settingsScreenStyles';

export default function SettingsScreen(){
    const { theme } = useContext(AppContext)
    const appThemedStyle = appStyles(theme);
    const settingsScreenThemedStyle = settingsScreenStyles(theme);
    return (
        <View style = {appThemedStyle.container}> 
            <View style = {settingsScreenThemedStyle.container}>
                <ThemeSetting />
            </View>
        </View>
    );
}