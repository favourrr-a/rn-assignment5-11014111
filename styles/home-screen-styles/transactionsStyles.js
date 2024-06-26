import { StyleSheet } from 'react-native';

export const transactionsStyles = (theme) => {
    const commonStyles = {
        container: {
            marginTop: 25,
            display: 'flex',
            flexDirection: 'column',
        },
        titleAndSeeAll: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 40,
        },
        title: {
            fontSize: 30,
        },
        seeAll: {
            fontSize: 18,
        },
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container
            },
            titleAndSeeAll: {
                ...commonStyles.titleAndSeeAll,
            },
            title: {
                ...commonStyles.title,
                color: '#1e1e2d',
            },
            seeAll: {
                ...commonStyles.seeAll,
                color: '#0066ff',
            },
        })
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            titleAndSeeAll: {
                ...commonStyles.titleAndSeeAll,
            },
            title: {
                ...commonStyles.title,
                color: '#ffffff',
            },
            seeAll: {
                ...commonStyles.seeAll,
                color: '#0066ff',
            },
        })
    }
}