import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { FC } from 'react';
import { SocialMediaList } from './SocialMediaList';

export const BackgroundColor = theme('mode', {
	light: '#FFFFFF',
	dark: '#282C33',
});
export const TextColor = theme('mode', {
	light: '#282C33',
	dark: '#FFFFFF',
});

const StyledHeight = css`
	min-height: 100%;
`;

const StyledWrapper = styled.div`
	position: relative;
	${StyledHeight}
	display: flex;
	flex-direction: column;
	background-color: ${BackgroundColor};
	color: ${TextColor};

`;

export const Layout: FC = () => {
	return (
		<StyledWrapper className="wrapper">
			<SocialMediaList />
			<Header />
			<Main>
				<Outlet />
			</Main>

			<Footer />
		</StyledWrapper>
	);
};
