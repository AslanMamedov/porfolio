import { FC } from 'react';
import { InfoCardLists, Title } from 'components/index';
import { IconDots } from 'icons/index';
import styled from 'styled-components';

export const AboutSkills: FC = () => {
	return (
		<StyledSlillsContainer>
			<Title text="skills" />
			<StyledSkillsList>
				<StyledRightSideDots />
				<InfoCardLists />
			</StyledSkillsList>
		</StyledSlillsContainer>
	);
};

const StyledRightSideDots = styled(IconDots)`
	position: absolute;
	right: -200px;
	top: 0px;
	width: 103px;
	height: 103px;
	@media (max-width: 1455px) {
		display: none;
	}
`;

const StyledSlillsContainer = styled.div`
	margin-top: 112px;
`;

const StyledSkillsList = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	margin-top: 48px;
	position: relative;
`;
