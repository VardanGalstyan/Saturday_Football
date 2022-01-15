import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './components/Home/Home';
import TopNavbar from './components/Navbar/TopNavbar';
import Login from './components/onboarding/Login';
import Register from './components/onboarding/Register';
import History from './components/History/History';
import { fillHistoryData, fillLocationsData, fillPlayersDataAction, fillSessionData, fillUserData } from './Redux/Actions/actions';


function App() {

  const token = localStorage.getItem('footballAccessToken');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fillSessionData())
    dispatch(fillUserData(token))
    dispatch(fillPlayersDataAction())
    dispatch(fillLocationsData())
    dispatch(fillHistoryData())
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
        <Route path="history" element={<History />} />
      </Routes>
    </div>
  );
}

export default App;
