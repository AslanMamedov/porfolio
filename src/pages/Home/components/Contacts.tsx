import { ContactCard, Title } from 'components/index';
import { IconDots } from 'icons/index';
import styled from 'styled-components';

export const Contacts = () => {
	return (
		<StyledContactsContainer>
			<StyledDots />
			<Title text="contacts" lineWidth="128px" />
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

const StyledContactsContainer = styled.section`
	margin-top: 112px;
	margin-bottom: 145px;
	position: relative;
	@media (max-width: 1144px) {
		margin-top: 40px;
		margin-bottom: 45px;
	}
`;

const StyledContactContent = styled.div`
	margin-top: 45px;
	display: flex;
	justify-content: space-between;
	@media (max-width: 755px) {
		margin-top: 20px;
		flex-wrap: wrap;
		justify-content: flex-start;
	}
`;

const StyledContactText = styled.h3`
	width: 505px;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledDots = styled(IconDots)`
	position: absolute;
	top: 94px;
	left: -276px;
	width: 105px;
	height: 105px;
`;
