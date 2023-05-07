import { FC } from 'react';
import { NavigationTitle, Container } from 'components/index';
import { AboutSkills, AboutFactors, AboutInfo } from './components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const About: FC = () => {
	const { t } = useTranslation();
	return (
		<Container
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					delay: 0.1,
				},
			}}
			exit={{ opacity: 0 }}
		>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t('about-me')}</title>
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
