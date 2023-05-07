import { motion } from 'framer-motion';
import { FC, Ref, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface TextProps {
	text: string;
}

const TextWithMotion: FC<TextProps> = forwardRef(({ text }, ref: Ref<HTMLHeadingElement>) => {
	const { t } = useTranslation();

	return <StyledSubTitle ref={ref}>{t(text)}</StyledSubTitle>;
});

export const Text = motion(TextWithMotion);

const StyledSubTitle = styled.h2(({ theme }) => ({
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '25px',
	maxWidth: '508px',
	'@media (maxWidth: 1144px)': {
		textAlign: 'center',
	},
	color: theme.color.gray,
}));
