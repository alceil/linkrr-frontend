
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import { useAdmin } from './contexts/adminContext';
import { useView } from './contexts/viewContext';
import Profile from './pages/Profile/Profile';

function App() {
  const {pagePreview } = useView();
  return (
    <div className="App">
      {
        !pagePreview?
      <Navbar/>
:null
      }
      <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/register" element={<Signup/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/admin" element={<Admin/>} />
    </Routes> 
    </div>
  );
}

export default App;
