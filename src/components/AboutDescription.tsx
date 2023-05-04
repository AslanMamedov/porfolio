import { FC } from 'react';
import { Text } from 'components/index';
import styled from 'styled-components';

export const AboutDescription: FC = () => {
	return (
		<StyledAboutTextContaier>
			<Text text={'about-name'} />
			<StyledMiddleContent>
				<Text text={'about-description-one'} />
			</StyledMiddleContent>
			<StyledBottomContent>
				<Text text={'about-description-two'} />
			</StyledBottomContent>
		</StyledAboutTextContaier>
	);
};

const StyledAboutTextContaier = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: ${({ theme }) => theme.color.gray};
	margin-bottom: 27px;
`;

const StyledMiddleContent = styled.div`
	margin-top: 30px;
	display: inline-block;
`;
const StyledBottomContent = styled.div`
	margin-top: 30px;
	display: inline-block;
`;
