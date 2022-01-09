import React, { useState, useEffect } from 'react';

const useCharacters = (url)=>{
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        const RequestAPI = async ()=>{
            const response = await fetch(url);
            const result = await response.json();
            setCharacters(result.results);
        }
        RequestAPI();
    },[]);

    return characters;
};

export default useCharacters;