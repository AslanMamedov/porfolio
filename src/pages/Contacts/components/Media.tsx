import { FC, useMemo } from 'react';
import { Title } from 'components/Title';
import { IconGithub, IconLinkedin, IconTelegram, IconTwitter } from 'icons/index';
import { SocialMediaLists } from './SocialMediaLists';
import styled from 'styled-components';

export const Media: FC = () => {
	const socialLinks = useMemo<SocialMediaLists[]>(() => {
		return [
			{
				href: 'https://twitter.com/AslanMamedov94',
				icon: IconTwitter,
				text: '',
			},
			{ icon: IconLinkedin, href: 'https://www.linkedin.com/in/aslanmammadov/', text: '' },
			{ icon: IconGithub, href: 'https://github.com/AslanMamedov', text: '' },
			{ icon: IconTelegram, href: 'https://t.me/ASLANM94', text: '' },
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
