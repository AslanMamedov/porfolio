import { FC } from 'react';
import { NavigationTitle, Container } from 'components/index';
import { AboutSkills, AboutFactors, AboutInfo } from './components';
import styled from 'styled-components';

const About: FC = () => {
	return (
		<Container>
			<StyledWorsHeader>
				<NavigationTitle subtitle={'about-who-am-i'} />
				<AboutInfo />
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
