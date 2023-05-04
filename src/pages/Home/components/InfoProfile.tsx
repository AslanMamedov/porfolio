import { FC } from 'react';
import { Anchor, Text } from 'components/index';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const InfoProfile: FC = () => {
	const { t } = useTranslation();
	return (
		<StyledLefSide>
			<StyledInfoTitle>
				{t('name')} {t('is')} <StyledMarkerText>Frontend</StyledMarkerText> {t('and')}
				<StyledMarkerText> Backend {t('developer')}</StyledMarkerText>
			</StyledInfoTitle>
			<Text text={'main-subtitle'} />
			<StyledAnchor title={t('main-link-button')} to="/contacts" variant="primary" />
		</StyledLefSide>
	);
};

const StyledLefSide = styled.div`
	max-width: 538px;
	margin-top: 74px;
	@media (max-width: 1144px) {
		margin-top: 34px;
	}
`;
const StyledInfoTitle = styled.div`
	font-weight: 600;
	font-size: 32px;
	line-height: 42px;
	@media (max-width: 1144px) {
		text-align: center;
	}
`;

const StyledMarkerText = styled.p`
	display: inline;
	color: ${({ theme }) => theme.color.primary};
`;

const StyledAnchor = styled(Anchor)`
	margin-top: 24px;
	@media (max-width: 1144px) {
		display: none;
	}
`;
