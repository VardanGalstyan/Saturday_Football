import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import { useDispatch } from 'react-redux';
import TopNavbar from './components/Navbar/TopNavbar';
import Login from './components/onboarding/Login';
import Register from './components/onboarding/Register';
import { fillPlayersDataAction, fillSessionData, fillUserData } from './Redux/Actions/actions';


function App() {

  const token = localStorage.getItem('footballAccessToken');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillSessionData())
    dispatch(fillUserData(token))
    dispatch(fillPlayersDataAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])


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
