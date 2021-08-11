import './App.css';
import PageViewer from './HOC/PageViewer';
import Nav from './components/Nav';
import Footer from './components/Footer';

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
