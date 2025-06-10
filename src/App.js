import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './common.css';

import HeaderPage from './common/header';
import FooterPage from './common/footer';
import MainPage from './main';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPage />
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
        <FooterPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
