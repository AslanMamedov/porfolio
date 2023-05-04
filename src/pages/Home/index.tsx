import { FC } from 'react';
import { Container } from 'components/index';
import { About, Contacts, MainHeader, Projects, Quote, Skills } from './components';

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
