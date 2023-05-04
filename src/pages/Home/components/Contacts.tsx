import { FC } from 'react';
import { ContactCard, Title, Text } from 'components/index';
import { IconDots } from 'icons/index';
import styled from 'styled-components';

export const Contacts: FC = () => {
	return (
		<StyledContactsContainer>
			<StyledDots />
			<Title text="contacts" lineWidth="128px" />
			<StyledContactContent>
				<Text text={'contact-subtitle'} />
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
		gap: 10px;
		justify-content: flex-start;
	}
`;

const StyledDots = styled(IconDots)`
	position: absolute;
	top: 94px;
	left: -276px;
	width: 105px;
	height: 105px;
`;
