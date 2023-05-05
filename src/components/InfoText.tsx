import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface InfoTextProps {
	box?: boolean;
	text: string;
	textLight: string;
}
export const InfoText: FC<InfoTextProps> = ({ box = false, text, textLight }) => {
	const { t } = useTranslation();
	return (
		<StyledPortfolio className="info-text">
			{box && <StyledBox />}
			<StyledMarkerPortfolio>{t(text)}</StyledMarkerPortfolio>
			{t(textLight)}
		</StyledPortfolio>
	);
};

const StyledPortfolio = styled.div`
	border: 1px solid ${({ theme }) => theme.color.gray};
	padding: 8px;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	display: flex;
	align-items: center;

	@media (max-width: 1140px) {
		width: 100%;
		padding: 8px;
	}
`;

const StyledMarkerPortfolio = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-right: 5px;
	display: inline;
	color: ${({ theme }) => theme.color.gray};
`;
const StyledBox = styled.span`
	width: 16px;
	height: 16px;
	display: inline;
	margin-right: 4px;
	background-color: ${({ theme }) => theme.color.primary};

`;
