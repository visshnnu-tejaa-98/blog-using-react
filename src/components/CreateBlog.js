import { useState } from 'react';
const CreateBlog = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ title, author, body });
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
