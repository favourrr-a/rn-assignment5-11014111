// React Native Components
import { StyleSheet } from 'react-native';

export const transactionsCardStyles = (theme) => {
    const commonStyles = {
        container: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            height: 70,
            alignItems: 'center',
            marginTop: '10',
        },
        iconContainer: {
            height: 50,
            width: 50,
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        icon: {
            height: 30,
            width: 30,
        },
        nameAndCategory: {
            flex: 2.5,
            display: 'flex',
            marginLeft: 20,
        },
        name: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        category: {
            fontSize: 18,
        },
        amountContainer: {
            flex: 1,
            justifyContent: 'center',
            height: '100%',
            alignSelf: 'flex-end'
        },
        amount: {
            fontSize: 18,
        }
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            iconContainer: {
                ...commonStyles.iconContainer,
                backgroundColor: '#f4f4f4',
            },
            icon: {
                ...commonStyles.icon,
            },
            nameAndCategory: {
                ...commonStyles.nameAndCategory,
            },
            name: {
                ...commonStyles.name,
                color: '#1e1e2d',
            },
            category: {
                ...commonStyles.category,
                color: '#a2a2a7',
            },
            amountContainer: {
                ...commonStyles.amountContainer,
            },
            amount: {
                ...commonStyles.amount,
                color: '#1e1e2d'
            }
        })
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            iconContainer: {
                ...commonStyles.iconContainer,
                backgroundColor: '#1e1e2d',
            },
            icon: {
                ...commonStyles.icon,
            },
            nameAndCategory: {
                ...commonStyles.nameAndCategory,
            },
            name: {
                ...commonStyles.name,
                color: 'white',
            },
            category: {
                ...commonStyles.category,
                color: '#828289'
            },
            amountContainer: {
                ...commonStyles.amountContainer,
            },
            amount: {
                ...commonStyles.amount,
                color: 'white',
            } 
        })
    }
}