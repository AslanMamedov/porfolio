import { FC } from 'react';
import { SocialLink } from './SocialLink';
import { useTranslation } from 'react-i18next';
import { MdEmail } from 'react-icons/md';
import { ImLocation2 } from 'react-icons/im';
import { AiFillPhone } from 'react-icons/ai';
import styled from 'styled-components';

export const ContactCard: FC = () => {
	const { t } = useTranslation();
	return (
		<StyledContactCardContainer>
			<StyledTitle>{t('message')}</StyledTitle>
			<StyledLinkLists>
				<StyledLinks
					icon={ImLocation2}
					text={'Azerbaijan-Baku'}
					href="https://goo.gl/maps/6op5FKWshfRYgdA4A"
					target="_blank"
				/>
				<StyledLinks icon={AiFillPhone} text={'+994(55)385-74-84'} href="tel:994553857484" />

				<StyledLinks
					icon={MdEmail}
					text={'aslan94mamedov49@gmail.com'}
					href="mailto:aslan94mamedov49@gmail.com"
				/>
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

const StyledLinkLists = styled.div`
	display: flex;
	margin-top: 16px;
	flex-direction: column;
	gap: 8px;
`;
const StyledLinks = styled(SocialLink)``;
