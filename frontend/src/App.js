import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";

function App() {
	return (
		<div className="home-paage">
			<BrowserRouter>
				<Navigation />
				<div className="pages">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
