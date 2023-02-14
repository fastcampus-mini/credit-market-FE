import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import ScrollToTop from '@/components/common/ScrollToTop';
import Loading from './components/common/Loading';
import { useSelector } from 'react-redux';
import { IStore } from './interfaces/store';
import Router from './routes/Router';

function App() {
  const loading = useSelector((state: IStore) => state.loading);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Router />
      {loading && <Loading />}
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
