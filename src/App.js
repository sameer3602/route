import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { NavLink } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li >
            <NavLink to="/" className='list'>Home</NavLink>
          </li>
          <li>
            <NavLink to="/login" className='list'>Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup" className='list'>Signup</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" className='list'>Dashboard</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="*" element={<div>Not Found Page</div>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
