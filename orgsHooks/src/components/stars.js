import React, { useState } from 'react';
import { 
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import grayStar from '../assets/estrelaCinza.png';
import star from '../assets/estrela.png';

export default function Stars({
    amount: oldAmount,
    edit = false,
    bigSize = true,
}) {
    const [ amount, setAmount ] = useState(oldAmount);
    const styles = stylesFunction(bigSize);

    const getImage = (index) => {
        if (index < amount) {
            return star;
        }
        return grayStar;
    }

    const RenderStars = () => {
        const listStars = [];
        for( let i = 0; i < 5; i++ ) {
            listStars.push(
                <TouchableOpacity 
                    key={i}
                    onPress={() => {setAmount(i + 1)}}
                    disabled={!edit}
                >
                    <Image source={getImage(i)} style={ styles.star }/>
                </TouchableOpacity>
            );
        }

        return listStars;
    }

    return (
        <View style={ styles.stars }>
            <RenderStars />
        </View>
    )
}

const stylesFunction = (bigSize) => StyleSheet.create({
    star: {
        width: bigSize ? 36 : 12,
        height: bigSize ? 36 : 12,
        marginRight: 2
    },
    stars: {
        flexDirection: 'row'
    }
})