import React from 'react';
import Character from './Character';
import '../styles/characters.scss';

const Characters = ({characters}) => {
    console.log(characters);
    return ( 
        <section className='personajes'>
            {
                characters ? 
                    characters.map( character =>(
                        <Character key ={character.id}character={character}/>
                    ))
                : <p>Loading ...</p>
            }
        </section>
    );
}
 
export default Characters;