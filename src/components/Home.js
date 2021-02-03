import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		fetch(`http://localhost:8000/blogs`)
			.then((res) => {
				if (!res.ok) {
					throw Error('Unable to fetch the data from server:(');
				}
				return res.json();
			})
			.then((data) => {
				setBlogs(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);
	return (
		<div className='home'>
			{error && <h2>{error}</h2>}
			{loading && <h2>Loading...</h2>}
			{blogs && <BlogList blogs={blogs} title='All Blogs' />}
		</div>
	);
};

export default Home;
