import './App.css';
import PageViewer from './HOC/PageViewer';
import Nav from './components/Nav';

function App() {
	return (
		<div className='App'>
			<Nav />
			<PageViewer />
		</div>
	);
}

export default App;
