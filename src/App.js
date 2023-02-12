
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
{/* <Login/> */}
<Signup/>
    </div>
  );
}

export default App;
