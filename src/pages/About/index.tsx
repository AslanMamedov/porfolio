import { FC } from 'react';
import { NavigationTitle, Container } from 'components/index';
import { AboutSkills, AboutFactors, AboutInfo } from './components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
const About: FC = () => {
	return (
		<Container>
			<Helmet>
				<meta charSet="utf-8" />
				<title>About-me</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
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
