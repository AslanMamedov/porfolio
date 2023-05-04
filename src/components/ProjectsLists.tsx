import { FC } from 'react';
import { PortfolioCard } from './PortfolioCard';
import styled from 'styled-components';

export const ProjectsLists: FC = () => {
	return (
		<StyledCardContainer>
			<PortfolioCard
				imgSrc={'/src/assets/images/porfoliimage.png'}
				tools={['HTML', 'React', 'TS', 'HTML', 'React', 'TS']}
				description={'adasdadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
				title={'asdaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
				linkDemo="/works"
				linkCode="https://github.com/AslanMamedov/porfolio"
			/>
		</StyledCardContainer>
	);
};
const StyledCardContainer = styled.div`
	margin-top: 48px;
	display: flex;
	flex-wrap: wrap;
	gap: 17px;
	align-items: baseline;
`;
