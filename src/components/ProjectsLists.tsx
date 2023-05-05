import { FC, useMemo } from 'react';
import { PortfolioCard, PortfolioCardProps } from './PortfolioCard';
import styled from 'styled-components';

export const ProjectsLists: FC = () => {
	const porfolios = useMemo<PortfolioCardProps[]>(
		() => [
			{
				description: 'Сайт портфолио',
				imgSrc: '/src/assets/images/porfolio/porfolio.png',
				tools: [
					'React,',
					'TypeScript,',
					'React-router-dom,',
					'Styled-components,',
					'i18n,',
					'React-icons',
					'React-helmet',
				],
				title: 'Portfolio',
				linkCode: 'https://github.com/AslanMamedov/porfolio',
				linkDemo: '/works',
			},
			{
				description: 'Сайт для оформления  кредитов',
				imgSrc: '/src/assets/images/porfolio/bank.png',
				tools: [
					'React,',
					'TypeScript,',
					'Redux RTK,',
					'React Router Dom,',
					'React Hook Form,',
					'Material UI,',
					'Zod,',
					'Imask Js,',
					'Vite',
				],
				title: 'Сredit registration ',
				linkDemo: 'https://bank-respublika-test.vercel.app',
				linkCode: 'https://github.com/AslanMamedov/Picture',
			},
			{
				description: 'Сайт для заказов различный видом фотографий',
				imgSrc: '/src/assets/images/porfolio/pictures.png',
				tools: ['HTML,', 'JavaScript,', 'LESS,', 'PHP,', 'Gulp'],
				title: 'Picture',
				linkCode: 'https://github.com/AslanMamedov/Picture',
			},
			{
				description: 'Сайт для заказов различный видом окон',
				imgSrc: '/src/assets/images/porfolio/window.png',
				tools: ['HTML,', 'JavaScript,', 'SCSS,', 'PHP,', 'Gulp'],
				title: 'Window',
				linkCode: 'https://github.com/AslanMamedov/Windows',
			},
			{
				description: 'Сайт для заказов различный видом аксессуаров для спорта',
				imgSrc: '/src/assets/images/porfolio/pulse.png',
				tools: ['HTML,', 'JavaScript,', 'SCSS,', 'PHP,', 'Gulp'],
				title: 'Pulse',
				linkCode: 'https://github.com/AslanMamedov/Pulse',
			},
			{
				description: 'Сайт для фитнес диеты',
				imgSrc: '/src/assets/images/porfolio/food.png',
				tools: ['HTML,', 'JavaScript,', 'SCSS,', 'PHP,', 'JSON-server'],
				title: 'Food',
				linkCode: 'https://github.com/AslanMamedov/Project-Food',
			},
			{
				description: 'Сайт визитка',
				imgSrc: '/src/assets/images/porfolio/wordpress.png',
				tools: ['HTML,', 'JavaScript,', 'SCSS,', 'GSAP,', 'БЭМ,', 'Gulp'],
				title: 'Wordpress',
				linkCode: 'https://github.com/AslanMamedov/Wordpress',
			},
			{
				description: 'Сайт визитка',
				imgSrc: '/src/assets/images/porfolio/uber.png',
				tools: ['HTML,', 'JavaScript,', 'SCSS,', 'Gulp'],
				title: 'Uber',
				linkCode: 'https://github.com/AslanMamedov/Uber',
			},
			{
				description: 'Сайт визитка',
				imgSrc: '/src/assets/images/porfolio/loan.png',
				tools: ['HTML,', 'JavaScript,', 'SCSS,', 'Gulp'],
				title: 'Loan',
				linkCode: 'https://github.com/AslanMamedov/Loan',
			},
		],
		[]
	);
	return (
		<StyledCardContainer>
			{porfolios.length && porfolios.map((porfolio, index) => <PortfolioCard key={index} {...porfolio} />)}
		</StyledCardContainer>
	);
};
const StyledCardContainer = styled.div`
	margin-top: 48px;
	display: flex;
	flex-wrap: wrap;
	gap: 17px;
	align-items: baseline;
`;
