import { FC } from 'react';
import styled from 'styled-components';

export interface InfoCardProps {
	title: string;
	description: string[];
}
export const InfoCard: FC<InfoCardProps> = ({ description, title }) => {
	return (
		<StyledInfoCardContainer>
			<StyledInfoTitle>{title}</StyledInfoTitle>
			<StyledInfoDescription>
				{!!description.length &&
					description.map((desc, index) => (
						<StyledInfoDescriptionLists key={index}> {desc}</StyledInfoDescriptionLists>
					))}
			</StyledInfoDescription>
		</StyledInfoCardContainer>
	);
};

const StyledInfoCardContainer = styled.div`
	width: 178px;
	align-self: flex-start;
	border: 1px solid ${({ theme }) => theme.color.gray};
`;

const StyledInfoTitle = styled.h3`
	padding: 8px;
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
`;

const StyledInfoDescription = styled.div`
	border-top: 1px solid ${({ theme }) => theme.color.gray};
	padding: 8px;
	font-weight: 400;
	font-size: 16px;
	color: ${({ theme }) => theme.color.gray};
	line-height: 21px;
	width: 100%;
`;

const StyledInfoDescriptionLists = styled.span`
	display: inline;
	width: 100%;
`;
