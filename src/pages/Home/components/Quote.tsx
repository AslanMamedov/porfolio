import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledQuote = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 112px;
	position: relative;
	&::after {
		content: '';
		width: 91px;
		height: 91px;
		display: block;
		top: 50%;
		transform: translateY(-50%);
		right: -247px;
		border: 1px solid ${(props) => props.theme.color.gray};

		position: absolute;
	}
`;

const StyledQuoteContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

const StyledQuoteText = styled.div`
	border: 1px solid ${(props) => props.theme.color.gray};
	padding: 32px;
	font-weight: 500;
	font-size: 24px;
	line-height: 31px;
	display: inline-block;
	position: relative;
`;
const StyledQuoteAuthor = styled.div`
	border: 1px solid ${(props) => props.theme.color.gray};
	padding: 16px;
	font-weight: 400;
	font-size: 24px;
	line-height: 31px;
	display: inline-block;
	min-width: 164px;
	border-top: none;
`;

const StyledQuoteTop = styled.span`
	position: absolute;
	left: 11px;
	top: 10px;
	z-index: 11;
	color: ${(props) => props.theme.color.gray};
	font-size: 85px;
	&::after {
		content: '';
		width: 50px;
		height: 50px;
		display: block;
		top: -33px;
		z-index: -1;
		background-color: ${(props) => props.theme.color.main};
		position: absolute;
	}
`;
const StyledQuoteBottom = styled.span`
	position: absolute;
	bottom: -40px;
	right: 10px;
	z-index: 11;
	color: ${(props) => props.theme.color.gray};
	font-size: 85px;
	&::after {
		content: '';
		width: 50px;
		height: 25px;
		display: block;
		top: -22px;
		z-index: -1;
		background-color: ${(props) => props.theme.color.main};
		position: absolute;
	}
`;
export const Quote = () => {
	const { t } = useTranslation();

	return (
		<StyledQuote>
			<StyledQuoteContainer>
				<StyledQuoteText>
					<StyledQuoteTop>“</StyledQuoteTop>
					{t('quote')}
					<StyledQuoteBottom>“</StyledQuoteBottom>
				</StyledQuoteText>
				<StyledQuoteAuthor>- {t('quote-author')}</StyledQuoteAuthor>
			</StyledQuoteContainer>
		</StyledQuote>
	);
};
