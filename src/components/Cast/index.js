import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Image } from "./Cast.styles";
import { cast } from "bluebird";

const Cast = ({ name, character, imageUrl }) => {
	return (
		<Wrapper>
			<Image src={imageUrl} alt="actor-thumbnail" />
			<h3>{name}</h3>
			<p>{character}</p>
		</Wrapper>
	);
};

cast.propTypes = {
	name: PropTypes.string,
	character: PropTypes.string,
	imageUrl: PropTypes.string,
};
export default Cast;
