import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface NavigationTitleProps {
	subtitle?: string;
}

export const NavigationTitle: FC<NavigationTitleProps> = memo(({ subtitle = undefined }) => {
	const { t } = useTranslation();
	const location = useLocation();

	return (
		<StyledTitle>
			<StyledLine>/</StyledLine>
			{t(`${location.pathname.split('/')[1]}`)} {subtitle && <StyledSubtitle>{t(subtitle)}</StyledSubtitle>}
		</StyledTitle>
	);
});

const StyledFonts = css`
	font-weight: 600;
	font-size: 32px;
	line-height: 42px;
`;

const StyledTitle = styled.div`
	${StyledFonts}
`;
const StyledLine = styled.span`
	${StyledFonts}
	color: ${({ theme }) => theme.color.primary};
`;
const StyledSubtitle = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-top: 14px;
`;
