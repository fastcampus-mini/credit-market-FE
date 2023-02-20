import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/template/Header';
import Navbar from '@/components/template/Navbar';
import ScrollToTop from '@/components/template/ScrollToTop';
import Loading from './components/template/Loading';
import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Router />
      <Loading />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
