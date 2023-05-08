import { FC } from 'react';
import { Anchor, Text } from 'components/index';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const variants = {
	hidden: {
		x: -1000,
		opacity: 0,
	},
	visible: (custom: number) => ({ x: 0, opacity: 1, transition: { delay: custom * 0.4 } }),
};

export const InfoProfile: FC = () => {
	const { t } = useTranslation();

	return (
		<StyledLefSide>
			<StyledInfoTitle>
				{t('name')} {t('is')} <StyledMarkerText>Frontend</StyledMarkerText> {t('and')}
				<StyledMarkerText> Backend {t('developer')}</StyledMarkerText>
			</StyledInfoTitle>

			<Text text={'main-subtitle'} />
			<StyledAnchorContainer>
				<StyledAnchor
					initial={'hidden'}
					animate={'visible'}
					variants={variants}
					custom={1}
					title={t('main-link-button')}
					to="/contacts"
					variant="primary"
				/>
				<StyledDownload
					initial={'hidden'}
					animate={'visible'}
					variants={variants}
					custom={2}
					href="/public/aslan_mammadov.pdf"
					download={'aslan_mammadov.pdf'}
					variant="lightgray"
				>
					Download CV
				</StyledDownload>
			</StyledAnchorContainer>
		</StyledLefSide>
	);
};

const StyledAnchorContainer = styled(motion.div)`
	display: flex;
	gap: 16px;
	align-items: center;
`;

const StyledLefSide = styled.div`
	max-width: 538px;
	margin-top: 74px;
	@media (max-width: 1144px) {
		margin-top: 34px;
	}
`;
const StyledInfoTitle = styled(motion.div)`
	font-weight: 600;
	font-size: 32px;
	line-height: 42px;
	margin-bottom: 31px;

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
interface StyledAnchorProps {
	variant: 'primary' | 'lightgray';
}

const StyledDownload = styled(motion.a)<StyledAnchorProps>`
	padding: 10px 16px;
	height: 38px;
	display: inline-block;
	cursor: pointer;
	color: ${({ theme, variant }) => (variant === 'primary' ? theme.color.white : theme.color.gray)};
	border: 1px solid ${({ theme, variant }) => (variant === 'primary' ? theme.color.primary : theme.color.gray)};
	&:hover {
		background: ${({ theme, variant }) => (variant === 'primary' ? theme.color.primaryrgba : theme.color.grayrbga)};
	}
	margin-top: 24px;
	@media (max-width: 1144px) {
		display: none;
	}
`;
