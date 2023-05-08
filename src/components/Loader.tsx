import styled, { keyframes } from 'styled-components';

export const Loader = () => {
	return (
		<StyledCenter>
			<StyledLoader />
		</StyledCenter>
	);
};

const StyledCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #282c33;
	padding: 0;
	height: 100vh;
	width: 100vw;
`;
const StyledAnimate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.span`
	width: 48px;
	height: 48px;
	display: inline-block;
	position: relative;

	&::after,
	&::before {
		content: '';
		box-sizing: border-box;
		width: 48px;
		height: 48px;
		border: 4px solid #ffffff;
		position: absolute;
		left: 0;
		top: 0;
		animation: ${StyledAnimate} 2s ease-in-out infinite;
	}

	&::after {
		border-color: #209c52;
		animation-delay: 1s;
	}
`;
