import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const Logo: FC = () => {
	const { t } = useTranslation();
	return (
		<StyledLogo className="logo">
			<StyledTitle className="logo__text">{t('name')}</StyledTitle>
		</StyledLogo>
	);
};

const StyledLogo = styled.div`
	display: flex;
	align-items: center;
`;

const StyledTitle = styled.h2`
	margin-left: 8px;
	font-weight: 700;
	font-size: 16px;
	line-height: 21px;
`;
