import { FC } from 'react';
import { IconInlineDots, IconDots } from 'icons/index';
import { Title } from 'components/index';
import { SmallProjectLists } from './SmallProjectLists';
import styled from 'styled-components';

export const SmallProjects: FC = () => {
	return (
		<StyledSmallContaier>
			<StyledIconLeftBottom />
			<Title text={'small-projects'} />
			<SmallProjectLists />
			<StyledIconRight />
		</StyledSmallContaier>
	);
};

const StyledSmallContaier = styled.div`
	margin-top: 81px;
	margin-bottom: 187px;
	position: relative;
	&::after {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		position: absolute;
		border: 1px solid ${({ theme }) => theme.color.gray};
		left: -300px;
		top: -38px;

		@media (max-width: 1634px) {
			display: none;
		}
	}
`;

const StyledIconLeftBottom = styled(IconInlineDots)`
	position: absolute;
	left: -186px;
	bottom: -80px;
	width: 109px;
	height: 49px;
`;
const StyledIconRight = styled(IconDots)`
	position: absolute;
	right: -186px;
	top: 140px;
	width: 103px;
	height: 103px;

	@media (max-width: 1634px) {
		display: none;
	}
`;
