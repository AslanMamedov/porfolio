import { FC } from 'react';
import { Container, NavigationTitle } from 'components/index';
import { IconInlineDots } from 'icons/index';
import { Content, Media } from './components';
import styled from 'styled-components';

const Contacts: FC = () => {
	return (
		<Container>
			<StyledContactContainer>
				<StyledIcon />
				<NavigationTitle />
				<Content />
				<Media />
			</StyledContactContainer>
		</Container>
	);
};
export default Contacts;

const StyledContactContainer = styled.div`
	margin-top: 53px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 155px;
		height: 155px;
		bottom: 80px;
		right: -240px;
		border: 1px solid ${({ theme }) => theme.color.gray};

		@media (max-width: 1511px) {
			display: none;
		}
	}
`;

const StyledIcon = styled(IconInlineDots)`
	position: absolute;
	left: -200px;
	bottom: 30px;
	width: 109px;
	height: 49px;
`;
