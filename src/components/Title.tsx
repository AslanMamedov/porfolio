import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface StyledStyledLineProps {
	lineWidth?: string;
}

interface TitleProps {
	text: string;
	lineWidth?: string;
}

export const Title: FC<TitleProps> = ({ text = '', lineWidth = '' }) => {
	const { t } = useTranslation();

	return (
		<StyledTitle>
			{text && (
				<>
					<StyledHash>#</StyledHash>
					{t(text)} {!!lineWidth && <StyledLine lineWidth={lineWidth} />}
				</>
			)}
		</StyledTitle>
	);
};

const StyledTitle = styled.div`
	font-weight: 500;
	font-size: 32px;
	line-height: 42px;
	display: inline-flex;
	align-items: center;
`;

const StyledHash = styled.span`
	color: ${({ theme }) => theme.color.primary};
`;

const StyledLine = styled.span<StyledStyledLineProps>`
	width: ${({ lineWidth }) => lineWidth};
	flex: 1 1 auto;
	@media (max-width: 1144px) {
		width: 0;
	}
	height: 1px;
	margin-left: 16px;
	background-color: ${({ theme }) => theme.color.primary};
`;
