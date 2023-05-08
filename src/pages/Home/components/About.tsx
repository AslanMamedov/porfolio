import { FC } from 'react';
import { AboutDescription, Anchor, Title } from 'components/index';

import styled from 'styled-components';

export const About: FC = () => {
	return (
		<StyledAboutContainer>
			<StyledAboutLeftSide>
				<Title text="about-me" lineWidth="100" />
				<StyledLeftSideContent>
					<AboutDescription />
					<Anchor to={'/about-me'} title={'read-more'} variant={'primary'} icon={'->'} />
				</StyledLeftSideContent>
			</StyledAboutLeftSide>
		</StyledAboutContainer>
	);
};

const StyledAboutContainer = styled.section`
	margin-top: 112px;
	display: flex;
	justify-content: space-between;
	position: relative;
	&::before {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		border: 1px solid ${({ theme }) => theme.color.gray};
		position: absolute;
		left: -276px;
		top: 135px;
	}
	@media (max-width: 1144px) {
		margin-top: 44px;
	}
`;

const StyledAboutLeftSide = styled.div`
	width: 518px;
	display: flex;
	flex-direction: column;
`;

const StyledLeftSideContent = styled.div`
	margin-top: 23px;
`;
