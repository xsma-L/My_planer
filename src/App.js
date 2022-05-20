import { Routes, Route, Link } from 'react-router-dom';

import Home from './Compoments/Home';
import Register from './Compoments/Register';
import Connexion from './Compoments/Connexion';

import './App.css';

function App() {
  return (
    <div>
       <nav>
        <ul className='nav-links'>
          <li>
            <Link to="/" className='logo'>Todo-List</Link>
          </li>
          <ul>
            {/* <li>
              <Link to="/register">Inscription</Link>
            </li> */}
            <li>
              <Link to="/connect">Connexion</Link>
            </li>
          </ul>
        </ul>
      </nav>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/connect" element={<Connexion />} />
          <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App; 