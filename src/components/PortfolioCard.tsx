import styled from 'styled-components';
import { Anchor } from '.';
import { FC, Fragment } from 'react';

const StyledCardContainer = styled.div`
	width: 331px;
	border: 1px solid ${(props) => props.theme.color.gray};
	/* min-height: 391px; */
	/* display: flex;
	flex-direction: column;
	justify-content: space-between; */
`;

const StyledTop = styled.div``;
const StyledMiddle = styled.div`
	border: 1px solid ${(props) => props.theme.color.gray};
	border-left: none;
	border-right: none;
	min-height: 37px;
	padding: 8px;
	color: ${(props) => props.theme.color.gray};
	width: 100%;
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	/* flex: 1 1 auto; */
`;
const StyledBottom = styled.div`
	padding: 16px;
	/* flex: 1 1 auto; */
	/* display: flex;
	flex-direction: column; */
`;

const StyledTopImage = styled.img`
	width: 100%;
	height: 201px;
	object-fit: cover;
`;

const StyledButtonContainer = styled.div`
	flex: 1 1 auto;
	/* height: 100%; */
	span {
		&:first-child {
			margin-right: 16px;
		}
	}
`;

const StyledCardTitle = styled.h3`
	font-weight: 500;
	font-size: 24px;
	line-height: 31px;
	margin-bottom: 16px;
	word-wrap: break-word;
`;
const StyledCardDescription = styled.p`
	font-weight: 400;
	font-size: 16px;
	line-height: 21px;
	margin-bottom: 16px;
	word-wrap: break-word;
	color: ${(props) => props.theme.color.gray};
`;

interface PortfolioCardProps {
	imgSrc: string;
	tools: string[];
	description: string;
	title: string;
	linkLive: string;
	linkGithub?: string;
	linkType: boolean;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({
	description = '',
	imgSrc = '',
	title = '',
	tools = [],
	linkLive = '',
	linkGithub = undefined,
	linkType = false,
}) => {
	return (
		<StyledCardContainer>
			<StyledTop>
				<StyledTopImage src={imgSrc} alt={title} />
			</StyledTop>
			{tools.length !== 0 && (
				<StyledMiddle>
					{!!tools && tools.map((tool, index) => <Fragment key={index}> {tool}</Fragment>)}
				</StyledMiddle>
			)}

			<StyledBottom>
				{description && <StyledCardTitle>{description}</StyledCardTitle>}
				{title && <StyledCardDescription>{title}</StyledCardDescription>}

				<StyledButtonContainer>
					<Anchor title="Live" to={linkLive} type="primary" icon={'<~>'} linkType={linkType} />
					{linkGithub && (
						<Anchor title="Cached" to={linkGithub} type="lightgray" icon={'>'} linkType={linkType} />
					)}
				</StyledButtonContainer>
			</StyledBottom>
		</StyledCardContainer>
	);
};
