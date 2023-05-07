import { FC } from 'react';
import { Container } from 'components/index';
import { About, Contacts, MainHeader, Projects, Quote, Skills } from './components';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const Home: FC = () => {
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
				<title>{t('home')}</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>

			<MainHeader />
			<Quote />
			<Projects />
			<Skills />
			<About />
			<Contacts />
		</Container>
	);
};

export default Home;
