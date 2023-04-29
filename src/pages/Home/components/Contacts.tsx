import { ContactCard, Title } from 'components/index';
import { IconDots } from 'icons/index';
import styled from 'styled-components';

const StyledContactsContainer = styled.section`
	margin-top: 112px;
	margin-bottom: 145px;
	position: relative;
`;

const StyledContactContent = styled.div`
	margin-top: 45px;
	display: flex;
	justify-content: space-between;
`;

const StyledContactText = styled.h3`
	width: 505px;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledDots = styled.span`
	position: absolute;
	top: 94px;
	left: -276px;
	svg {
		width: 105px;
		height: 105px;
	}
`;

export const Contacts = () => {
	return (
		<StyledContactsContainer>
			<StyledDots>
				<IconDots />
			</StyledDots>
			<Title text="contacts" line={true} lineWidth="128px" />
			<StyledContactContent>
				<StyledContactText>
					I’m interested in freelance opportunities. However, if you have other request or question, don’t
					hesitate to contact me
				</StyledContactText>
				<ContactCard />
			</StyledContactContent>
		</StyledContactsContainer>
	);
};
