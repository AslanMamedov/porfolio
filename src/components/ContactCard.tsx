import { FC } from 'react';
import { IconDiscord, IconEmail } from 'icons/index';
import { SocialLink } from './SocialLink';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const ContactCard: FC = () => {
	const { t } = useTranslation();
	return (
		<StyledContactCardContainer>
			<StyledTitle>{t('message')}</StyledTitle>
			<StyledLinkLists>
				<StyledLinks>
					<SocialLink icon={IconDiscord} text={'Aslan'} />
				</StyledLinks>
				<StyledLinks>
					<SocialLink icon={IconEmail} text={'aslan94mamedov49@gmail.com'} />
				</StyledLinks>
			</StyledLinkLists>
		</StyledContactCardContainer>
	);
};

const StyledContactCardContainer = styled.div`
	min-width: 204px;
	padding: 16px;
	border: 1px solid ${({ theme }) => theme.color.gray};
	@media (max-width: 1144px) {
		margin-top: 12px;
	}
`;

const StyledTitle = styled.span`
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
`;

const StyledLinkLists = styled.ul`
	display: flex;
	margin-top: 16px;
	flex-direction: column;
	gap: 8px;
`;
const StyledLinks = styled.li``;
