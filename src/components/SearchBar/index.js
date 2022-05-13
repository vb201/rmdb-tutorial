import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

// Search Icon
import seachIcon from "../../images/search-icon.svg";

// Styles
import { Wrapper, Content } from "./SearchBar.styled";
const SeachBar = ({ setSearchTerm }) => {
	const [state, setState] = useState("");
	const initialRender = useRef(true);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500);

		return () => clearTimeout(timer);
	}, [setSearchTerm, state]);

	return (
		<Wrapper>
			<Content>
				<img src={seachIcon} alt="search-icon" />
				<input
					type="text"
					placeholder="Search Movies"
					onChange={(event) => setState(event.currentTarget.value)}
					value={state}
				/>
			</Content>
		</Wrapper>
	);
};

SeachBar.propTypes = {
	setSearchTerm: PropTypes.func,
};
export default SeachBar;
