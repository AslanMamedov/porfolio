import { ComponentPropsWithoutRef, FC, Ref, forwardRef, memo } from 'react';
import { IconType } from 'icons/index';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface SocialLinkProps extends ComponentPropsWithoutRef<'a'> {
	icon: IconType;
	text?: string;
}

const SocialLinkMotion: FC<SocialLinkProps> = memo(
	forwardRef(({ icon: Icon, text = undefined, ...props }, ref: Ref<HTMLAnchorElement>) => {
		return (
			<StyledSocialMediaLink {...props} ref={ref}>
				<Icon /> {text && <StyledSocialMediaText>{text}</StyledSocialMediaText>}
			</StyledSocialMediaLink>
		);
	})
);

export const SocialLink = motion(SocialLinkMotion);

const StyledSocialMediaLink = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	svg {
		width: 32px;
		height: 32px;

		fill: ${(props) => props.theme.color.gray};
	}
	&:hover {
		svg {
			circle {
				stroke: ${(props) => props.theme.color.green};
				path {
					stroke: ${(props) => props.theme.color.green};
					fill: ${(props) => props.theme.color.green};
				}
				fill: ${(props) => props.theme.color.green};
			}
			path {
				stroke: ${(props) => props.theme.color.green};
			}
			fill: ${(props) => props.theme.color.green};
		}
		h3 {
			color: ${(props) => props.theme.color.green};
		}
	}
`;

const StyledSocialMediaText = styled.h3`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-left: 5px;
	color: ${(props) => props.theme.color.gray};
`;
