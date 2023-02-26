import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/template/Header';
import ScrollToTop from '@/components/template/ScrollToTop';
import Loading from './components/template/Loading';
import Router from './routes/Router';
import ModalBox from './components/template/ModalBox';
import Navbar from './components/template/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Router />
      <Loading />
      <Navbar />
      <ModalBox />
    </BrowserRouter>
  );
}

export default App;
