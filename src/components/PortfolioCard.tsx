import { FC, Fragment } from 'react';
import styled from 'styled-components';
import { Anchor } from './Anchor';

export interface PortfolioCardProps {
	imgSrc?: string;
	tools: string[];
	description: string;
	title: string;
	linkDemo?: string;
	linkCode?: string;
}

export const PortfolioCard: FC<PortfolioCardProps> = ({
	description = '',
	imgSrc = undefined,
	title = '',
	tools = [],
	linkDemo = undefined,
	linkCode = undefined,
}) => {
	return (
		<StyledCardContainer>
			{imgSrc && <StyledTopImage src={imgSrc} alt={title} />}
			{!!tools.length && (
				<StyledMiddle>
					{tools.map((tool, index) => (
						<Fragment key={index}> {tool}</Fragment>
					))}
				</StyledMiddle>
			)}
			<StyledBottom>
				{title && <StyledCardTitle>{title}</StyledCardTitle>}
				{description && <StyledCardDescription>{description}</StyledCardDescription>}

				<StyledButtonContainer>
					{linkDemo && (
						<Anchor
							target="_blank"
							title={'demo'}
							to={linkDemo}
							type="primary"
							icon={'<~>'}
							variant="primary"
						/>
					)}
					{linkCode && (
						<Anchor
							title="code"
							to={linkCode}
							type="lightgray"
							icon={'>'}
							target="_blank"
							variant="lightgray"
						/>
					)}
				</StyledButtonContainer>
			</StyledBottom>
		</StyledCardContainer>
	);
};

const StyledCardContainer = styled.div`
	width: 331px;
	border: 1px solid ${({ theme }) => theme.color.gray};
`;

const StyledMiddle = styled.div`
	color: ${({ theme }) => theme.color.gray};
	width: 100%;
	padding: 8px;
	font-size: 16px;
	font-weight: 400;
	min-height: 37px;
	line-height: 21px;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;
const StyledBottom = styled.div`
	padding: 16px;
`;

const StyledTopImage = styled.img`
	width: 100%;
	height: 201px;
	display: block;
	object-fit: cover;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray};
`;

const StyledButtonContainer = styled.div`
	flex: 1 1 auto;
	a {
		&:first-child {
			margin-right: 16px;
		}
	}
`;

const StyledCardTitle = styled.h3`
	font-size: 24px;
	font-weight: 500;
	line-height: 31px;
	margin-bottom: 16px;
	word-wrap: break-word;
`;
const StyledCardDescription = styled.p`
	color: ${({ theme }) => theme.color.gray};
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
	margin-bottom: 16px;
	word-wrap: break-word;
`;
