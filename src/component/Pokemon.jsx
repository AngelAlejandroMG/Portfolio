import React, { useState } from 'react';

function Pokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [recherche, setRecherche] = useState('');

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => {
        const liste = data.results.map((p, index) => ({ nom: p.name, id: index + 1 }));
        setPokemons(liste);
      });
  }, []);

 
  const pokemonsFiltres = pokemons.filter(p => p.nom.includes(recherche.toLowerCase()));

  return (
    <section id="pokemon" className="card">
      <h2>Pokédex</h2>
      <p>Petit projet d'API : les 151 premiers Pokémon, avec un filtre par nom.</p>

      <input
        className="recherche"
        type="text"
        placeholder="Chercher un Pokémon (ex. pikachu)"
        value={recherche}
        onChange={e => setRecherche(e.target.value)}
      />

      {pokemons.length === 0 && <p>Chargement...</p>}

      <ul className="liste-pokemons">
        {pokemonsFiltres.map(p => (
          <li key={p.id}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.nom}
              width="96"
              height="96"
            />
            <span>{p.nom}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Pokemon;
