import React, { useState } from 'react';
import { 
    View,
    StyleSheet
} from 'react-native'

import Star from './Star.js';

export default function Stars({
    amount: oldAmount,
    edit = false,
    bigSize = true,
}) {
    const [ amount, setAmount ] = useState(oldAmount);
    const RenderStars = () => {
        const listStars = [];
        for( let i = 0; i < 5; i++ ) {
            listStars.push(
                <Star 
                    key={i}
                    onPress={ () => setAmount(i + 1) }
                    disabled={ !edit }
                    filled={ i < amount }
                    bigSize={bigSize}
                />
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

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    }
})