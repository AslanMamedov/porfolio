import { FC, createContext, useMemo } from 'react';
import { NavigationTitle, Container } from 'components/index';
import { CompleteProjects, SmallProjects } from './components';
import { PortfolioCardProps } from 'components/PortfolioCard';
import styled from 'styled-components';

export const MiniProjects = createContext<PortfolioCardProps[]>([]);

const Works: FC = () => {
	const miniPropjects = useMemo(
		() => [
			{ description: '', linkDemo: '', title: '', tools: [], imgSrc: '', linkCode: '' },
			{ description: '', linkDemo: '', title: '', tools: [], imgSrc: '', linkCode: '' },
			{ description: '', linkDemo: '', title: '', tools: [], imgSrc: '', linkCode: '' },
			{ description: '', linkDemo: '', title: '', tools: [], imgSrc: '', linkCode: '' },
		],
		[]
	);
	return (
		<MiniProjects.Provider value={miniPropjects}>
			<Container>
				<StyledWorsHeader>
					<NavigationTitle subtitle={'wors-subtitle'} />
					<CompleteProjects />
					{!!miniPropjects.length && <SmallProjects />}
				</StyledWorsHeader>
			</Container>
		</MiniProjects.Provider>
	);
};
export default Works;
const StyledWorsHeader = styled.div`
	margin-top: 53px;
`;
