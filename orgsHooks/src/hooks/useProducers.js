import { useState, useEffect } from 'react';

import { loadProducers } from '../services/loadData.js';

export default function useProducers() {
    const [title, setTitle] = useState(''); //sempre declarado no começo da função
    const [list, setList] = useState([]);

    useEffect(() => {
        const result = loadProducers();
        setTitle(result.titulo);
        setList(result.lista);
    }, []); //quanto tem um array vazio o componente vai executar uma vez só quando o component for carregado


    return (
        [title, list]
    )
}