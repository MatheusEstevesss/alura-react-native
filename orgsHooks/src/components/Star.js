import React from 'react'

import { 
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import grayStar from '../assets/estrelaCinza.png';
import star from '../assets/estrela.png';

export default function Start({
    onPress,
    disabled = true,
    filled,
    bigSize = false
}) {
    const styles = stylesFunction(bigSize);

    const getImage = () => {
        if (filled) {
            return star;
        }
        return grayStar;
    }

    return (
        <TouchableOpacity 
            onPress={ () => onPress() }
            disabled={ disabled }
        >
            <Image source={getImage()} style={ styles.star }/>
        </TouchableOpacity>
    )
}

const stylesFunction = (bigSize) => StyleSheet.create({
    star: {
        width: bigSize ? 36 : 12,
        height: bigSize ? 36 : 12,
        marginRight: 2
    }
})