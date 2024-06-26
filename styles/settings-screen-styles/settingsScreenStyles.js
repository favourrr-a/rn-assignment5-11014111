import { StyleSheet } from 'react-native';

export const settingsScreenStyles = (theme) => {
    const commonStyles = {
        container: {
            marginTop: 30,
            marginLeft: 10,
            marginRight: 10,
        },
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
        });
    }
    else{
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
        });
    }
}