import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({}); //pokemon
  const [pokemonAtual, setPokemonAtual] = useState(1); //contador

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonAtual}`
      );
      const data = await response.json();
      setPokemon(data);
      console.log(data);
    };
    fetchUserData();
  }, [pokemonAtual]);

  const handleNextPokemon = () => {
    setPokemonAtual(pokemonAtual + 1);
  };

  const handlePreviousPokemon = () => {
    if (pokemonAtual > 1) {
      setPokemonAtual(pokemonAtual - 1);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Pokemons</h1>
      <div className="pokemon-container">
        <button
          onClick={handlePreviousPokemon}
          disabled={pokemonAtual === 1}
          className="buttonsNextPrevious"
        >
          ←
        </button>
        <div className="pokemon-info">
          {pokemon.name ? (
            <>
              <img src={pokemon.sprites.front_default} />
            </>
          ) : (
            console.log("DEU RUIMMMMMMMMMM")
          )}
          <span className="nome-pokemon">{pokemon.name}</span>
        </div>
        {pokemon.name && (
          <button onClick={handleNextPokemon} className="buttonsNextPrevious">
            ➝
          </button>
        )}
      </div>
      <img
        className="ash"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdDbgnyf1eY5tKVOSR5JRG2ZHUv7i-DiUvulDJOC_&s"
        alt=""
      />
      <img
        className="ash2"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdDbgnyf1eY5tKVOSR5JRG2ZHUv7i-DiUvulDJOC_&s"
        alt=""
      />
    </div>
  );
}

export default App;
