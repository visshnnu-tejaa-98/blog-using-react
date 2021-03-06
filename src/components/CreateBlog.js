import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const CreateBlog = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		let blog = { title, author, body };
		fetch(`http://localhost:8000/blogs`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('new item added');
			history.push('/');
		});
	};
	return (
		<div className='create'>
			<form onSubmit={handleSubmit}>
				<label>Title:</label>
				<input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
				<label>Author:</label>
				<input type='text' required value={author} onChange={(e) => setAuthor(e.target.value)} />
				<label>Content:</label>
				<textarea
					rows='10'
					required
					value={body}
					onChange={(e) => setBody(e.target.value)}
				></textarea>
				<button>Add Blog</button>
			</form>
		</div>
	);
};

export default CreateBlog;
