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

const StyledSubTitle = styled.h2`
	margin-top: 32px;
	font-weight: 400;
	font-size: 16px;
	line-height: 25px;
	max-width: 508px;
	@media (max-width: 1144px) {
		text-align: center;
	}
	color: ${(props) => props.theme.color.gray};
`;
