import { StyleSheet } from 'react-native';

export const settingsScreenStyles = (theme) => {
    const commonStyles = {
        container: {
            marginTop: 30,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            marginTop: 30,
        },
        settingsHeadingContainer: {
            alignItems: 'center',
        },
        settingsHeading: {
            fontSize: 24,
        },
        categoriesContainer: {
            marginTop: 0,
        },
        settingsCategoryContainer: {
            height: 50,
            width: '100%',
            borderBottomWidth: 2,
            
            position: 'relative'
        },
        settingsCategory: {
            position: 'absolute',
            bottom: 0,
            fontSize: 20,
        }
    }
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            settingsHeadingContainer: {
                ...commonStyles.settingsHeadingContainer,
            },
            settingsHeading: {
                ...commonStyles.settingsHeading,
                color: '#1e1e2d',
            },
            categoriesContainer: {
                ...commonStyles.categoriesContainer,
            },
            settingsCategoryContainer: {
                ...commonStyles.settingsCategoryContainer,
                borderBottomColor: '#f4f4f4',
            },
            settingsCategory: {
                ...commonStyles.settingsCategory,
                color: '#1e1e2d',
            }
        });
    }
    else{
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            settingsHeadingContainer: {
                ...commonStyles.settingsHeadingContainer,
            },
            settingsHeading: {
                ...commonStyles.settingsHeading,
                color: 'white',
            },
            categoriesContainer: {
                ...commonStyles.categoriesContainer,
            },
            settingsCategoryContainer: {
                ...commonStyles.settingsCategoryContainer,
                borderBottomColor: '#232533',
            },
            settingsCategory: {
                ...commonStyles.settingsCategory,
                color: 'white',
            }
        });
    }
}