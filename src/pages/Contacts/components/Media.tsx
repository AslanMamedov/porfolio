import { FC, useMemo } from 'react';
import { Title } from 'components/Title';
import { SocialMediaLists } from './SocialMediaLists';
import { SocialMedia } from 'type/index';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillSkype, AiFillInstagram } from 'react-icons/ai';
import { RiTelegramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { SiLinktree } from 'react-icons/si';
import styled from 'styled-components';

export const Media: FC = () => {
	const socialLinks = useMemo<SocialMedia[]>(() => {
		return [
			{ icon: AiFillLinkedin, href: 'https://www.linkedin.com/in/aslanmammadov/' },
			{ icon: SiLinktree, href: 'https://wa.me/994553857484' },
			{ icon: AiFillGithub, href: 'https://github.com/AslanMamedov' },
			{ icon: AiFillInstagram, href: 'https://www.instagram.com/_aslan_mammadov_/' },
			{ icon: RiTelegramFill, href: 'https://t.me/ASLANM94' },
			{ icon: IoLogoWhatsapp, href: 'https://wa.me/994553857484' },
			{ icon: AiFillTwitterCircle, href: 'https://twitter.com/AslanMamedov94' },
			{ icon: AiFillSkype, href: 'https://join.skype.com/invite/Jgh7c4dcAqXe' },
		];
	}, []);
	return (
		<StyledAllMediaContainer>
			<Title text="all-media" />
			<SocialMediaLists socialLinks={socialLinks} />
		</StyledAllMediaContainer>
	);
};
const StyledAllMediaContainer = styled.div`
	margin-top: 25px;
	margin-bottom: 90px;
`;
