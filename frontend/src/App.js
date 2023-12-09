import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {
	return (
		<div className="home-paage">
			<BrowserRouter>
				<Navigation />
				<div className="pages">
					<Routes>
						<Route path="/signup" element={<Signup />} />
						<Route path="/login" element={<Login />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
