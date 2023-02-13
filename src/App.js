
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/admin" element={<Admin/>} />
    </Routes> 
    </div>
  );
}

export default App;
