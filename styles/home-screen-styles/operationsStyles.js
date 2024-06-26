import { StyleSheet } from 'react-native';

export const operationsStyles = (theme) => {
    const commonStyles = {
        container: {
            marginTop: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        opAndDesc: {
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        opIconContainer: {
            height: 60,
            width: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '100%',
        },
        opIcon: {
            height: 30,
            width: 30,
        },
        opTextContainer: {
            marginTop: 5,
        },
        opText: {

        }
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container
            },
            opAndDesc: {
                ...commonStyles.opAndDesc,
            },
            opIconContainer: {
                ...commonStyles.opIconContainer,
                backgroundColor: '#f4f4f4',
            },
            opIcon: {
                ...commonStyles.opIcon,
            },
            opTextContainer: {
                ...commonStyles.opTextContainer,
            },
            opText: {
                ...commonStyles.opText,
                color: '#1e1e2d'
            }
        })
    }
    else {
        return StyleSheet.create({
            container: {
                ...commonStyles.container
            },
            opAndDesc: {
                ...commonStyles.opAndDesc,
            },
            opIconContainer: {
                ...commonStyles.opIconContainer,
                backgroundColor: '#1e1e2d',
            },
            opIcon: {
                ...commonStyles.opIcon,
            },
            opTextContainer: {
                ...commonStyles.opTextContainer,
            },
            opText: {
                ...commonStyles.opText,
                color: '#a2a2a7'
            }
        })
    }
}