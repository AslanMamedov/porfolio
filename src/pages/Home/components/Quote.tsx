import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const Quote: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledQuote>
			<StyledBox />
			<StyledQuoteContainer
				initial={{
					y: 100,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,

					transition: {
						delay: 0.5,
						ease: 'linear',
					},
				}}
			>
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

const StyledBox = styled.div`
	width: 91px;
	height: 91px;
	display: block;
	top: 50%;
	transform: translateY(-50%);
	right: -247px;
	border: 1px solid ${({ theme }) => theme.color.gray};

	position: absolute;

	@media (max-width: 1528px) {
		right: -107px;
	}
	@media (max-width: 1233px) {
		right: -47px;
	}
	@media (max-width: 1144px) {
		display: none;
	}
`;

const StyledQuote = styled.section`
	display: flex;
	justify-content: center;
	margin-top: 112px;
	position: relative;

	@media (max-width: 1144px) {
		margin-top: 44px;
	}
`;

const StyledQuoteContainer = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: flex-end;
`;

const StyledQuoteText = styled.div`
	border: 1px solid ${({ theme }) => theme.color.gray};
	padding: 32px;
	font-weight: 500;
	font-size: 24px;
	line-height: 31px;
	display: inline-block;
	position: relative;
`;
const StyledQuoteAuthor = styled.div`
	border: 1px solid ${({ theme }) => theme.color.gray};
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
	color: ${({ theme }) => theme.color.green};
	font-size: 85px;
	&::after {
		content: '';
		width: 50px;
		height: 50px;
		display: block;
		top: -33px;
		z-index: -1;
		background-color: ${({ theme }) => theme.color.main};
		position: absolute;
	}
`;
const StyledQuoteBottom = styled.span`
	position: absolute;
	bottom: -40px;
	right: 10px;
	z-index: 11;
	color: ${({ theme }) => theme.color.green};
	font-size: 85px;
	&::after {
		content: '';
		width: 50px;
		height: 25px;
		display: block;
		top: -22px;
		z-index: -1;
		background-color: ${({ theme }) => theme.color.main};
		position: absolute;
	}
`;
