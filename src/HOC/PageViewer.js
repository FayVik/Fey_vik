import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const PageViewer = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/'>
					<Home isAuthed={true} />
				</Route>
			</Switch>
		</div>
	);
};

export default PageViewer;
