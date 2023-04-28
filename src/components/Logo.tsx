import { IconLogo } from 'icons/index';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const StyledLogo = styled.div`
	display: flex;
	align-items: center;
`;

const StyledTitle = styled.h2`
	margin-left: 8px;
`;
export const Logo = () => {
	const { t } = useTranslation();
	return (
		<StyledLogo className="logo">
			<IconLogo className="logo__icon" />
			<StyledTitle className="logo__text">{t('name')}</StyledTitle>
		</StyledLogo>
	);
};
