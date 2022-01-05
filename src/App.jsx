import React, {useState, useEffect} from 'react';
import './styles/App.css';

//Components
import Header from './Components/Header';
import Characters from './Components/Characters';

const App = () => {

    const API = `https://rickandmortyapi.com/api/character/?page=1`;
    const [characters, setCharacters] = useState([]);

    useEffect(()=>{
        const RequestAPI = async ()=>{
            const response = await fetch(API);
            const result = await response.json();
            setCharacters(result.results);
        }

        RequestAPI();
    },[]);


    return ( 
        <>
            <Header />
            <hr />
            <Characters characters={characters}/>
        </>
    );
}
 
export default App;