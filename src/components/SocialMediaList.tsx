import { IconType } from 'icons/index';
import styled from 'styled-components';
import { SocialLink } from './SocialLink';
import { FC, memo } from 'react';

export interface ISocialMedia {
	icon: IconType;
	href: string;
}

interface SocialMediaListProps {
	socialMedia: ISocialMedia[];
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
