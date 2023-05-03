import { ContactCard, Container, NavigationTitle, Title } from 'components/index';
import { IconDots, IconInlineDots, IconTwitter } from 'icons/index';
import styled from 'styled-components';

const StyledContactContainer = styled.div`
	margin-top: 53px;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		display: block;
		width: 155px;
		height: 155px;
		bottom: 80px;
		right: -240px;
		border: 1px solid ${(props) => props.theme.color.gray};

		@media (max-width: 1511px) {
			display: none;
		}
	}
`;

const StyledInfoContainer = styled.div`
	margin-top: 46px;
	display: flex;
	justify-content: space-between;
	gap: 117px;

	@media (max-width: 1042px) {
		gap: 17px;
	}

	@media (max-width: 1042px) {
		flex-wrap: wrap;
	}
`;

const StyledAllMediaContainer = styled.div`
	margin-top: 25px;
	margin-bottom: 90px;
`;

const StyledInfoLeftSide = styled.div`
	font-weight: 500;
	font-size: 16px;
	line-height: 26px;
	color: ${(props) => props.theme.color.gray};
	max-width: 505px;
`;
const StyledInfoRightSide = styled.div`
	display: flex;
	gap: 11px;

	@media (max-width: 429px) {
		flex-direction: column;
	}
`;

const StyledInfo = styled.div`
	width: 186px;
	height: 82px;
	border: 1px solid ${(props) => props.theme.color.gray};
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const StyledSocialMedia = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	svg {
		width: 32px;
		height: 32px;
		margin-right: 8px;
		fill: ${(props) => props.theme.color.gray};

		&:hover {
			circle {
				stroke: ${(props) => props.theme.color.white};
				path {
					stroke: ${(props) => props.theme.color.white};
					fill: ${(props) => props.theme.color.white};
				}
				fill: ${(props) => props.theme.color.white};
			}
			path {
				stroke: ${(props) => props.theme.color.white};
			}
			fill: ${(props) => props.theme.color.white};
		}
	}
	color: ${(props) => props.theme.color.gray};
`;

const StyledSocialMediaList = styled.div`
	display: flex;
	gap: 22px;
	margin-top: 22px;
`;

const StyledTitle = styled.h3`
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
`;
const StyledSubTitle = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledIcon = styled.span`
	position: absolute;
	left: -200px;
	bottom: 30px;
	svg {
		width: 109px;
		height: 49px;
	}
`;

const Contacts = () => {
	return (
		<Container>
			<StyledContactContainer>
				<StyledIcon>
					<IconInlineDots />
				</StyledIcon>
				<NavigationTitle  subtitle={'Who am i?'} />
				<StyledInfoContainer>
					<StyledInfoLeftSide>
						I’m interested in freelance opportunities. However, if you have other request or question, don’t
						hesitate to contact me
					</StyledInfoLeftSide>
					<StyledInfoRightSide>
						<StyledInfo>
							<StyledTitle>Support me here</StyledTitle>
							<StyledSubTitle>4149500120690030</StyledSubTitle>
						</StyledInfo>
						<ContactCard />
					</StyledInfoRightSide>
				</StyledInfoContainer>
				<StyledAllMediaContainer>
					<Title text="all-media" />
					<StyledSocialMediaList>
						<StyledSocialMedia>
							<IconTwitter />
							@elias
						</StyledSocialMedia>
						<StyledSocialMedia>
							<IconTwitter />
							@elias
						</StyledSocialMedia>
					</StyledSocialMediaList>
				</StyledAllMediaContainer>
			</StyledContactContainer>
		</Container>
	);
};
export default Contacts;
