import { FC } from 'react';
import { Container } from 'components/index';
import { About, Contacts, MainHeader, Projects, Quote, Skills } from './components';
import { Helmet } from 'react-helmet';
const Home: FC = () => {
	return (
		<Container>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Aslan</title>
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
