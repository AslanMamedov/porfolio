import { FC } from 'react';
import styled from 'styled-components';

const StyledInfoCardContainer = styled.div`
	width: 178px;
	align-self: flex-start;
	border: 1px solid ${(props) => props.theme.color.gray};
`;

const StyledInfoTitle = styled.h3`
	padding: 8px;
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
`;

const StyledInfoDescription = styled.div`
	border: 1px solid ${(props) => props.theme.color.gray};
	border-left: none;
	border-right: none;
	border-bottom: none;
	padding: 8px;
	word-break: break-all;
	font-weight: 400;
	font-size: 16px;
	color: ${(props) => props.theme.color.gray};
	line-height: 21px;
`;

interface InfoCardProps {
	title: string;
	description: string[];
}

const StyledInfoDescriptionLists = styled.span``;

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
