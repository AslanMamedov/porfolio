import { FC, useMemo } from 'react';
import { Container } from './Container';
import { Navigation } from './Navigation';
import { useScrollDirection } from 'hooks/index';
import { useTranslation } from 'react-i18next';
import { Links } from 'type/index';
import styled from 'styled-components';

interface StyledHeaderProps {
	scrollDirection: boolean | null;
}

export const Header: FC = () => {
	const scrollDirection = useScrollDirection();
	const { t } = useTranslation();
	const links = useMemo<Links[]>(() => {
		return [
			{
				path: '/',
				title: t('home'),
			},
			{
				path: '/works',
				title: t('works'),
			},
			{
				path: '/about-me',
				title: t('about-me'),
			},
			{
				path: '/contacts',
				title: t('contacts'),
			},
		];
	}, [t]);
	return (
		<StyledHeader className="header" scrollDirection={scrollDirection}>
			<Container>
				<Navigation links={links} />
			</Container>
		</StyledHeader>
	);
};

const StyledHeader = styled.header<StyledHeaderProps>`
	padding: 0 15px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.color.main};
	position: ${({ scrollDirection }) => scrollDirection && 'sticky'};
	top: 0;
	width: 100%;
	height: 60px;
	z-index: 111111111111;

	@media (max-width: 854px) {
		position: relative;
	}

	&::after {
		content: '';
		width: 2px;
		height: 191px;
		background-color: ${({ theme }) => theme.color.gray};
		position: fixed;
		top: 0;
		z-index: 11111;
		left: 32px;
		@media (max-width: 1144px) {
			display: none;
		}
	}
`;
