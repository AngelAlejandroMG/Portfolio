// Ajoute tes projets de cours ici
const projets = [
  { nom: 'Portfolio React', texte: 'Ce site, fait avec des composants React.', lien: 'https://github.com/AngelAlejandroMG' },
  { nom: 'Pokédex', texte: 'Liste de Pokémon avec filtre, grâce à PokéAPI.', lien: '#pokemon' },
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
