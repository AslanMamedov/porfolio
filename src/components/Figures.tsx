import { IconDots, IconFigure } from 'icons/index';
import { FC, Fragment } from 'react';
import styled from 'styled-components';

export const Figures: FC = () => {
	return (
		<Fragment>
			<StyledFiguresTop>
				<StyledFiguresDotsTop>
					<IconDots />
				</StyledFiguresDotsTop>
				<StyledFiguresBoxBig />
			</StyledFiguresTop>
			<StyledFiguresBottom>
				<StyledFiguresFigureBottom>
					<IconFigure />
				</StyledFiguresFigureBottom>
				<StyledFiguresDotsBottom>
					<IconDots />
				</StyledFiguresDotsBottom>
				<StyledFiguresBoxSmall />
			</StyledFiguresBottom>
		</Fragment>
	);
};

const StyledFiguresTop = styled.div`
	display: flex;
	justify-content: space-between;
`;
const StyledFiguresBottom = styled(StyledFiguresTop)``;

const StyledFiguresBoxBig = styled.span`
	width: 86px;
	height: 86px;
	display: block;
	margin-right: 36px;
	border: 1px solid ${(props) => props.theme.color.gray};
`;
const StyledFiguresBoxSmall = styled(StyledFiguresBoxBig)`
	width: 52px;
	height: 52px;
	margin-top: 50px;
`;
const StyledFiguresDotsTop = styled.span`
	margin-top: 50px;
	svg {
		width: 63px;
		height: 63px;
	}
`;
const StyledFiguresFigureBottom = styled.span`
	padding-top: 26px;
	svg {
		width: 113px;
		height: 113px;
	}
`;
const StyledFiguresDotsBottom = styled.span`
	svg {
		width: 63px;
		height: 63px;
	}
`;
