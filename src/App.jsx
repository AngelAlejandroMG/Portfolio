import Header from './component/Header';
import Accueil from './component/Accueil';
import Parcours from './component/Parcours';
import Competences from './component/Competences';
import Projets from './component/Projets';
import Pokemon from './component/Pokemon';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <Header />
      <div className="contenu">
        <Accueil />
        <Parcours />
        <Competences />
        <Projets />
        <Pokemon />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
