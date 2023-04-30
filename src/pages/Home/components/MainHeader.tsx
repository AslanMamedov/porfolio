import styled from 'styled-components';
import { ImageProfile } from '.';
import { InfoProfile } from './InfoProfile';

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
export const MainHeader = () => {
	return (
		<StyledSectionInfo>
			<InfoProfile />
			<ImageProfile />
		</StyledSectionInfo>
	);
};
