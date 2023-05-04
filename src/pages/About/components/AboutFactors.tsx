import { FC } from 'react';
import { InfoText, Title } from 'components/index';
import { IconDots, IconFigure } from 'icons/index';
import styled from 'styled-components';

export const AboutFactors: FC = () => {
	return (
		<StyledFunFactorsContainer>
			<Title text="my-fun-facts" />
			<StyledFunContent>
				<StyledFun>
					<InfoText text={'main-image-portfolio'} textLight={'portfolio'} />
				</StyledFun>
				<StyledRightSide>
					<StyledDotsRight />
					<StyledFigureRight />
				</StyledRightSide>
			</StyledFunContent>
			<StyledDotsRightSide />
		</StyledFunFactorsContainer>
	);
};

const StyledFunFactorsContainer = styled.div`
	margin-top: 83px;
	position: relative;
	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 155px;
		height: 155px;
		top: 70px;
		left: -270px;
		border: 1px solid ${({ theme }) => theme.color.gray};
	}
`;

const StyledFunContent = styled.div`
	margin-top: 26px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 162px;
`;

const StyledRightSide = styled.div`
	width: 178px;
	height: 169px;
	position: relative;
	@media (max-width: 990px) {
		display: none;
	}
`;

const StyledDotsRight = styled(IconDots)`
	width: 64px;
	height: 64px;
`;
const StyledFigureRight = styled(IconFigure)`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 113px;
	height: 113px;
`;

const StyledFun = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	width: 800px;
`;

const StyledDotsRightSide = styled(IconDots)`
	position: absolute;
	right: -300px;
	bottom: -100px;
	width: 103px;
	height: 103px;
	@media (max-width: 1638px) {
		display: none;
	}
`;
