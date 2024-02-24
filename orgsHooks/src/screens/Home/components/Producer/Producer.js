import React, { useReducer } from 'react';
import { 
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'

import { styles } from './styles_producer.js';
import Stars from '../../../../components/stars.js';

export default function Producer({ nome, imagem, distancia, estrelas }) {
    const [ selected, invertSelect ] = useReducer(
        (selected) => !selected,
        false
    );

    return (
        <TouchableOpacity 
            style={ styles.card }
            onPress={invertSelect}
        >
            <Image source={ imagem } acessibilityLabes={ nome } style={ styles.image }/>

            <View style={ styles.infos }>
                <View>
                    <Text style={ styles.name }>{ nome }</Text>
                    
                    <Stars 
                        amount={ estrelas }
                        edit={ selected }
                        bigSize={ selected }
                    />
                </View>
                <Text style={ styles.distance }>{ distancia }</Text>
            </View>

        </TouchableOpacity>
    )
}