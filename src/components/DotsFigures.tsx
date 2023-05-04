import { FC } from 'react';
import styled from 'styled-components';

export const DotsFigures: FC = () => {
	return (
		<StyledDots>
			<StyledDotsList />
			<StyledDotsList />
			<StyledDotsList />
		</StyledDots>
	);
};

const StyledDots = styled.ul`
	display: flex;
	position: absolute;
	right: 0;
	bottom: 19px;

	@media (max-width: 1144px) {
		display: none;
	}
`;

const StyledDotsList = styled.li`
	width: 4px;
	height: 4px;
	border-radius: 100%;
	background-color: ${({ theme }) => theme.color.gray};

	&:not(:first-child) {
		margin-left: 21px;
	}
`;
