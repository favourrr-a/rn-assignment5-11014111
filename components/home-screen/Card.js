import { View, Image } from 'react-native';

import card from '../../assets/card.png';
import { cardStyles } from '../../styles/home-screen-styles/cardStyles';

export default function Card(){
    return(
        <View style = {cardStyles.cardContainer}>
            <Image source = {card} style = {cardStyles.card}/>
        </View>
    );
}