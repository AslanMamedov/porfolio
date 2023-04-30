import { Container } from 'components/index';
import { About, Contacts, MainHeader, Projects, Quote, Skills } from './components';
import { useEffect, useState } from 'react';

const Home = () => {
	// const { t } = useTranslation();
	// const [showButton, setShowButton] = useState<boolean>(false);
	// useEffect(() => {
	// 	const scrollProgress = () => {
	// 		const scrollPx = document.documentElement.scrollTop;
	// 		const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 		const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

	// 		console.log(scrollPx);
	// 		if (scrollPx < 100) {
	// 			setShowButton(true);
	// 		} else {
	// 			setShowButton(false);
	// 		}
	// 	};

	// 	window.addEventListener('scroll', scrollProgress);

	// 	return () => {
	// 		window.removeEventListener('scroll', scrollProgress);
	// 	};
	// }, [setShowButton]);
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
