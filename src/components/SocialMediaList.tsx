import { FC, memo } from 'react';
import { SocialLink } from './SocialLink';
import { SocialMedia } from 'type/index';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SocialMediaListProps {
	socialMedia: SocialMedia[];
}
const variant = {
	hidden: {
		opacity: 0,
	},
	visible: (i: number) => ({
		opacity: 1,
		transition: {
			delay: i * 0.2,
		},
	}),
};

export const SocialMediaList: FC<SocialMediaListProps> = memo(({ socialMedia = [] }) => {
	return (
		<StyledSocialMediaLists className="social-media">
			<StyledSocialMediaListContainer className="social-media__container">
				{socialMedia.map(({ icon, href }, index) => (
					<StyledSocialMediaList key={index} className="social-media__item">
						<SocialLink
							initial="hidden"
							animate="visible"
							variants={variant}
							custom={index + 1}
							icon={icon}
							href={href}
							target="_blank"
						/>
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

const StyledSocialMediaListContainer = styled(motion.ul)``;

const StyledSocialMediaList = styled.li`
	cursor: pointer;
	margin-top: 8px;
`;
