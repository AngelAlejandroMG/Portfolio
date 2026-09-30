
const projets = [
  { nom: 'Portfolio React', texte: 'Ce site, fait avec des composants React.', lien: 'https://github.com/AngelAlejandroMG/Portfolio.git' },
  { nom: 'Pokédex', texte: 'Liste de Pokémon avec filtre, grâce à PokéAPI.', lien: '#pokemon' },
  { nom: 'BE-AdoptMyPokemon', texte: 'Application web pour adopter des pokemons BE (Travail en equipe)', lien: 'https://github.com/Milleboy2007/Adopt_My_Pokemon' },
  { nom: 'FE-AdoptMyPokemon', texte: 'Application web pour adopter des pokemons FE (Travail en equipe)', lien: 'https://github.com/Milleboy2007/Adopt_My_Pokemon_FrontEnd'},
  { nom: 'CineTrack', texte: 'Application de streaming de anime (Travail en equipe)', lien: 'https://github.com/WilliamGirouard/CineTrack'}
];

function Projets() {
  return (
    <section id="projets" className="card">
      <h2>Projets</h2>
      <div className="grille">
        {projets.map(p => (
          <a key={p.nom} className="projet" href={p.lien}>
            <h3>{p.nom}</h3>
            <p>{p.texte}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projets;
