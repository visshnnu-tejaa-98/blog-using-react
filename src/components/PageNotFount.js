import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<div className='page-not-found'>
			<h2>Sorry</h2>
			<p>This page can not be found!</p>
			<Link to='/'>Back to Home Page</Link>
		</div>
	);
};

export default PageNotFound;
