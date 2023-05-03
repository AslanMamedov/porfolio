import { InfoCard } from 'components/InfoCard';
import { Figures, Title } from 'components/index';

import styled from 'styled-components';

export const Skills = () => {
	return (
		<StyledSlillsContainer>
			<Title text="skills" lineWidth="239px" />
			<StyledSlillsContent>
				<StyledSlillsLeftSide>
					<Figures />
				</StyledSlillsLeftSide>
				<StyledSlillsRightSide>
					<InfoCard title={'Language'} description={['JavaScript', 'TypeScript']} />
					<InfoCard title={'Databases'} description={['PostgreSQL', 'Mongo']} />
					<InfoCard title={'Other'} description={['HTML', 'CSS', 'EJS', 'SCSS', 'REST']} />
					<InfoCard title={'Tools'} description={['Figma', 'Git']} />
					<InfoCard title={'Frameworks'} description={['React', 'Express.js']} />
					{/* <StyledSkillCardGap>
					</StyledSkillCardGap>
					<StyledSkillCardGap>
					</StyledSkillCardGap> */}
				</StyledSlillsRightSide>
			</StyledSlillsContent>
		</StyledSlillsContainer>
	);
};

const StyledSlillsContainer = styled.section`
	margin-top: 106px;
	@media (max-width: 1144px) {
		margin-top: 44px;
	}
`;

const StyledSlillsContent = styled.div`
	margin-top: 12px;
	display: flex;
	justify-content: space-between;
	padding-left: 32px;
	gap: 59px;
	@media (max-width: 1144px) {
		padding-left: 0;
	}
`;

const StyledSlillsLeftSide = styled.div`
	width: 349px;
	height: 282px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (max-width: 1144px) {
		display: none;
	}
`;
const StyledSlillsRightSide = styled.div`
	width: 584px;
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	-webkit-box-pack: end;
	place-content: flex-end;
	align-content: flex-end;
	@media (max-width: 1144px) {
		justify-content: center;
		width: 100%;
	}
	@media (max-width: 370px) {
		flex-direction: column;
		justify-content: flex-start;
		align-content: flex-start;
	}
`;
