import React from "react";

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SeachBar from "./SearchBar";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image
import NoImage from "../images/no_image.jpg";
import LoadMoreButton from "./LoadMoreButton";

const Home = () => {
	const { state, loading, error, searchTerm, setSearchTerm, setLoadingMore } =
		useHomeFetch();
	const res = state.results[0];
	// console.log(state);

	if (error) return <div>Something went Wrong....</div>;
	return (
		<>
			{!searchTerm && state.results[0] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${res.backdrop_path}`}
					title={res.original_title}
					text={res.overview}
				/>
			) : null}
			<SeachBar setSearchTerm={setSearchTerm} />
			<Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
				{state.results.map((movie) => (
					<Thumbnail
						key={movie.id}
						image={
							movie.poster_path
								? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
								: NoImage
						}
						movieId={movie.id}
						clickable={true}
					/>
				))}
			</Grid>
			{loading && <Spinner />}
			{state.page < state.total_pages && !loading && (
				<LoadMoreButton
					text="Load More"
					callback={() => setLoadingMore(true)}
				/>
			)}
		</>
	);
};

export default Home;
