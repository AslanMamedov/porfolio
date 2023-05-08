import { FC, createContext, useMemo } from 'react';
import { NavigationTitle, Container } from 'components/index';
import { CompleteProjects, SmallProjects } from './components';
import { PortfolioCardProps } from 'components/PortfolioCard';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
export const MiniProjects = createContext<PortfolioCardProps[]>([]);

const Works: FC = () => {
	const { t } = useTranslation();
	const miniPropjects = useMemo(
		() => [
			{
				description: 'Мини проигрыватель',
				title: 'Mini circle player',
				tools: ['React,', 'TypeScript,', 'SCSS,', 'React-icons,', 'Roundy'],
				imgSrc: '/src/assets/images/porfolio/player.png',
				linkCode: 'https://github.com/AslanMamedov/circle-player',
			},
			{
				description: 'Слайдер',
				title: 'Slider',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/slider.png',
				linkCode: 'https://github.com/AslanMamedov/Marathon/tree/master/Slider',
			},
			{
				description: 'Слайдер',
				title: 'Slider',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/slider-car.png',
				linkCode: 'https://github.com/AslanMamedov/Marathon/tree/master/Card',
			},
			{
				description: 'Мини игра',
				title: 'Mini game',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/aim.png',
				linkCode: 'https://github.com/AslanMamedov/Marathon/tree/master/Game',
			},
			{
				description: 'Мини игра',
				title: 'Mini game',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/hover.png',
				linkCode: 'https://github.com/AslanMamedov/Marathon/tree/master/Board',
			},
			{
				description: 'Мини игра',
				title: 'Drag Drop',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/drag-drop.png',
				linkCode: 'https://github.com/AslanMamedov/Marathon/tree/master/Drag%26Drop',
			},
			{
				description: 'Эквалайзер',
				title: 'Audi equalizer',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/audio.png',
				linkCode: 'https://github.com/AslanMamedov/mediastream',
			},
			{
				description: 'Рейтинг',
				title: 'Star rating',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/rating.png',
				linkCode: 'https://github.com/AslanMamedov/miniProjects/tree/master/Star',
			},
			{
				description: 'Прогресс скрола',
				title: 'Scroll progress',
				tools: ['HTML,', 'CSS,', 'JavaScript'],
				imgSrc: '/src/assets/images/porfolio/scroll.png',
				linkCode: 'https://github.com/AslanMamedov/miniProjects/tree/master/ScrollTop',
			},
		],
		[]
	);
	return (
		<MiniProjects.Provider value={miniPropjects}>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{t('works')}</title>
				<link rel="canonical" href="http://mysite.com/example" />
			</Helmet>
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
				<StyledWorsHeader >
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
