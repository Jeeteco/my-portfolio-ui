import React from 'react';
import logo from './logo.svg';

import AppRoutes from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';

import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import PageLayouts from './component/layouts/PageLayouts';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
      
      
      

    </div>
  );
}

export default App;
