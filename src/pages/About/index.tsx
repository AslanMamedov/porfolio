import { Container, NavigationTitle } from 'components/index';
import styled from 'styled-components';
import { FC } from 'react';
import { AboutDescription, AboutFactors, AboutSkills } from './components';

const About: FC = () => {
	return (
		<Container>
			<StyledWorsHeader>
				<NavigationTitle subtitle={'Who am i?'} />
				<AboutDescription />
				<AboutSkills />
				<AboutFactors />
			</StyledWorsHeader>
		</Container>
	);
};
export default About;

const StyledWorsHeader = styled.div`
	margin-top: 53px;
`;
