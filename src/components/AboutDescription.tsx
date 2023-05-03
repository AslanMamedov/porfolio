import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export const AboutDescription = () => {
	const { t } = useTranslation();
	return (
		<StyledAboutTextContaier>
			<StyledTopContent>Hello, i’m Elias!</StyledTopContent>
			<StyledMiddleContent>
				I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
				scratch and raise them into modern user-friendly web experiences.
			</StyledMiddleContent>
			<StyledBottomContent>
				Transforming my creativity and knowledge into a websites has been my passion for over a year. I have
				been helping various clients to establish their presence online. I always strive to learn about the
				newest technologies and frameworks.
			</StyledBottomContent>
		</StyledAboutTextContaier>
	);
};

const StyledAboutTextContaier = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 26px;
	color: ${(props) => props.theme.color.gray};
	margin-bottom: 27px;
`;

const StyledTopContent = styled.p`
	display: inline-block;
`;
const StyledMiddleContent = styled.p`
	margin-top: 30px;
	display: inline-block;
`;
const StyledBottomContent = styled.p`
	margin-top: 30px;
	display: inline-block;
`;
