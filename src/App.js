import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/CreateBlog';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './components/BlogDetails';
import PageNotFound from './components/PageNotFount';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/create'>
							<CreateBlog />
						</Route>
						<Route exact path='/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route path='*'>
							<PageNotFound />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
