import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { loadHeader } from '../../../services/loadData.js';

import icon from '../../../assets/logo.png';

class Header extends React.Component {
    state = {
        header: {
            welcome: '',
            subtitle: ''
        }
    }

    updateHeader() {
        const result = loadHeader();
        this.setState({ header: result })
    }

    componentDidMount() {
        this.updateHeader();
    }

    render() {
        return (
            <View style={styles.header}>
                <Image source={icon} style={styles.image}/>
    
                <Text style={styles.welcome}>{this.state.header.welcome}</Text>
                <Text style={styles.subtitle}>{this.state.header.subtitle}</Text>
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