import { FC, memo } from 'react';
import { SocialLink } from 'components/SocialLink';
import { SocialMedia } from 'type/index';
import styled from 'styled-components';

interface SocialMediaListsProps {
	socialLinks: SocialMedia[];
}

export const SocialMediaLists: FC<SocialMediaListsProps> = memo(({ socialLinks }) => {
	return (
		<StyledSocialMediaList>
			{!!socialLinks.length &&
				socialLinks.map(({ href, icon: Icon, text }, index) => (
					<SocialLink key={index} icon={Icon} text={text} href={href} target="_blank" />
				))}
		</StyledSocialMediaList>
	);
});

const StyledSocialMediaList = styled.div`
	display: flex;
	gap: 22px;
	margin-top: 22px;
`;
