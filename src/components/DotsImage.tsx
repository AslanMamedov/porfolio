import { IconDots, IconInlineDots } from 'icons/index';
import { FC } from 'react';
import styled from 'styled-components';

export const DotsImage: FC = () => {
	return (
		<DotsImageContainer>
			<StyledImageDotsTop />
			<StyledImage src="/src/assets/images/Image2.png" alt="" />
			<StyledImageDotsBottom />
		</DotsImageContainer>
	);
};

const DotsImageContainer = styled.div`
	width: 343px;
	height: 508px;
	position: relative;
	@media (max-width: 900px) {
		display: none;
	}

	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 272px;
		height: 1px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1111;
		background-color: ${(props) => props.theme.color.primary};
	}
`;

const StyledImageDotsTop = styled(IconDots)`
	position: absolute;
	top: 56px;
	left: -5px;
	width: 84px;
	height: 84px;
	z-index: 11111;
`;
const StyledImageDotsBottom = styled(IconInlineDots)`
	position: absolute;
	bottom: 172px;
	right: 16px;
	width: 104px;
	height: 56px;
`;

const StyledImage = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
`;
