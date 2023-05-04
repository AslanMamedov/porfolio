import { FC, memo } from 'react';
import { IconBurgerLine, IconBurgerX } from 'icons/index';
import { Logo } from './Logo';
import styled from 'styled-components';

interface BurgerMenuProps {
	showMenu: boolean;
	setShowMenu: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = memo(({ setShowMenu, showMenu }) => {
	return (
		<StyledBurgerMenu onClick={setShowMenu}>
			{!showMenu ? (
				<IconBurgerLine />
			) : (
				<StyledBurgerMenuContainer>
					<Logo />
					<IconBurgerX />
				</StyledBurgerMenuContainer>
			)}
		</StyledBurgerMenu>
	);
});

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
	color: ${({ theme }) => theme.color.white};
`;
