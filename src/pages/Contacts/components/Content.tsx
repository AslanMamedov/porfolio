import { FC } from 'react';
import { ContactCard, Text } from 'components/index';
import styled from 'styled-components';

export const Content: FC = () => {
	return (
		<StyledInfoContainer>
			<StyledInfoLeftSide>
				<Text text={'contact-subtitle'} />
			</StyledInfoLeftSide>
			<StyledInfoRightSide>
				<ContactCard />
			</StyledInfoRightSide>
		</StyledInfoContainer>
	);
};
const StyledInfoContainer = styled.div`
	margin-top: 46px;
	display: flex;
	justify-content: space-between;
	gap: 117px;

	@media (max-width: 1042px) {
		gap: 17px;
	}

	@media (max-width: 1042px) {
		flex-wrap: wrap;
	}
`;

const StyledInfoLeftSide = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 26px;
	color: ${({ theme }) => theme.color.gray};
	max-width: 505px;
`;
const StyledInfoRightSide = styled.div`
	display: flex;
	gap: 11px;

	@media (max-width: 429px) {
		flex-direction: column;
	}
`;
