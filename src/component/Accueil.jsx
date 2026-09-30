function Accueil() {
  return (
    <section id="accueil" className="card">
      <h1>Angel Alejandro Montes Galvez</h1>
      <p className="sous-titre">Étudiant en Techniques de l'informatique</p>
      <p>
        Étudiant au Collège Marie-Victorin à Montréal. J'apprends vite, je suis
        rigoureux et fiable, et j'aime construire des applications web avec React.
      </p>
      <p className="accroche">À la recherche d'un stage en développement.</p>
      <div className="boutons">
        <a className="bouton" href="/CV_Angel_Montes.pdf" download>Télécharger mon CV</a>
        <a className="bouton bouton-vide" href="#contact">Me contacter</a>
      </div>
    </section>
  );
}

export default Accueil;
