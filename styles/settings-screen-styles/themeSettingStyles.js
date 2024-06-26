import { StyleSheet } from 'react-native';

export const themeSettingStyles = (theme) => {
    const commonStyles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 70,
            alignItems: 'center',
        },
        text: {
            fontSize: 30,  
            fontWeight: 'bold', 
        },
        switch: {
            display: 'flex',
            flexDirection: 'row',
        },
    };
    if(theme === 'light'){
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            text: {
                ...commonStyles.text,
                color: '#1e1e2d',
            }, 
            switch: {
                ...commonStyles.switch,
            },
        });
    }   
    else{
        return StyleSheet.create({
            container: {
                ...commonStyles.container,
            },
            text: {
                ...commonStyles.text,
                color: 'white',
            }, 
            switch: {
                ...commonStyles.switch,
            },
        });
    }
};