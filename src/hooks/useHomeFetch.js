import { useState, useEffect } from "react";

// Api
import API from "../API";

// Helpers
import { checkExistingState } from "../helpers";

const initialState = {
	page: 0,
	results: [],
	total_pages: 0,
	total_result: 0,
};
export const useHomeFetch = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [state, setState] = useState(initialState);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [LoadingMore, setLoadingMore] = useState(false);

	const fetchMovies = async (page, searchTerm = "") => {
		try {
			setError(false);
			setLoading(true);

			const movies = await API.fetchMovies(searchTerm, page);
			setState((prev) => ({
				...movies,
				results:
					page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
			}));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	// Initial Render and Search
	useEffect(() => {
		// Check sessionStorage
		if (!searchTerm) {
			// console.log("Grabbing from session storage");
			const sessionState = checkExistingState("homeState");

			if (sessionState) {
				setState(sessionState);
				return;
			}
		}
		// Set initial state and then fetch from API
		setState(initialState);
		fetchMovies(1, searchTerm);
	}, [searchTerm]);

	// Load More
	useEffect(() => {
		if (!LoadingMore) return;

		fetchMovies(state.page + 1, searchTerm);
		setLoadingMore(false);
	}, [LoadingMore, searchTerm, state.page]);

	// Write to sessionStorage
	useEffect(() => {
		if (!searchTerm) {
			sessionStorage.setItem("homeState", JSON.stringify(state));
		}
	});

	return {
		state,
		loading,
		error,
		searchTerm,
		setSearchTerm,
		setLoadingMore,
	};
};
