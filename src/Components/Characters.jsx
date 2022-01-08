import React, {
  useReducer,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import Character from "./Character";
import Search from "./Search";
import "../styles/characters.scss";

//Creano state inicial
const initialState = {
  favorites: [],
};

//Creando la logica del reducer con un switch
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = ({ characters }) => {
  //uso de reducer: funcion, state
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleClick = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  //Sin useCallback
  // const handleSearch = () =>{
  //     setSearch(searchInput.current.value);
  // }

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  //Forma de filtro sin useMemo
  // const filteredUsers = characters.filter(user =>{
  //      return user.name.toLowerCase().includes(search.toLowerCase());
  //  });

  //Funcion usada con useMemo para evitar reRenders
  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <div className="favorites">
        <h3>Favorites characters: </h3>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </div>

      <section className="personajes">
        {filteredUsers ? (
          filteredUsers.map((character) => (
            <Character
              key={character.id}
              character={character}
              handleClick={handleClick}
            />
          ))
        ) : (
          <p>Loading ...</p>
        )}
      </section>
    </>
  );
};

export default Characters;
