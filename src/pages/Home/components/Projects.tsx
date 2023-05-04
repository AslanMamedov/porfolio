import { FC } from 'react';
import { ProjectsLists, Title } from 'components/index';
import { IconDots } from 'icons/index';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Projects: FC = () => {
	const { t } = useTranslation();
	return (
		<StyledProjectsContainer>
			<StyledFigureIcon />
			<StyledTopContainer>
				<Title text="projects" lineWidth="511px" />
				<StyledLinkViewAll to={'/works'}>
					{t('view-all')}
					{`~~>`}
				</StyledLinkViewAll>
			</StyledTopContainer>
			<ProjectsLists />
		</StyledProjectsContainer>
	);
};

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
		border: 1px solid ${({ theme }) => theme.color.gray};
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

const StyledLinkViewAll = styled(Link)`
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	color: ${({ theme }) => theme.color.white};
`;

const StyledTopContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledFigureIcon = styled(IconDots)`
	position: absolute;
	left: -150px;
	top: 78px;
	width: 68px;
	height: 68px;

	@media (max-width: 1144px) {
		display: none;
	}
`;
