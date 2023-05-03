import styled, { css } from 'styled-components';
import { Container } from './Container';
import { Logo } from './Logo';
import { useTranslation } from 'react-i18next';
import { ISocialMedia, SocialLink } from '.';
import { FC, memo } from 'react';
import { DotsFigures } from './DotsFigures';

interface FooterProps {
	socialMedia: ISocialMedia[];
}

export const Footer: FC<FooterProps> = memo(({ socialMedia }) => {
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
								{socialMedia.map(({ icon, href }, index) => (
									<StyledSocialMediaItem key={index} className="social-media__item">
										<SocialLink icon={icon} href={href} target="_blank" />
									</StyledSocialMediaItem>
								))}
							</StyledSocialMediaList>
						</StyledSocialMediaContainer>
					</StyledTopContainer>
					<StyledCopyright>&#169; {t('copyright')}</StyledCopyright>
				</StyledMain>
			</Container>
			<DotsFigures />
		</StyledFooter>
	);
});

const StyledFonts = css`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
`;

const StyledFooter = styled.footer`
	border-top: 1px solid ${(props) => props.theme.color.gray};
	padding: 32px 0;
	position: relative;
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
	${StyledFonts}
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

const StyledSocialMediaContainer = styled.div``;

const StyledLogo = styled(StyledSocialMediaContainer)`
	display: flex;
`;

const StyledTopContainer = styled(StyledLogo)`
	justify-content: space-between;
	@media (max-width: 508px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

const StyledLogoContainer = styled(StyledLogo)`
	display: flex;
	flex-direction: column;
`;

const StyledMain = styled(StyledLogoContainer)`
	height: 100%;
	justify-content: space-between;
	padding: 0 15px;
`;

const StyledAnchor = styled.a`
	${StyledFonts}
	margin-left: 24px;
	color: ${(props) => props.theme.color.gray};
`;

const StyledDescription = styled.h3`
	${StyledFonts}
	margin-top: 16px;
	@media (max-width: 479px) {
		text-align: center;
	}
`;
