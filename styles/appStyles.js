import { StyleSheet } from 'react-native';

export const appStyles = (theme) => {
    const commonStyles = {
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
        },
    }
    if(theme === 'light') {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
                backgroundColor: '#ffffff',
            },
        })
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
                backgroundColor: '#161622',
            },
        })    
    }
};