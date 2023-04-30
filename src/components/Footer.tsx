import styled from 'styled-components';
import { Container } from './Container';
import { Logo } from './Logo';
import { IconDiscord, IconGithub, IconTelegram } from 'icons/index';
import { useTranslation } from 'react-i18next';


const StyledFooter = styled.footer`
	border-top: 1px solid ${(props) => props.theme.color.gray};
	padding: 32px 0;
	position: relative;
`;

const StyledDots = styled.ul`
	display: flex;
	position: absolute;
	right: 0;
	bottom: 19px;

	@media (max-width: 1144px) {
		display: none;
	}
`;

const StyledDotsList = styled.li`
	width: 4px;
	height: 4px;
	border-radius: 100%;
	background-color: ${(props) => props.theme.color.gray};

	&:not(:first-child) {
		margin-left: 21px;
	}
`;

const StyledSocialMediaTitle = styled.h3`
	font-weight: 500;
	font-size: 24px;
	@media (max-width: 1144px) {
		margin-top: 12px;
		text-align: center;
	}
`;

const StyledCopyright = styled.h3`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-top: 48px;
	text-align: center;
	color: ${(props) => props.theme.color.gray};
	@media (max-width: 1144px) {
		word-wrap: break-word;
		margin-top: 12px;
	}
`;

const StyledSocialMediaList = styled.ul`
	display: flex;
	margin-top: 18px;
`;

const StyledSocialMediaItem = styled.li`
	&:not(:first-child) {
		margin-left: 8px;
	}
`;

const StyledSocialMediaLink = styled.a`
	svg {
		width: 32px;
		height: 32px;

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
`;

const StyledSocialMediaContainer = styled.div``;

const StyledTopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 500px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const StyledLogoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledLogo = styled.div`
	display: flex;
`;

const StyledAnchor = styled.a`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-left: 24px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledDescription = styled.h3`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-top: 16px;
	@media (max-width: 479px) {
		text-align: center;
	}
`;

const StyledMain = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 15px;
`;

export const Footer = () => {
	const { t } = useTranslation();

	return (
		<StyledFooter className="footer">
			<Container>
				<StyledMain>
					<StyledTopContainer>
						<StyledLogoContainer>
							<StyledLogo>
								<Logo />
								<StyledAnchor href="/">aslan94mamedov49@gmail.com</StyledAnchor>
							</StyledLogo>

							<StyledDescription>{t('footer-description')}</StyledDescription>
						</StyledLogoContainer>

						<StyledSocialMediaContainer>
							<StyledSocialMediaTitle>{t('footer-social-media')}</StyledSocialMediaTitle>
							<StyledSocialMediaList>
								<StyledSocialMediaItem>
									<StyledSocialMediaLink href="">
										<IconGithub />
									</StyledSocialMediaLink>
								</StyledSocialMediaItem>
								<StyledSocialMediaItem>
									<StyledSocialMediaLink href="">
										<IconTelegram />
									</StyledSocialMediaLink>
								</StyledSocialMediaItem>
								<StyledSocialMediaItem>
									<StyledSocialMediaLink href="">
										<IconDiscord />
									</StyledSocialMediaLink>
								</StyledSocialMediaItem>
							</StyledSocialMediaList>
						</StyledSocialMediaContainer>
					</StyledTopContainer>
					<StyledCopyright>&#169; {t('copyright')}</StyledCopyright>
				</StyledMain>
			</Container>
			<StyledDots>
				<StyledDotsList />
				<StyledDotsList />
				<StyledDotsList />
			</StyledDots>
		</StyledFooter>
	);
};
