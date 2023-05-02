import { InfoCard } from 'components/InfoCard';
import { Container, NavigationTitle, Title } from 'components/index';
import { IconDots, IconFigure, IconInlineDots } from 'icons/index';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledWorsHeader = styled.div`
	margin-top: 53px;
`;

const StyledAboutContainer = styled.section`
	/* margin-top: 112px; */
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
const StyledAboutRightSide = styled.div`
	width: 343px;
	height: 508px;
	position: relative;
	@media (max-width: 900px) {
		display: none;
	}

	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 272px;
		height: 1px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1111;
		background-color: ${(props) => props.theme.color.primary};
	}
`;

const StyledLeftSideContent = styled.div`
	margin-top: 23px;
`;

const StyledAboutTextContaier = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: ${(props) => props.theme.color.gray};
	margin-bottom: 27px;
`;

const StyledTopContent = styled.p`
	display: inline-block;
`;
const StyledMiddleContent = styled.p`
	margin-top: 30px;
	display: inline-block;
`;
const StyledBottomContent = styled.p`
	margin-top: 30px;
	display: inline-block;
`;

const StyledImageDotsTop = styled.span`
	position: absolute;
	top: 56px;
	left: -5px;
	svg {
		width: 84px;
		height: 84px;
	}
`;
const StyledImageDotsBottom = styled.span`
	position: absolute;
	bottom: 172px;
	right: 16px;
	svg {
		width: 104px;
		height: 56px;
	}
`;

const StyledImage = styled.img`
	position: relative;
	width: 100%;
	height: 100%;
`;

const StyledSlillsContainer = styled.div`
	margin-top: 112px;
`;

const StyledSkillsList = styled.ul`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 48px;
	position: relative;
`;

const StyledSkillsItem = styled.li``;

const StyledFunFactorsContainer = styled.div`
	margin-top: 83px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 155px;
		height: 155px;
		top: 70px;
		left: -270px;
		border: 1px solid ${(props) => props.theme.color.gray};
	}
`;

const StyledFunContent = styled.div`
	margin-top: 26px;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 162px;
`;

const StyledPortfolio = styled.div`
	border: 1px solid ${(props) => props.theme.color.gray};
	padding: 8px 34px;
	position: relative;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	display: flex;
	flex-wrap: wrap;
	span {
		margin-right: 4px;
	}

	@media (max-width: 1144px) {
		margin-right: 0;
		width: 354px;
		padding: 8px 34px;
		padding-right: 8px;
	}
`;

const StyledMarkerPortfolio = styled.span`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledRightSide = styled.div`
	width: 178px;
	height: 169px;

	position: relative;

	@media (max-width: 990px) {
		display: none;
	}
`;

const StyledDotsRight = styled.span`
	svg {
		width: 64px;
		height: 64px;
	}
`;
const StyledFigureRight = styled.span`
	position: absolute;
	right: 0;
	bottom: 0;

	svg {
		width: 113px;
		height: 113px;
	}
`;

const StyledFun = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	width: 800px;
`;

const StyledRightSideIcon = styled.span`
	position: absolute;
	left: -200px;
	top: 300px;
	svg {
		width: 109px;
		height: 49px;
	}
`;

const StyledRightSideDots = styled.span`
	position: absolute;
	right: -200px;
	top: 0px;
	svg {
		width: 103px;
		height: 103px;
	}

	@media (max-width: 1455px) {
		display: none;
	}
`;

const StyledDotsRightSide = styled.span`
	position: absolute;
	right: -300px;
	bottom: -100px;
	svg {
		width: 103px;
		height: 103px;
	}
	@media (max-width: 1638px) {
		display: none;
	}
`;

const About = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<StyledWorsHeader>
				<NavigationTitle title={'about-me'} subtitle={'Who am i?'} />
				<StyledAboutContainer>
					<StyledRightSideIcon>
						<IconInlineDots />
					</StyledRightSideIcon>
					<StyledAboutLeftSide>
						<StyledLeftSideContent>
							<StyledAboutTextContaier>
								<StyledTopContent>Hello, i’m Elias!</StyledTopContent>
								<StyledMiddleContent>
									I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop
									responsive websites from scratch and raise them into modern user-friendly web
									experiences.
								</StyledMiddleContent>
								<StyledBottomContent>
									Transforming my creativity and knowledge into a websites has been my passion for
									over a year. I have been helping various clients to establish their presence online.
									I always strive to learn about the newest technologies and frameworks.
								</StyledBottomContent>
							</StyledAboutTextContaier>
						</StyledLeftSideContent>
					</StyledAboutLeftSide>
					<StyledAboutRightSide>
						<StyledImageDotsTop>
							<IconDots />
						</StyledImageDotsTop>
						<StyledImage src="/src/assets/images/Image2.png" alt="" />
						<StyledImageDotsBottom>
							<IconInlineDots />
						</StyledImageDotsBottom>
					</StyledAboutRightSide>
				</StyledAboutContainer>
				<StyledSlillsContainer>
					<Title text="skills" />
					<StyledSkillsList>
						<StyledRightSideDots>
							<IconDots />
						</StyledRightSideDots>
						<StyledSkillsItem>
							<InfoCard title={'Language'} description={['TypeScript', 'Lua', 'Python', 'JavaScript']} />
						</StyledSkillsItem>
						<StyledSkillsItem>
							<InfoCard title={'Databases'} description={['SQLite', 'PostgreSQL', 'Mongo']} />
						</StyledSkillsItem>
						<StyledSkillsItem>
							<InfoCard title={'Other'} description={['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']} />
						</StyledSkillsItem>
						<StyledSkillsItem>
							<InfoCard
								title={'Tools'}
								description={[
									'VSCode',
									'Neovim',
									'Linux',
									'Figma',
									'XFCE',
									'Arch',
									'Git',
									'Font Awesome',
								]}
							/>
						</StyledSkillsItem>
						<StyledSkillsItem>
							<InfoCard
								title={'Frameworks'}
								description={['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']}
							/>
						</StyledSkillsItem>
					</StyledSkillsList>
				</StyledSlillsContainer>
				<StyledFunFactorsContainer>
					<Title text="my-fun-facts" />
					<StyledFunContent>
						<StyledFun>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
							<StyledPortfolio>
								<StyledMarkerPortfolio>{t('main-image-portfolio')}</StyledMarkerPortfolio>{' '}
								{t('portfolio')}
							</StyledPortfolio>
						</StyledFun>
						<StyledRightSide>
							<StyledDotsRight>
								<IconDots />
							</StyledDotsRight>
							<StyledFigureRight>
								<IconFigure />
							</StyledFigureRight>
						</StyledRightSide>
					</StyledFunContent>
					<StyledDotsRightSide>
						<IconDots />
					</StyledDotsRightSide>
				</StyledFunFactorsContainer>
			</StyledWorsHeader>
		</Container>
	);
};
export default About;
