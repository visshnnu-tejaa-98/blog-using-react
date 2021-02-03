import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, isLoading, error } = useFetch(`http://localhost:8000/blogs/${id}`);
	return (
		<div className='blog-details'>
			{error && <h1>sorry, unable to fetch data</h1>}
			{isLoading && <h1>Loading...</h1>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<small>{blog.author}</small>
					<p>{blog.body}</p>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
