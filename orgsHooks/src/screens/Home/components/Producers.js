import React, { useEffect, useState } from 'react';
import { 
    Text, 
    FlatList,
    Image, 
    StyleSheet 
} from 'react-native';

import Producer from './Producer/Producer.js';
import useProducers from '../../../hooks/useProducers.js';

export default function Producers({ header: Header }) {
    const [title, list] = useProducers();

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