import { IconType } from 'icons/index';
import { ComponentPropsWithoutRef, FC, memo } from 'react';
import styled from 'styled-components';

interface SocialLinkProps extends ComponentPropsWithoutRef<'a'> {
	icon: IconType;
	text?: string;
}

export const SocialLink: FC<SocialLinkProps> = memo(({ icon: Icon, text = undefined, ...props }) => {
	return (
		<StyledSocialMediaLink {...props}>
			<Icon /> {text && <StyledSocialMediaText>{text}</StyledSocialMediaText>}
		</StyledSocialMediaLink>
	);
});

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
		h3 {
			color: ${(props) => props.theme.color.white};
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
