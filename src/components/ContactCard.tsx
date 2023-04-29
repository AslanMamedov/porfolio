import { IconDiscord, IconEmail } from 'icons/index';
import styled from 'styled-components';

const StyledContactCardContainer = styled.div`
	width: 204px;
	padding: 16px;
	border: 1px solid ${(props) => props.theme.color.gray};
`;

const StyledTitle = styled.span`
	font-weight: 600;
	font-size: 16px;
	line-height: 21px;
`;

const StyledLinkLists = styled.ul`
	display: flex;
	margin-top: 16px;
	flex-direction: column;
	gap: 8px;
`;
const StyledLinks = styled.li``;

const StyledLink = styled.a`
	display: flex;
	align-items: center;
	cursor: pointer;
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

export const ContactCard = () => {
	return (
		<StyledContactCardContainer>
			<StyledTitle>Mssage me here</StyledTitle>
			<StyledLinkLists>
				<StyledLinks>
					<StyledLink href="">
						<IconDiscord />
						!Elias#3519
					</StyledLink>
				</StyledLinks>
				<StyledLinks>
					<StyledLink href="">
						<IconEmail />
						elias@elias.me
					</StyledLink>
				</StyledLinks>
			</StyledLinkLists>
		</StyledContactCardContainer>
	);
};
