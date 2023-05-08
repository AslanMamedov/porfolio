import { FC } from 'react';
import { InfoText } from 'components/InfoText';
import { IconDots, IconFigure } from 'icons/index';
import styled from 'styled-components';

export const ImageProfile: FC = () => {
	return (
		<StyledRightSide className="right">
			<StyledImageContainer className="image-container">
				<StyledIconFigure />
				<StyledImage src="/src/assets/images/Image.png" alt="" />
				<StyledIconDots />
			</StyledImageContainer>
			<StyledTextInfo>
				<InfoText box textLight={'portfolio'} text={'main-image-portfolio'} />
			</StyledTextInfo>
		</StyledRightSide>
	);
};

const StyledRightSide = styled.div`
	width: 469px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 1 1 auto;
	@media (max-width: 1144px) {
		margin-top: 24px;
		width: 360px;
	}
	@media (max-width: 365px) {
		margin-right: 0;
		width: 360px;
	}
`;
const StyledImageContainer = styled.div`
	position: relative;
	width: 457px;
	height: 386px;
	@media (max-width: 1144px) {
		width: 305px;
		height: 386px;
	}
`;

const StyledImage = styled.img`
	z-index: 1111;
	position: absolute;
	max-width: 100%;
	max-height: 100%;
	top: 0;
	display: block;
	left: 50%;
	transform: translateX(-50%);
	@media (max-width: 1144px) {
		margin-right: 0;
		width: 340px;
		top: 41px;
	}
`;

const StyledIconFigure = styled(IconFigure)`
	position: absolute;
	z-index: 0;
	top: 84px;
	left: -12px;
	width: 155px;
	height: 155px;
	@media (max-width: 1144px) {
		top: 84px;
		left: 6px;
	}
	@media (max-width: 1144px) {
		width: 104px;
		height: 104px;
	}
`;
const StyledIconDots = styled(IconDots)`
	position: absolute;
	z-index: 111111;
	bottom: 56px;
	right: 16px;
	width: 84px;
	height: 84px;

	@media (max-width: 1144px) {
		width: 56px;
		height: 56px;
	}
`;



const StyledTextInfo = styled.div`
	margin-right: 19px;
	width: 402px;
	@media (max-width: 1144px) {
		margin-right: 0px;
		width: 354px;
		padding: 0 15px;

	}
`;
