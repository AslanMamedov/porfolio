import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAnchorPrimary = styled.span`
	padding: 10px 16px;
	height: 38px;
	display: inline-block;
	cursor: pointer;
	border: 1px solid ${(props) => props.theme.color.primary};
	&:hover {
		background: ${(props) => props.theme.color.primaryrgba};
	}
	a {
		height: 100%;
		width: 100%;
		color: ${(props) => props.theme.color.white};
	}
`;
const StyledAnchorLightGray = styled.span`
	padding: 10px 16px;
	height: 38px;
	display: inline-block;
	cursor: pointer;
	color: ${(props) => props.theme.color.gray};
	border: 1px solid ${(props) => props.theme.color.gray};
	&:hover {
		background: ${(props) => props.theme.color.grayrbga};
	}
	a {
		height: 100%;
		width: 100%;
		color: ${(props) => props.theme.color.gray};
	}
`;

interface AnchorProps {
	to: string;
	title: string;
	icon?: ReactNode;
	type: 'primary' | 'lightgray';
	linkType?: boolean;
}

const StyledLink = styled.a``;

export const Anchor: FC<AnchorProps> = ({ icon, title, to, type, linkType }) => {
	if (type === 'lightgray') {
		return (
			<StyledAnchorLightGray>
				{linkType ? (
					<StyledLink href={to} target="_blank">
						{title}
					</StyledLink>
				) : (
					<Link to={to}>
						{title} {icon && icon}
					</Link>
				)}
			</StyledAnchorLightGray>
		);
	}

	return (
		<StyledAnchorPrimary>
			{linkType ? (
				<StyledLink href={to} target="_blank">
					{title}
				</StyledLink>
			) : (
				<Link to={to}>
					{title} {icon && icon}
				</Link>
			)}
		</StyledAnchorPrimary>
	);
};
