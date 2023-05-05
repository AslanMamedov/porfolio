import { FC, useContext } from 'react';
import { PortfolioCard } from 'components/PortfolioCard';
import styled from 'styled-components';
import { MiniProjects } from '..';

export const SmallProjectLists: FC = () => {
	const smallProjects = useContext(MiniProjects);

	return (
		<StyledSmallProjectLists>
			{!!smallProjects.length &&
				smallProjects.map((projects, index) => <PortfolioCard key={index} {...projects} />)}
		</StyledSmallProjectLists>
	);
};
const StyledSmallProjectLists = styled.div`
	margin-top: 48px;
	display: flex;
	gap: 17px;
	flex-wrap: wrap;
`;
