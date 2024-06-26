import { View, Text } from 'react-native';
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
                <View style = {settingsScreenThemedStyle.settingsHeadingContainer}>
                    <Text style = {settingsScreenThemedStyle.settingsHeading}>
                        Settings
                    </Text>
                </View>
                <View style = {settingsScreenThemedStyle.categoriesContainer}>
                    <View style = {settingsScreenThemedStyle.settingsCategoryContainer}>
                        <Text style = {settingsScreenThemedStyle.settingsCategory}> 
                            Language
                        </Text>
                    </View>
                    <View style = {settingsScreenThemedStyle.settingsCategoryContainer}>
                        <Text style = {settingsScreenThemedStyle.settingsCategory}> 
                            My profile
                        </Text>
                    </View>
                    <View style = {settingsScreenThemedStyle.settingsCategoryContainer}>
                        <Text style = {settingsScreenThemedStyle.settingsCategory}> 
                            Contact us
                        </Text>
                    </View>
                    <View style = {settingsScreenThemedStyle.settingsCategoryContainer}>
                        <Text style = {settingsScreenThemedStyle.settingsCategory}> 
                            Change password
                        </Text>
                    </View>
                    <View style = {settingsScreenThemedStyle.settingsCategoryContainer}>
                        <Text style = {settingsScreenThemedStyle.settingsCategory}> 
                            Privacy policy
                        </Text>
                    </View>
                </View>
                <ThemeSetting />
            </View>
        </View>
    );
}