import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const history = useHistory();
	const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
	const handleDelete = () => {
		fetch(`http://localhost:8000/blogs/${blog.id}`, {
			method: 'DELETE',
		}).then(() => history.push('/'));
	};
	return (
		<div className='blog-details'>
			{error && <h1>sorry, unable to fetch data</h1>}
			{isLoading && <h1>Loading...</h1>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<small>{blog.author}</small>
					<p>{blog.body}</p>
					<button onClick={handleDelete}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
