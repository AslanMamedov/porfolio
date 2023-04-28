import { IconGithub, IconLinkedin, IconTelegram, IconTwitter } from 'icons/index';
import styled from 'styled-components';

const StyledSocialMediaLists = styled.div`
	position: absolute;
	top: 205px;
	left: 18px;
`;

const StyledSocialMediaListContainer = styled.ul``;
const StyledAnchor = styled.a``;
const StyledSocialMediaList = styled.li`
	cursor: pointer;
	svg {
		width: 30px;
		height: 30px;
		fill: ${(props) => props.theme.color.gray};
		&:hover {
			circle {
				stroke: ${(props) => props.theme.color.white};
				path {
					stroke: ${(props) => props.theme.color.white};
					fill: ${(props) => props.theme.color.white};
				}
				fill: ${(props) => props.theme.color.white};
			}
			path {
				stroke: ${(props) => props.theme.color.white};
			}
			fill: ${(props) => props.theme.color.white};
		}
	}

	margin-top: 8px;
`;

export const SocialMediaList = () => {
	return (
		<StyledSocialMediaLists className="social-media">
			<StyledSocialMediaListContainer className="social-media__container">
				<StyledSocialMediaList className="social-media__item">
					<StyledAnchor href="/" className="social-media__link">
						<IconGithub className="social-media__github" />
					</StyledAnchor>
				</StyledSocialMediaList>
				<StyledSocialMediaList className="social-media__item">
					<StyledAnchor href="/" className="social-media__link">
						<IconLinkedin className="social-media__linkedin" />
					</StyledAnchor>
				</StyledSocialMediaList>
				<StyledSocialMediaList className="social-media__item">
					<StyledAnchor href="/" className="social-media__link">
						<IconTelegram className="social-media__telegram" />
					</StyledAnchor>
				</StyledSocialMediaList>
				<StyledSocialMediaList className="social-media__item">
					<StyledAnchor href="/" className="social-media__link">
						<IconTwitter className="social-media__twitter" />
					</StyledAnchor>
				</StyledSocialMediaList>
			</StyledSocialMediaListContainer>
		</StyledSocialMediaLists>
	);
};
