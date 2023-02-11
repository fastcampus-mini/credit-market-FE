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
		<Layout>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<Router />
				{loading && <Loading />}
				<Navbar />
			</BrowserRouter>
		</Layout>
	);
}

export default App;

const Layout = styled.div`
	border: 1px solid black;
	width: 480px;
	height: 100vh;
	margin: 0 auto;
`;
