import { FC, memo, useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Language } from './Language';
import { Logo } from './Logo';
import { ButtonUp } from './ButtonUp';
import { BurgerMenu } from './BurgerMenu';
import { Links } from 'type/index';
import styled, { css } from 'styled-components';

interface StyledNavMenuProps {
	showMenu: boolean;
}
interface NavigationProps {
	links: Links[];
}

export const Navigation: FC<NavigationProps> = memo(({ links }) => {
	const [showButton, setShowButton] = useState<boolean>(false);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const location = useLocation();
	const showMenuHandler = useCallback(() => {
		setShowMenu((prevState) => !prevState);
	}, [setShowMenu]);

	useEffect(() => {
		const scrollProgress = () => {
			const scrollPx = document.documentElement.scrollTop;
			if (scrollPx > 100) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};
		window.addEventListener('scroll', scrollProgress);
		return () => {
			window.removeEventListener('scroll', scrollProgress);
		};
	}, [setShowButton]);

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
			{showButton && <ButtonUp />}
			<Logo />
			<BurgerMenu showMenu={showMenu} setShowMenu={showMenuHandler} />
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
});

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
	color: ${({ theme }) => theme.color.primary};
	font-weight: 500;
`;

const StyledContainer = styled.div<StyledNavMenuProps>`
	${({ showMenu }) =>
		showMenu
			? css`
					@media (max-width: 854px) {
						width: 100%;
						height: 100vh;
						position: fixed;
						left: 0;
						top: 0px;
						z-index: 1101;
						background-color: ${({ theme }) => theme.color.main};
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
