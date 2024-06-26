import { View, Text, Image } from 'react-native';
import { useContext } from 'react';
import { AppContext } from '../../store/context';

import { profileAndSearchStyles } from '../../styles/home-screen-styles/profileAndSearchStyles';

import profileImage from '../../assets/profile-and-search/profile-image.png';
import searchIcon from '../../assets/profile-and-search/search.png';
import searchIconDarkTheme from '../../assets/profile-and-search/search-dark-theme.png';

export default function ProfileAndSearch() {
    const {theme} = useContext(AppContext);
    const profileAndSearchThemedStyle = profileAndSearchStyles(theme);
    return (
        <View style = {profileAndSearchThemedStyle.profileAndSearchContainer}>
            <View style = {profileAndSearchThemedStyle.profileImageContainer}>
                <Image source = {profileImage} style = {profileAndSearchThemedStyle.profileImage}/>
            </View>
            <View style = {profileAndSearchThemedStyle.welcomeAndNameContainer}>
                <Text style = {profileAndSearchThemedStyle.welcomeText}>
                    Welcome back,
                </Text>
                <Text style = {profileAndSearchThemedStyle.nameText}>
                    Eric Atsu
                </Text>
            </View>
            <View style = {profileAndSearchThemedStyle.searchIconContainer}>
                <Image source = {theme === 'light' ? searchIcon : searchIconDarkTheme} style = {profileAndSearchThemedStyle.searchIcon}/>
            </View>
        </View>
    );
}