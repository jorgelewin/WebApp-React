import './App.css';
import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import CharacterDetail from './components/characterDetail/characterDetail.component';
import About from './components/about/about.component';
function App() {
  return (
  <div className="page-container">
      <div className="content-wrap">
       <Navbar />
       <Home />
       <CharacterDetail />
      </div>
      <About />
  </div>
  );
}

export default App;
