import { FC, useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Language } from './Language';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';
import { IconBurgerLine, IconBurgerX } from 'icons/index';

const StyledNav = styled.nav`
	padding-top: 32px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLinkLists = styled.ul`
	display: flex;

	@media (max-width: 854px) {
		flex-direction: column;
		margin-top: 105px;
	}
`;

const StyledLink = styled.li`
	@media (max-width: 854px) {
		&:not(:first-child) {
			margin-top: 32px;
		}
	}
	a {
		@media (max-width: 854px) {
			font-size: 32px;
		}
	}

	&:not(:first-child) {
		margin-left: 32px;
		@media (max-width: 854px) {
			margin-left: 0px;
		}
	}
	&:last-child {
		margin-right: 32px;
		@media (max-width: 854px) {
			margin-right: 0px;
		}
	}
`;

const StyledHash = styled.span`
	color: ${(props) => props.theme.color.primary};
	font-weight: 500;
`;

interface INavMenuProps {
	showMenu: boolean;
}

const StyledContainer = styled.div<INavMenuProps>`
	${(props) =>
		props.showMenu
			? css`
					@media (max-width: 854px) {
						width: 100%;
						height: 100vh;
						position: fixed;
						left: 0;
						top: 0px;
						z-index: 1101;
						background-color: ${(props) => props.theme.color.main};
						padding-left: 16px;
					}
			  `
			: css`
					display: flex;
					@media (max-width: 854px) {
						display: none;
					}
			  `}
`;

const StyledBurgerMenu = styled.button`
	background-color: transparent;
	outline: none;
	border: none;
	display: block;
	position: fixed;
	z-index: 111111;

	right: 16px;
	svg {
		width: 34px;
		height: 34px;
	}
	@media (min-width: 854px) {
		display: none;
	}
`;

const StyledBurgerMenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex: 1 1 auto;
	width: 100vw;
	padding-left: 35px;
	color: ${(props) => props.theme.color.white};
`;

export const Navigation: FC = () => {
	const { t } = useTranslation();
	const location = useLocation();
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const links = useMemo(() => {
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
				path: '/about',
				title: t('about'),
			},
			{
				path: '/contacts',
				title: t('contacts'),
			},
		];
	}, [t]);

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
	useEffect(() => {
		if (showMenu) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'initial';
		}
		return () => {
			document.body.style.overflowY = 'initial';
		};
	}, [showMenu, location.pathname]);

	useEffect(() => {
		if (location.pathname) {
			setShowMenu(false);
		} else {
			setShowMenu(true);
		}
	}, [location.pathname]);

	return (
		<StyledNav className="nav">
			<Logo />
			<StyledBurgerMenu onClick={() => setShowMenu((prevState) => !prevState)}>
				{!showMenu ? (
					<IconBurgerLine />
				) : (
					<StyledBurgerMenuContainer>
						<Logo />
						<IconBurgerX />
					</StyledBurgerMenuContainer>
				)}
			</StyledBurgerMenu>
			<StyledContainer className="nav__container" showMenu={showMenu}>
				<StyledLinkLists className="nav__link-list">
					{links.map((link, index) => (
						<StyledLink key={index} className="nav__link-item">
							<NavLink
								to={link.path}
								style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#ABB2BF' })}
							>
								<StyledHash>#</StyledHash>
								{link.title}
							</NavLink>
						</StyledLink>
					))}
				</StyledLinkLists>
				<Language setShowMenu={setShowMenu} />
			</StyledContainer>
		</StyledNav>
	);
};
