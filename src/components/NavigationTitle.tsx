import { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
	font-weight: 600;
	font-size: 32px;
	line-height: 42px;
`;

const StyledLine = styled.span`
	font-weight: 600;
	font-size: 32px;
	line-height: 42px;
	color: ${(props) => props.theme.color.primary};
`;
const StyledSubtitle = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-top: 14px;
`;

interface NavigationTitleProps {
	title: string;
	subtitle: string;
}

export const NavigationTitle: FC<NavigationTitleProps> = ({ title, subtitle }) => {
	return (
		<StyledTitle>
			<StyledLine>/</StyledLine>
			{title} <StyledSubtitle>{subtitle}</StyledSubtitle>
		</StyledTitle>
	);
};
