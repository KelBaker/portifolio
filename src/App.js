import logo from './logo.svg';
import './App.css';
import Navbar from './Componentes/section/Navbar';
import Presentation from './Componentes/section/Presentation';
import Skills from './Componentes/section/Skills';
import Projects from './Componentes/section/Projects';
import Footer from './Componentes/section/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
