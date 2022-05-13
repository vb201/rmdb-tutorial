import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./LoadMoreButton.styles";
const LoadMoreButton = ({ text, callback }) => {
	return (
		<Wrapper type="button" onClick={callback}>
			{text}
		</Wrapper>
	);
};

LoadMoreButton.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func,
};
export default LoadMoreButton;
