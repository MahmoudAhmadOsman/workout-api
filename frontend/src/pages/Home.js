import { useState } from "react";

import "./HomeStyle.css";
import Loading from "../utils/Loading";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const images = [
		"https://source.unsplash.com/1500x1000/?dumbell",
		"https://source.unsplash.com/1500x1000/?incline",
		"https://source.unsplash.com/1500x1000/?barbells",
		"https://source.unsplash.com/1500x1000/?ellipticals",
	];

	return (
		<section className="home-page">
			{loading ? (
				<div className="loading">
					<Loading />
					{setLoading(false)}
				</div>
			) : error ? (
				<div className="alert alert-danger text-center">
					<h5>{setError(error.message)}</h5>
				</div>
			) : (
				<>
					<div className="money-carousel-container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-12">
									{/* Start of Carousel */}

									<div
										id="carouselExampleIndicators"
										className="carousel slide"
										data-bs-ride="carousel"
									>
										<div className="carousel-indicators">
											{images.map((image, index) => (
												<button
													key={index}
													type="button"
													data-bs-target="#carouselExampleIndicators"
													data-bs-slide-to={index}
													className={index === 0 ? "active" : ""}
													aria-current={index === 0 ? "true" : "false"}
													aria-label={`Slide ${index + 1}`}
												></button>
											))}
										</div>
										<div className="carousel-inner">
											{images.map((image, index) => (
												<div
													key={index}
													className={`carousel-item ${
														index === 0 ? "active" : ""
													}`}
												>
													<img
														src={image}
														className="d-block w-100"
														alt={`Slide ${index + 1}`}
													/>
												</div>
											))}
										</div>
										<button
											className="carousel-control-prev"
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide="prev"
										>
											<span
												className="carousel-control-prev-icon"
												aria-hidden="true"
											></span>
											<span className="visually-hidden">Previous</span>
										</button>
										<button
											className="carousel-control-next"
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide="next"
										>
											<span
												className="carousel-control-next-icon"
												aria-hidden="true"
											></span>
											<span className="visually-hidden">Next</span>
										</button>
									</div>
									{/* End of Carousel */}
								</div>
							</div>
						</div>
					</div>
					<hr />
				</>
			)}
			{/* Start of money cards */}
			<div className="container mt-4">
				<h1 className="m-3 p-4 text-uppercase">
					{" "}
					Dumbell, Treadmill, Barbells & Ellipticals
				</h1>
				<div className="row">
					{/* Card 1 */}
					<div className="col-md-3 mb-4">
						<div className="card">
							<img
								src={images[3]}
								alt="Currency Conversion Made Easy"
								className="card-img-top"
							/>
							<div className="card-body">
								<h4 className="card-title">Dumbell</h4>
								<p className="card-text">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Sapiente quo tempore quisquam. Error, at minima.
								</p>
							</div>
						</div>
					</div>
					{/* Card 2 */}
					<div className="col-md-3 mb-4">
						<div className="card">
							<img
								src={images[1]}
								alt="Foreign Exchange for International Commerce"
								className="card-img-top"
							/>

							<div className="card-body">
								<h4 className="card-title">Treadmill</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Repudiandae qui est autem obcaecati praesentium explicabo.
								</p>
							</div>
						</div>
					</div>
					{/* Card 3 */}
					<div className="col-md-3 mb-4">
						<div className="card">
							<img
								src={images[2]}
								alt="Travel Smart: Get More Bang for Your Buck"
								className="card-img-top"
							/>

							<div className="card-body">
								<h4 className="card-title">Barbells</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Delectus magni impedit labore soluta quasi placeat.
								</p>
							</div>
						</div>
					</div>
					{/* Card 4 */}
					<div className="col-md-3 mb-4">
						<div className="card">
							<img
								src={images[0]}
								alt="Investing in the Digital Age"
								className="card-img-top"
							/>

							<div className="card-body">
								<h4 className="card-title">Ellipticals</h4>
								<p className="card-text">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Placeat debitis vitae optio, sapiente nemo temporibus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			r{/* End of money cards */}
		</section>
	);
};

export default Home;
