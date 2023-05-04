import { FC, memo } from 'react';
import { SocialLink } from './SocialLink';
import { SocialMedia } from 'type/index';
import styled from 'styled-components';

interface SocialMediaListProps {
	socialMedia: SocialMedia[];
}

export const SocialMediaList: FC<SocialMediaListProps> = memo(({ socialMedia = [] }) => {
	return (
		<StyledSocialMediaLists className="social-media">
			<StyledSocialMediaListContainer className="social-media__container">
				{socialMedia.map(({ icon, href }, index) => (
					<StyledSocialMediaList key={index} className="social-media__item">
						<SocialLink icon={icon} href={href} target="_blank" />
					</StyledSocialMediaList>
				))}
			</StyledSocialMediaListContainer>
		</StyledSocialMediaLists>
	);
});

const StyledSocialMediaLists = styled.div`
	position: fixed;
	top: 205px;
	left: 18px;
	@media (max-width: 1144px) {
		display: none;
	}
`;

const StyledSocialMediaListContainer = styled.ul``;

const StyledSocialMediaList = styled.li`
	cursor: pointer;
	margin-top: 8px;
`;
