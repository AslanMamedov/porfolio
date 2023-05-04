import { FC } from 'react';
import { ProjectsLists, Title } from 'components/index';
import { IconInlineDots } from 'icons/index';
import styled from 'styled-components';

export const CompleteProjects: FC = () => {
	return (
		<StyledCompleteContaier>
			<StyledIconLeft />
			<Title text={'complete-apps'} />
			<ProjectsLists />
		</StyledCompleteContaier>
	);
};

const StyledCompleteContaier = styled.div`
	margin-top: 68px;
	margin-bottom: 48px;
	position: relative;
	&::after {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		position: absolute;
		border: 1px solid ${({ theme }) => theme.color.gray};
		right: -300px;
		top: 0;
		@media (max-width: 1634px) {
			display: none;
		}
	}
`;

const StyledIconLeft = styled(IconInlineDots)`
	position: absolute;
	left: -186px;
	top: 140px;
	width: 109px;
	height: 49px;
`;
