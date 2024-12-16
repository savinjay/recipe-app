import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Card from './components/Card';
import Recipe from './components/Recipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route exact path="/recipe/:i" element={<Recipe/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
