import { FC } from 'react';
import { ImageProfile } from '.';
import { InfoProfile } from './InfoProfile';
import styled from 'styled-components';

export const MainHeader: FC = () => {
	return (
		<StyledSectionInfo>
			<InfoProfile />
			<ImageProfile />
		</StyledSectionInfo>
	);
};

const StyledSectionInfo = styled.section`
	margin-top: 62px;
	display: flex;
	justify-content: space-between;
	@media (max-width: 1144px) {
		margin-top: 0;
		flex-wrap: wrap;
		justify-content: center;
	}
`;
