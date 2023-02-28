import './App.css';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link className="site-logo" to="/">#VANLIFE</Link>
          <Link to="/about">About</Link>
      </nav>
      </header>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
