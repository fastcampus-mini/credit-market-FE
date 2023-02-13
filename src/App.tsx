import { BrowserRouter } from 'react-router-dom';
import Header from '@/components/common/Header';
import Navbar from '@/components/common/Navbar';
import ScrollToTop from '@/components/common/ScrollToTop';
import Loading from './components/common/Loading';
import { useSelector } from 'react-redux';
import { Store } from './interfaces/store';
import styled from '@emotion/styled';
import Router from './routes/Router';

function App() {
  const loading = useSelector((state: Store) => state.loading);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Router />
        {loading && <Loading />}
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
