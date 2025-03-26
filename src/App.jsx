import React from 'react';
import './App.css';
import Navbar from './routes/Navbar';
import AppRouter from './routes/AppRouter';

function App() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<AppRouter />
		</>
	);
}

export default App;
