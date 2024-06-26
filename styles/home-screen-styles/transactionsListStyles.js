// React Native Components
import { StyleSheet } from 'react-native';

export const transactionsListStyles = (theme) => {
    const commonStyles = {
        container: {
display: 'flex',
flexDirection: 'column',
height: '100%',
        },
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
        })
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
        })
    }
}