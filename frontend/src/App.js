import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./utils/NotFound";
import { useAuthContext } from "./hooks/useAuthContext";
import WorkoutList from "./components/WorkoutList";
import FooterComponent from "./footer/FooterComponent";

function App() {
	const { user } = useAuthContext(); // get logged user

	return (
		<div className="home-paage">
			<BrowserRouter>
				<Navigation />
				<div className="pages">
					<Routes>
						<Route
							path="/workouts"
							element={user ? <WorkoutList /> : <Navigate to="/" />}
						/>
						<Route
							path="/login"
							element={!user ? <Login /> : <Navigate to="/workouts" />}
						/>
						<Route
							path="/signup"
							element={!user ? <Signup /> : <Navigate to="/" />}
						/>
						<Route
							path="/"
							exact
							element={!user ? <Home /> : <Navigate to="/" />}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
					<FooterComponent />
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
