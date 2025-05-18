import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import WebApp from '@twa-dev/sdk';

import './App.css';
import { useEffect } from 'react';

import Layout from './components/Layout';
import MainMap from './pages/MainMap';
import SettingsMap from './pages/SettingsMap';
import Menu from './pages/Menu';
import Achievments from './pages/Achievments';
import Rating from './pages/rating';
import Statistics from './pages/statistics';
import NewNote from './pages/NewNote';

function App() {
  
  useEffect(() => {
    WebApp.ready(); // Инициализация Telegram Web App
    WebApp.expand(); // На весь экран
  }, []);

  return (
    <div className="tg-app">
      <UserProvider>
      <Router>
        <Layout />

        {/* Основное содержимое с маршрутами */}
        <div className="tg-main-content">
          
            <Routes>
              <Route path="/" element={<MainMap />} />
              <Route path="/settingsmap" element={<SettingsMap />} />
              <Route path="/menu" element={<Menu />} />
                <Route path="/newnote" element={<NewNote />} />
                <Route path="/rating" element={<Rating />} />
                  <Route path="/statistics" element={<Statistics />} />
                <Route path="/achieves" element={<Achievments />} />
                
            </Routes>
          
        </div>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;