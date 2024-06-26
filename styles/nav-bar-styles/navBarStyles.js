import { StyleSheet } from 'react-native';

export const navBarStyles = (theme) => {
    const commonStyles = {
        container: {
            height: 60,
            paddingBottom: 5,
        },
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
                backgroundColor: 'white',
                borderTopColor: 'white',
            },
        })
    } 
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
                backgroundColor: '#161622',
                borderTopColor: '#161622',
            },
        })   
    }
}