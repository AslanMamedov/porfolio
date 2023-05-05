import { FC, useMemo } from 'react';
import { SocialMediaList } from './SocialMediaList';
import { SocialMedia } from 'type/index';
import { Footer } from './Footer';
import { Main } from './Main';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import theme from 'styled-theming';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillSkype, AiFillInstagram } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiLinktree } from 'react-icons/si';
import styled, { css } from 'styled-components';

export const Layout: FC = () => {
	const socialMediaList = useMemo<SocialMedia[]>(() => {
		return [
			{ icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/aslanmammadov/' },
			{ icon: SiLinktree, href: 'https://linktr.ee/aslanmammadov' },
			{ icon: AiFillGithub, href: 'https://github.com/AslanMamedov' },
			{ icon: AiFillInstagram, href: 'https://www.instagram.com/_aslan_mammadov_/' },
			{ icon: RiTelegramFill, href: 'https://t.me/ASLANM94' },
			{ icon: IoLogoWhatsapp, href: 'https://wa.me/994553857484' },
			{ icon: AiFillTwitterCircle, href: 'https://twitter.com/AslanMamedov94' },
			{ icon: AiFillSkype, href: 'https://join.skype.com/invite/Jgh7c4dcAqXe' },
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
