import { PortfolioCard } from 'components/PortfolioCard';
import { Title } from 'components/index';
import { IconDots } from 'icons/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledProjectsContainer = styled.section`
	margin-top: 74px;
	position: relative;

	&::after {
		content: '';
		width: 155px;
		height: 155px;
		display: block;
		position: absolute;
		right: -400px;
		top: 50%;
		border: 1px solid ${(props) => props.theme.color.gray};
		@media (max-width: 1144px) {
			display: none;
		}
		@media (max-width: 1528px) {
			display: none;
		}
		@media (max-width: 1669px) {
			right: -200px;
		}
		@media (max-width: 1233px) {
			display: none;
		}
	}
`;

const StyledLinkViewAll = styled.span`
	a {
		font-weight: 500;
		font-size: 16px;
		line-height: 21px;
		color: ${(props) => props.theme.color.white};
	}
`;

const StyledTopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledCardContainer = styled.div`
	margin-top: 48px;
	display: flex;

	/* justify-content: center; */
	flex-wrap: wrap;
	gap: 17px;
	align-items: baseline;
`;

const StyledFigureIcon = styled.span`
	position: absolute;
	left: -150px;
	top: 78px;
	svg {
		width: 68px;
		height: 68px;
	}
	@media (max-width: 1144px) {
		display: none;
	}
`;

export const Projects = () => {
	return (
		<StyledProjectsContainer>
			<StyledFigureIcon>
				<IconDots />
			</StyledFigureIcon>
			<StyledTopContainer>
				<Title text="projects" line={true} lineWidth="511px" />
				<StyledLinkViewAll>
					<Link to={'/works'}>View all {`~~>`}</Link>
				</StyledLinkViewAll>
			</StyledTopContainer>
			<StyledCardContainer>
				<PortfolioCard
					linkType={true}
					imgSrc={'/src/assets/images/porfoliimage.png'}
					tools={['HTML', 'React', 'TS', 'HTML', 'React', 'TS']}
					description={'adasdadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
					title={'asdaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
					linkLive="/works"
				/>
			</StyledCardContainer>
		</StyledProjectsContainer>
	);
};
