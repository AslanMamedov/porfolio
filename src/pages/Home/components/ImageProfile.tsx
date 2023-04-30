import { IconDots, IconFigure } from 'icons/index';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledRightSide = styled.div`
	width: 469px;
	height: 100%;

	display: flex;
	flex-direction: column;

	align-items: center;

	@media (max-width: 1144px) {
		margin-top: 24px;
	}
`;

const StyledImage = styled.img`
	z-index: 1111;
	position: absolute;
	max-width: 100%;
	max-height: 100%;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
`;

const StyledIconFigure = styled.span`
	position: absolute;
	z-index: 0;
	top: 84px;
	left: -12px;
	@media (max-width: 1144px) {
		top: 84px;
		left: 6px;
	}
	svg {
		width: 155px;
		height: 155px;

		@media (max-width: 1144px) {
			width: 104px;
			height: 104px;
		}
	}
`;
const StyledIconDots = styled.span`
	position: absolute;
	z-index: 111111;
	bottom: 56px;
	right: 16px;
	svg {
		width: 84px;
		height: 84px;

		@media (max-width: 1144px) {
			width: 56px;
			height: 56px;
		}
	}
`;

const StyledImageContainer = styled.div`
	position: relative;
	width: 457px;
	height: 386px;
	@media (max-width: 1144px) {
		width: 360px;
		height: 304px;
	}
`;

const StyledPortfolio = styled.div`
	width: 402px;
	/* height: 37px; */
	margin-right: 19px;
	border: 1px solid ${(props) => props.theme.color.gray};
	padding: 8px 34px;
	position: relative;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	display: flex;
	flex-wrap: wrap;
	span {
		margin-right: 4px;
	}
	&::after {
		content: '';
		width: 16px;
		height: 16px;
		display: block;
		position: absolute;
		left: 8px;
		top: 50%;

		transform: translateY(-50%);
		background-color: ${(props) => props.theme.color.primary};
	}

	@media (max-width: 1144px) {
		margin-right: 0;
		width: 354px;
		padding: 8px 34px;
		padding-right: 8px;
	}
`;

const StyledMarkerPortfolio = styled.span`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.color.gray};
`;
export const ImageProfile = () => {
	const { t } = useTranslation();
	return (
		<StyledRightSide className="right">
			<StyledImageContainer className="image-container">
				<StyledIconFigure>
					<IconFigure />
				</StyledIconFigure>
				<StyledImage src="/src/assets/images/Image.png" alt="" />
				<StyledIconDots>
					<IconDots />
				</StyledIconDots>
			</StyledImageContainer>
			<StyledPortfolio>
				<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio> {t('portfolio')}
			</StyledPortfolio>
		</StyledRightSide>
	);
};
