import { StyleSheet } from 'react-native';

export const myCardsStyles = (theme) => {
    const commonStyles = {
        container: {
            marginTop: 30,
            marginLeft: 10,
            marginRight: 10,
        }
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            text: {
                color: '#1e1e2d',
                fontSize: 20,
            }
        })
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            text: {
                color: 'white',
                fontSize: 20,
            }
        })
    }
}