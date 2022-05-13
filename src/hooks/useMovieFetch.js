import { useState, useEffect } from "react";

// API
import API from "../API";
// Helpers
import { checkExistingState } from "../helpers";

export const useMovieFetch = (movieId) => {
	const [state, setState] = useState({});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				setLoading(true);
				setError(false);

				const movie = await API.fetchMovie(movieId);
				const credits = await API.fetchCredits(movieId);

				const directors = credits.crew.filter(
					(member) => member.job === "Director"
				);

				setState({
					...movie,
					cast: credits.cast,
					directors,
				});

				setLoading(false);
			} catch (error) {
				setError(true);
			}
		};

		// Check session storage
		const sessionState = checkExistingState(movieId);
		if (sessionState) {
			// set session storage
			setState(sessionState);
			setLoading(false);
			return;
		}

		// Fetch from API
		fetchMovie();
	}, [movieId]);

	// Write to session

	useEffect(() => {
		sessionStorage.setItem(movieId, JSON.stringify(state));
	}, [movieId, state]);

	return { state, loading, error };
};
