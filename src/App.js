import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import './common.css';
import AOS from 'aos';
import "aos/dist/aos.css"

import HeaderPage from './common/header';
import FooterPage from './common/footer';
import MainPage from './main';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPage />
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <FooterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
