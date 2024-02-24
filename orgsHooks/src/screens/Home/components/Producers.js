import React, { useEffect, useState } from 'react';
import { 
    Text, 
    FlatList,
    Image, 
    StyleSheet 
} from 'react-native';

import { loadProducers } from '../../../services/loadData.js';
import Producer from './Producer/Producer.js';

export default function Producers({ header: Header }) {
    const [title, setTitle] = useState(''); //sempre declarado no começo da função
    const [list, setList] = useState([]);

    useEffect(() => {
        const result = loadProducers();
        setTitle(result.titulo);
        setList(result.lista);
    }, []); //quanto tem um array vazio o componente vai executar uma vez só quando o component for carregado

    const topList = () => {
        return <>
            <Header />
            <Text style={styles.title}>{ title }</Text>
        </>
    }

    return (
        <FlatList 
            data={list}
            renderItem={({ item }) => <Producer {...item}/>}
            keyExtractor={({nome}) => nome}
            ListHeaderComponent={() => topList()}
        />
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})