import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { loadHeader } from '../../../services/loadData.js';

import icon from '../../../assets/logo.png';

class Header extends React.Component {
    updateHeader() {
        const result = loadHeader();
        console.log(result)
    }

    componentDidMount() {
        this.updateHeader();
    }

    render() {
        return ( 
            <View style={styles.header}>
                <Image source={icon} style={styles.image}/>
    
                <Text style={styles.welcome}>Olá gato</Text>
                <Text style={styles.subtitle}>Encontre os melhores produtores</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    image: {
        width: 70,
        height: 28
    },
    welcome: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        lineHeight: 26
    }
});

export default Header;