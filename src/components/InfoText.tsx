import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface InfoText {
	box?: boolean;
	text: string;
	textLight: string;
}
export const InfoText: FC<InfoText> = ({ box = false, text, textLight }) => {
	const { t } = useTranslation();
	return (
		<StyledPortfolio>
			{box && <StyledBox />}
			<StyledMarkerPortfolio>{t(textLight)}</StyledMarkerPortfolio>
			{t(text)}
		</StyledPortfolio>
	);
};

const StyledPortfolio = styled.div`
	border: 1px solid ${(props) => props.theme.color.gray};
	padding: 8px;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	display: flex;
	align-items: center;

	@media (max-width: 1144px) {
		margin-right: 0;
		width: 354px;
		padding: 8px;
	}
`;

const StyledMarkerPortfolio = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-right: 5px;
	display: inline;
	color: ${(props) => props.theme.color.gray};
`;
const StyledBox = styled.span`
	width: 16px;
	height: 16px;
	display: block;
	margin-right: 4px;
	background-color: ${(props) => props.theme.color.primary};
`;
