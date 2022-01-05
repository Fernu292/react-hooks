import React, {useState, useEffect} from 'react';
import './styles/App.css';
import './styles/DarkMode.scss';

//Components
import Header from './Components/Header';
import Characters from './Components/Characters';
import ThemeContextProvider from './Context/ThenContext';

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
        <ThemeContextProvider>
            <Header />
            <hr />
            <Characters characters={characters}/>
        </ThemeContextProvider>
    );
}
 
export default App;