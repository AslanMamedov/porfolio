import styled from 'styled-components';
import { Container } from './Container';
import { Navigation } from './Navigation';
const StyledHeader = styled.header`
	padding: 0 15px;
	overflow: hidden;
	background-color: ${(props) => props.theme.color.main};
	position: fixed;
	top: 0;
	width: 100%;
	height: 60px;
	z-index: 111111111111;

	@media (max-width: 854px) {
		position: relative;
	}

	&::after {
		content: '';
		width: 2px;
		height: 191px;
		background-color: ${(props) => props.theme.color.gray};
		position: fixed;
		top: 0;
		z-index: 11111;
		left: 32px;
		@media (max-width: 1144px) {
			display: none;
		}
	}
`;

export const Header = () => {
	return (
		<StyledHeader className="header">
			<Container>
				<Navigation />
			</Container>
		</StyledHeader>
	);
};
