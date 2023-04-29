import { Anchor } from 'components/index';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
const StyledLefSide = styled.div`
	width: 538px;
	margin-top: 74px;
`;
const StyledInfoTitle = styled.div`
	font-weight: 600;
	font-size: 32px;
	line-height: 42px;
`;

const StyledMarkerText = styled.p`
	display: inline;
	color: ${(props) => props.theme.color.primary};
`;

const StyledSubTitle = styled.h2`
	margin-top: 32px;
	font-weight: 400;
	font-size: 16px;
	line-height: 25px;
	width: 508px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledAnchor = styled.div`
	margin-top: 24px;
`;

export const InfoProfile = () => {
	const { t } = useTranslation();
	return (
		<StyledLefSide>
			<StyledInfoTitle>
				{t('name')} {t('is')} <StyledMarkerText>Frontend</StyledMarkerText> {t('and')}
				<StyledMarkerText> Backend {t('developer')}</StyledMarkerText>
			</StyledInfoTitle>
			<StyledSubTitle>{t('main-subtitle')}</StyledSubTitle>
			<StyledAnchor>
				<Anchor title={t('main-link-button')} to="contacts" type="primary" />
			</StyledAnchor>
		</StyledLefSide>
	);
};
