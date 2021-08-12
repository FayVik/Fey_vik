import './App.css';
import PageViewer from './HOC/PageViewer';
import Nav from './components/Nav';
import Footer from './components/Footer';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
	return (
		<div className='App'>
			<Nav />
			<PageViewer />
			<Footer />
		</div>
	);
}

export default App;
