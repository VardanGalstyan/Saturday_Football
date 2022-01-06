import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import TopNavbar from './components/Navbar/TopNavbar';
import Login from './components/onboarding/Login';
import Register from './components/onboarding/Register';

function App() {

  const token = localStorage.getItem('footballAccessToken');

  return (
    <div className="football-app">
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Navigate to={!token ? '/register' : '/home'} />} />
        <Route path="register" element={<Register />} /> :
        <Route path="login" element={<Login />} /> :
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
