import { ComponentPropsWithoutRef, FC, ReactNode, Ref, forwardRef, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

interface StyledAnchorProps extends ComponentPropsWithoutRef<'a'> {
	variant: 'primary' | 'lightgray';
}

interface AnchorProps extends ComponentPropsWithoutRef<'a'> {
	to: string;
	title: string;
	icon?: ReactNode;
	variant: 'primary' | 'lightgray';
}

export const AnchorMotion: FC<AnchorProps> = memo(
	forwardRef(({ icon, title, to, variant, ...props }, ref: Ref<HTMLAnchorElement>) => {
		const { t } = useTranslation();

		return (
			<StyledAnchor to={to} ref={ref} variant={variant} {...props}>
				{t(title)} {icon && icon}
			</StyledAnchor>
		);
	})
);

export const Anchor = motion(AnchorMotion);
const StyledAnchor = styled(Link)<StyledAnchorProps>`
	padding: 10px 16px;
	height: 38px;
	display: inline-block;
	cursor: pointer;
	color: ${({ theme, variant }) => (variant === 'primary' ? theme.color.white : theme.color.gray)};
	border: 1px solid ${({ theme, variant }) => (variant === 'primary' ? theme.color.primary : theme.color.gray)};
	&:hover {
		background: ${({ theme, variant }) => (variant === 'primary' ? theme.color.primaryrgba : theme.color.grayrbga)};
	}
`;
