import { FC, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Language } from './Language';
import { useTranslation } from 'react-i18next';
import { Logo } from './Logo';

const StyledNav = styled.nav`
	padding-top: 32px;
	display: flex;
	justify-content: space-between;
`;

const StyledLinkLists = styled.ul`
	display: flex;
`;

const StyledLink = styled.li`
	&:not(:first-child) {
		margin-left: 32px;
	}
	&:last-child {
		margin-right: 32px;
	}
	/* a {
		&:hover {
			color: ${(props) => props.theme.color.white};
		}
	} */
	/* a {
		cursor: pointer;
		color: ${(props) => props.theme.color.gray};
	} */
`;

const StyledHash = styled.span`
	color: ${(props) => props.theme.color.primary};
	font-weight: 500;
`;

const StyledContainer = styled.div`
	display: flex;
`;

export const Navigation: FC = () => {
	const { t } = useTranslation();
	const links = useMemo(() => {
		return [
			{
				path: '/',
				title: t('home'),
			},
			{
				path: '/works',
				title: t('works'),
			},
			{
				path: '/about',
				title: t('about'),
			},
			{
				path: '/contacts',
				title: t('contacts'),
			},
		];
	}, [t]);

	return (
		<StyledNav className="nav">
			<Logo />
			<StyledContainer className="nav__container">
				<StyledLinkLists className="nav__link-list">
					{links.map((link, index) => (
						<StyledLink key={index} className="nav__link-item">
							<NavLink
								to={link.path}
								style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#ABB2BF' })}
							>
								<StyledHash>#</StyledHash>
								{link.title}
							</NavLink>
						</StyledLink>
					))}
				</StyledLinkLists>
				<Language />
			</StyledContainer>
		</StyledNav>
	);
};
