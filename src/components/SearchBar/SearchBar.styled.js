import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100px;
	background: var(--darkGrey);
	padding: 0 20px;

	@media (max-width: 768px) {
		height: 80px;
	}

	@media (max-width: 576px) {
		height: 65px;
	}
`;

export const Content = styled.div`
	position: relative;
	max-width: var(--maxWidth);
	width: 100%;
	height: 55px;
	background: var(--medGrey);
	margin: 0 auto;
	border-radius: 40px;
	color: var(--white);

	@media (max-width: 768px) {
		height: 50px;
	}

	@media (max-width: 576px) {
		height: 44px;
	}

	img {
		position: absolute;
		left: 15px;
		top: 14px;
		width: 30px;
		@media (max-width: 768px) {
			left: 14px;
			top: 13px;
			width: 24px;
		}
		@media (max-width: 576px) {
			left: 12px;
			top: 11px;
			width: 21px;
		}
	}

	input {
		font-size: var(--fontL);
		position: absolute;
		left: 0;
		margin: 8px 0;
		padding: 0 0 0 60px;
		border: 0;
		width: 95%;
		background: transparent;
		height: 40px;
		color: var(--white);

		@media (max-width: 768px) {
			font-size: var(--fontM);

			height: 32px;
		}

		@media (max-width: 576px) {
			font-size: var(--fontS);
			height: 26px;
		}

		:focus {
			outline: none;
		}
	}
`;
