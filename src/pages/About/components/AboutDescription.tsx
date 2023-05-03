import { DotsImage } from 'components/DotsImage';
import { IconInlineDots } from 'icons/index';
import styled from 'styled-components';

export const AboutDescription = () => {
	return (
		<StyledAboutContainer>
			<StyledRightSideIcon />
			<StyledAboutLeftSide>
				<AboutDescription />
			</StyledAboutLeftSide>
			<DotsImage />
		</StyledAboutContainer>
	);
};

const StyledAboutContainer = styled.section`
	display: flex;
	justify-content: space-between;
	position: relative;
	&::before {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		border: 1px solid ${(props) => props.theme.color.gray};
		position: absolute;
		right: -300px;
		top: 112px;
		@media (max-width: 1640px) {
			display: none;
		}
	}
`;

const StyledAboutLeftSide = styled.div`
	width: 518px;
	display: flex;
	flex-direction: column;
	margin-top: 103px;
`;

const StyledRightSideIcon = styled(IconInlineDots)`
	position: absolute;
	left: -200px;
	top: 300px;
	width: 109px;
	height: 49px;
`;
