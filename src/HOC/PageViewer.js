import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Markdown from '../pages/Markdown';
import Auth from '../pages/Auth';
import ShowAllDoc from '../pages/ShowAllDoc';

const PageViewer = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<Home isAuthed={true} />
				</Route>
				<Route exact path='/About'>
					<About isAuthed={true} />
				</Route>
				<Route exact path='/Blog'>
					<Blog isAuthed={true} />
				</Route>
				<Route exact path='/Contact'>
					<Contact isAuthed={true} />
				</Route>
				<Route exact path='/Auth'>
					<Auth isAuthed={true} />
				</Route>
				<Route exact path='/Markdown'>
					<Markdown isAuthed={true} />
				</Route>
				<Route exact path='/ShowAllDoc'>
					<ShowAllDoc isAuthed={true} />
				</Route>
			</Switch>
		</div>
	);
};

export default PageViewer;
