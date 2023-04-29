import { Anchor } from 'components/Anchor';
import { Title } from 'components/Title';
import { IconDots, IconInlineDots } from 'icons/index';
import styled from 'styled-components';

const StyledAboutContainer = styled.section`
	margin-top: 112px;
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
		left: -276px;
		top: 135px;
	}
`;

const StyledAboutLeftSide = styled.div`
	width: 518px;
	display: flex;
	flex-direction: column;
`;
const StyledAboutRightSide = styled.div`
	width: 343px;
	height: 508px;
	position: relative;

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

const StyledDots = styled.span`
	svg {
		width: 103px;
		height: 103px;
	}
	position: absolute;
	right: -184px;
	top: 308px;
`;

export const About = () => {
	return (
		<StyledAboutContainer>
			<StyledAboutLeftSide>
				<Title text="about-me" line={true} lineWidth="326px" />
				<StyledLeftSideContent>
					<StyledAboutTextContaier>
						<StyledTopContent>Hello, i’m Elias!</StyledTopContent>
						<StyledMiddleContent>
							I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
							websites from scratch and raise them into modern user-friendly web experiences.
						</StyledMiddleContent>
						<StyledBottomContent>
							Transforming my creativity and knowledge into a websites has been my passion for over a
							year. I have been helping various clients to establish their presence online. I always
							strive to learn about the newest technologies and frameworks.
						</StyledBottomContent>
					</StyledAboutTextContaier>
					<Anchor to={'/about'} title={'Read more'} type={'primary'} icon={'->'} />
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
			<StyledDots>
				<IconDots />
			</StyledDots>
		</StyledAboutContainer>
	);
};
