import { FC } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 32px;
	line-height: 42px;
	display: flex;
	align-items: center;
`;

const StyledHash = styled.span`
	color: ${(props) => props.theme.color.primary};
`;

interface StyledLine {
	lineWidth?: string;
}

const StyledLine = styled.span<StyledLine>`
	width: ${(props) => props.lineWidth};
	height: 1px;
	margin-left: 16px;
	background-color: ${(props) => props.theme.color.primary};
`;
interface TitleProps {
	text: string;
	line?: boolean;
	lineWidth?: string;
}

export const Title: FC<TitleProps> = ({ text, line, lineWidth }) => {
	return (
		<StyledTitle>
			<StyledHash>#</StyledHash>
			{text} {line && <StyledLine lineWidth={lineWidth} />}
		</StyledTitle>
	);
};
