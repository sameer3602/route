import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}
export default App;
