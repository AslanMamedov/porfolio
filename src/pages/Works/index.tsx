import { Container } from 'components/Container';
import { PortfolioCard } from 'components/PortfolioCard';
import { NavigationTitle, Title } from 'components/index';
import { IconDots, IconInlineDots } from 'icons/index';
import { FC } from 'react';
import styled from 'styled-components';

const StyledWorsHeader = styled.div`
	margin-top: 53px;
`;

const StyledCompleteContaier = styled.div`
	margin-top: 68px;
	position: relative;

	&::after {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		position: absolute;
		border: 1px solid ${(props) => props.theme.color.gray};
		right: -300px;
		top: 0;

		@media (max-width: 1634px) {
			display: none;
		}
	}
`;

const StyledCompleteLists = styled.ul`
	margin-top: 48px;

	display: flex;
	gap: 17px;
	flex-wrap: wrap;
`;
const StyledCompleteProject = styled.li``;

const StyledSmallContaier = styled.div`
	margin-top: 81px;
	margin-bottom: 187px;
	position: relative;
	&::after {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		position: absolute;
		border: 1px solid ${(props) => props.theme.color.gray};
		left: -300px;
		top: -38px;

		@media (max-width: 1634px) {
			display: none;
		}
	}
`;

const StyledSmallProjectLists = styled.ul`
	margin-top: 48px;
	display: flex;
	gap: 17px;
	flex-wrap: wrap;
`;
const StyledSmallProject = styled.li``;

const StyledIconLeft = styled.span`
	position: absolute;
	left: -186px;
	top: 140px;
	svg {
		width: 109px;
		height: 49px;
	}
`;
const StyledIconLeftBottom = styled.span`
	position: absolute;
	left: -186px;
	bottom: -80px;
	svg {
		width: 109px;
		height: 49px;
	}
`;
const StyledIconRight = styled.span`
	position: absolute;
	right: -186px;
	top: 140px;
	svg {
		width: 103px;
		height: 103px;
	}
	@media (max-width: 1634px) {
		display: none;
	}
`;

const Works: FC = () => {
	return (
		<Container>
			<StyledWorsHeader>
				<NavigationTitle subtitle={'List of my projects'} />
				<StyledCompleteContaier>
					<StyledIconLeft>
						<IconInlineDots />
					</StyledIconLeft>
					<Title text={'complete-apps'} />
					<StyledCompleteLists>
						<StyledCompleteProject>
							<PortfolioCard
								imgSrc={'/src/assets/images/porfoliimage.png'}
								tools={['HTML', 'React', 'TS', 'HTML', 'React', 'TS']}
								description={'adasdadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
								title={'asdaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
								linkDemo="/works"
							/>
						</StyledCompleteProject>
					</StyledCompleteLists>
				</StyledCompleteContaier>
				<StyledSmallContaier>
					<StyledIconLeftBottom>
						<IconInlineDots />
					</StyledIconLeftBottom>
					<Title text={'small-projects'} />
					<StyledSmallProjectLists>
						<StyledSmallProject>
							<PortfolioCard
								imgSrc={''}
								tools={['HTML', 'React', 'TS', 'HTML', 'React', 'TS']}
								description={'adasdadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
								title={'asdaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
								linkDemo="/works"
							/>
						</StyledSmallProject>
						<StyledSmallProject>
							<PortfolioCard
								imgSrc={''}
								tools={['HTML', 'React', 'TS', 'HTML', 'React', 'TS']}
								description={'adasdadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
								title={'asdaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
								linkDemo="/works"
							/>
						</StyledSmallProject>
					</StyledSmallProjectLists>
					<StyledIconRight>
						<IconDots />
					</StyledIconRight>
				</StyledSmallContaier>
			</StyledWorsHeader>
		</Container>
	);
};
export default Works;
