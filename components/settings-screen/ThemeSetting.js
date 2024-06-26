import { View, Text, Switch } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

// Styles
import { themeSettingStyles } from '../../styles/settings-screen-styles/themeSettingStyles';

export default function ThemeSetting(){
    const { theme, setTheme } = useContext(AppContext);
    const themeSettingThemedStyle = themeSettingStyles(theme)

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    return (
        <View style = {themeSettingThemedStyle.container}>
            <Text style = {themeSettingThemedStyle.text}>
                Theme
            </Text>
        <Switch ios_backgroundColor = "#3e3e3e" onValueChange = {changeTheme} value = {theme === 'dark'} style = {themeSettingStyles.switch} />
        </View>
    );
}