import styled from 'styled-components';
import { Container } from './Container';
import { Logo } from './Logo';

const StyledFooter = styled.footer`
	height: 208px;
	border-top: 1px solid ${(props) => props.theme.color.gray};
	padding: 32px 0;
`;
export const Footer = () => {
	return (
		<StyledFooter className="footer">
			<Container>
				<Logo />
			</Container>
		</StyledFooter>
	);
};
