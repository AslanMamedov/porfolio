import { Container } from 'components/index';
import { About, Contacts, MainHeader, Projects, Quote, Skills } from './components';
import { FC } from 'react';

const Home: FC = () => {
	return (
		<Container>
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
