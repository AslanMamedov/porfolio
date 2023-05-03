import { IconDiscord, IconEmail } from 'icons/index';
import styled from 'styled-components';
import { SocialLink } from './SocialLink';

export const ContactCard = () => {
	return (
		<StyledContactCardContainer>
			<StyledTitle>Mssage me here</StyledTitle>
			<StyledLinkLists>
				<StyledLinks>
					<SocialLink icon={IconDiscord} text={'!Aslan'} />
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
	border: 1px solid ${(props) => props.theme.color.gray};
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
