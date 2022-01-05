import React, {useReducer} from 'react';
import Character from './Character';
import '../styles/characters.scss';

//Creano state inicial
const initialState = {
    favorites : [],
};

//Creando la logica del reducer con un switch
const favoriteReducer = (state, action)=>{
    switch(action.type){
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        default: 
            return state;
    }
}

const Characters = ({characters}) => {

    //uso de reducer: funcion, state
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const handleClick = (favorite)=>{
        dispatch({type: "ADD_TO_FAVORITE", payload: favorite});
    }

    return ( 
        <>
            <div className='favorites'>
                <h3>Favorites characters: </h3>
                {favorites.favorites.map(favorite =>(
                    <li key={favorite.id}>{favorite.name}</li>
                ))}
            </div>
                    
            <section className='personajes'>
            
                {
                    characters ? 
                        characters.map( character =>(
                            <Character 
                                key ={character.id}
                                character={character}
                                handleClick = {handleClick}
                            />
                        ))
                    : <p>Loading ...</p>
                }
            </section>
        </>
       
    );
}
 
export default Characters;