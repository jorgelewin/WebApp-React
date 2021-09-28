import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import CharacterDetail from './components/characterDetail/characterDetail.component';
import About from './components/about/about.component';
function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <CharacterDetail />
     <About />
    </div>
  );
}

export default App;
