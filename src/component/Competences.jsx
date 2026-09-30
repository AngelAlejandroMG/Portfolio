const langages = ['Python', 'Java', 'C#', 'JavaScript', 'TypeScript'];
const web = ['HTML', 'CSS', 'React'];
const outils = ['Git et GitHub', 'Windows', 'Word', 'Excel'];
const langues = ['Français', 'Espagnol', 'Anglais'];
const qualites = ['Rigueur', 'Esprit d\'équipe', 'Calme sous pression', 'Organisation', 'Ponctualité'];

function Competences() {
  return (
    <section id="competences" className="card">
      <h2>Compétences</h2>
      <div className="grille">
        <div>
          <h3>Langages</h3>
          <ul className="etiquettes">{langages.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
        <div>
          <h3>Web</h3>
          <ul className="etiquettes">{web.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
        <div>
          <h3>Outils</h3>
          <ul className="etiquettes">{outils.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
        <div>
          <h3>Langues</h3>
          <ul className="etiquettes">{langues.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
        <div>
          <h3>Qualités</h3>
          <ul className="etiquettes">{qualites.map(l => <li key={l}>{l}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

export default Competences;
