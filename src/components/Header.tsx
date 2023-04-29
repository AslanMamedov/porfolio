import styled from 'styled-components';
import { Container } from './Container';
import { Navigation } from './Navigation';

const StyledHeader = styled.header`
	/* position: fixed;
	left: 0; */
	/* background-color: ${(props) => props.theme.color}; */
	padding: 0 15px;
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
