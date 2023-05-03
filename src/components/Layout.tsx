import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { FC, useMemo } from 'react';
import { ISocialMedia, SocialMediaList } from './SocialMediaList';
import { IconGithub, IconLinkedin, IconTelegram, IconTwitter } from 'icons/index';

export const Layout: FC = () => {
	const socialMediaList = useMemo<ISocialMedia[]>(() => {
		return [
			{ icon: IconLinkedin, href: 'https://www.linkedin.com/in/aslanmammadov/' },
			{ icon: IconTwitter, href: 'https://twitter.com/AslanMamedov94' },
			{ icon: IconGithub, href: 'https://github.com/AslanMamedov' },
			{ icon: IconTelegram, href: 'https://t.me/ASLANM94' },
		];
	}, []);

	return (
		<StyledWrapper className="wrapper">
			<SocialMediaList socialMedia={socialMediaList} />
			<Header />
			<Main>
				<Outlet />
			</Main>

			<Footer socialMedia={socialMediaList} />
		</StyledWrapper>
	);
};

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
