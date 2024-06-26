import { StyleSheet } from 'react-native';

export const profileAndSearchStyles = (theme) => {
    const commonStyles = {
        profileAndSearchContainer: {
            marginTop: 10,
            flexDirection: 'row',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        profileImageContainer: {
        },
        profileImage: {
        },
        welcomeAndNameContainer: {
            marginLeft: 15,
            flex: 2,
            justifyContent: 'center',
        },
        searchIconContainer: {
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 50,
            alignItems: 'center',
        },
        searchIcon: {
            width: 24,
            height: 24,
        },
        welcomeText: {
            fontSize: 20,
        },
        nameText: {
            fontSize: 30,
        },
    }
    if(theme === 'light'){
        return StyleSheet.create({
            profileAndSearchContainer: {
                ...commonStyles.profileAndSearchContainer,
            },
            profileImageContainer: {
                ...commonStyles.profileImageContainer,
            },
            profileImage: {
                ...commonStyles.profileImage,
            },
            welcomeAndNameContainer: {
               ...commonStyles.welcomeAndNameContainer,
            },
            searchIconContainer: {
                ...commonStyles.searchIconContainer,
                backgroundColor: '#f4f4f4'
            },
            searchIcon: {
                ...commonStyles.searchIcon,
            },
            welcomeText: {
                ...commonStyles.welcomeText,
                color: '#7e848d',
            },
            nameText: {
                ...commonStyles.nameText,
                color: '#1e1e2d',
            },
        })
    }
    else {
        return StyleSheet.create({
            profileAndSearchContainer: {
                ...commonStyles.profileAndSearchContainer,
            },
            profileImageContainer: {
                ...commonStyles.profileImageContainer,
            },
            profileImage: {
                ...commonStyles.profileImage,
            },
            welcomeAndNameContainer: {
               ...commonStyles.welcomeAndNameContainer,
            },
            searchIconContainer: {
                ...commonStyles.searchIconContainer,
                backgroundColor: '#1e1e2d',
            },
            searchIcon: {
                ...commonStyles.searchIcon,
            },
            welcomeText: {
                ...commonStyles.welcomeText,
                color: '#7e848d',
            },
            nameText: {
                ...commonStyles.nameText,
                color: 'white',
            },
        })
    }
}