import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface TextProps {
	text: string;
}

export const Text: FC<TextProps> = ({ text }) => {
	const { t } = useTranslation();

	return <StyledSubTitle>{t(text)}</StyledSubTitle>;
};

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
