import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home'
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
  // <Router>
    <div className="App">
     <Home/>
     <Login/> 
    </div>
    /* <Routes>
      <Route to='/login' element={<Login/>} />
    </Routes>
    </Router> */
  );
}

export default App;
