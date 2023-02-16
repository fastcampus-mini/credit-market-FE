import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import ScrollToTop from '@/components/common/ScrollToTop';
import Loading from './components/common/Loading';
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
