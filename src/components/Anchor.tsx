import { ComponentPropsWithoutRef, FC, ReactNode, memo, } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IAnchorProps extends ComponentPropsWithoutRef<'a'> {
	variant: 'primary' | 'lightgray';
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
	to: string;
	title: string;
	icon?: ReactNode;
	variant: 'primary' | 'lightgray';
}

export const Anchor: FC<AnchorProps> = memo(({ icon, title, to, variant, ...props }) => {
	return (
		<StyledAnchor to={to} variant={variant} {...props}>
			{title} {icon && icon}
		</StyledAnchor>
	);
});

const StyledAnchor = styled(Link)<IAnchorProps>`
	padding: 10px 16px;
	height: 38px;
	display: inline-block;
	cursor: pointer;
	color: ${(props) => (props.variant === 'primary' ? props.theme.color.white : props.theme.color.gray)};
	border: 1px solid ${(props) => (props.variant === 'primary' ? props.theme.color.primary : props.theme.color.gray)};
	&:hover {
		background: ${(props) =>
			props.variant === 'primary' ? props.theme.color.primaryrgba : props.theme.color.grayrbga};
	}
`;
