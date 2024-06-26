import { StyleSheet } from 'react-native';

export const homeScreenStyles = (theme) => {
    const commonStyles = {
        container: {
            width: '90%',
            marginTop: 30,
        }
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            }
        });
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            }
        });
    }
}