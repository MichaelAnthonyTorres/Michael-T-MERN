import React, {useState, useEffect} from 'react'; 
import axios from 'axios'; 
import './App.css';
import { throwStatement } from '@babel/types';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=898')
    .then((name) =>{
      setPokemon(name.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
    { pokemon.map((pokemonName, i) => (
      <ul>
        <li key="i">
          {pokemonName.name}
        </li>
      </ul>
    ))}
    </div>
  );
}

export default App;
