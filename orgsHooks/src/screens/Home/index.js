import React from 'react';
import Header from './components/Header.js';
import Producers from './components/Producers.js';

export default function Home() {
    return <Producers header={Header}/>
}