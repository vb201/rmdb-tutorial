import styled from "styled-components";

export const Wrapper = styled.div`
	background: var(--darkGrey);
	display: flex;
	padding: 0px 40px;
	justify-content: center;
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	max-width: var(--maxWidth);
	padding: 15px 0px;
	margin: 0px 10px;
`;

export const LogoImage = styled.img`
	width: 200px;

	@media (max-width: 500px) {
		width: 150px;
	} ;
`;

export const TMDBLogoImg = styled.img`
	width: 100px;

	@media (max-width: 500px) {
		width: 80px;
	}
`;
