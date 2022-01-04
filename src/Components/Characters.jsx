import React from 'react';

const Characters = ({characters}) => {
    console.log(characters);
    return ( 
        <section>
            {
                characters ? 
                    characters.map( character =>(
                        <h3 key={character.id}>{character.name}</h3>
                    ))
                : <p>Loading ...</p>
            }
        </section>
    );
}
 
export default Characters;