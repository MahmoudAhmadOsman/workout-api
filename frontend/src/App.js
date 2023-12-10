import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./utils/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
	const { user } = useAuthContext(); // get logged user

	return (
		<div className="home-paage">
			<BrowserRouter>
				<Navigation />
				<div className="pages">
					<Routes>
						{" "}
						<Route
							path="/"
							element={user ? <Home /> : <Navigate to="/login" />}
						/>
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/" />}
						/>
						<Route
							path="/signup"
							element={!user ? <Signup /> : <Navigate to="/" />}
						/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
