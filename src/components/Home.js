const Home = () => {
	const clickHandler = () => {
		console.log('Hello React');
	};
	return (
		<div className='home'>
			<h1>Home Page</h1>
			<button onClick={clickHandler}>Click Me</button>
		</div>
	);
};

export default Home;
