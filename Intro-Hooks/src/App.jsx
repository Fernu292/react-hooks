import React from 'react';
import './styles/App.css';
import './styles/DarkMode.scss';

//Components
import Header from './Components/Header';
import Characters from './Components/Characters';
import ThemeContextProvider from './Context/ThenContext';

//Hooks
import useCharacters from './hooks/useCharacters';

const App = () => {

    const API = `https://rickandmortyapi.com/api/character/?page=1`;
    const characters = useCharacters(API);

    return ( 
        <ThemeContextProvider>
            <Header />
            <hr />
            <Characters characters={characters}/>
        </ThemeContextProvider>
    );
}
 
export default App;