import styled from "styled-components";
import { ImageProfile } from ".";
import { InfoProfile } from "./InfoProfile";

const StyledSectionInfo = styled.section`
	margin-top: 62px;
	display: flex;
	justify-content: space-between;
	height: 423px;
`;
export const MainHeader = () => {
	return (
		<StyledSectionInfo>
			<InfoProfile />
			<ImageProfile />
		</StyledSectionInfo>
	);
};
