import { FC, PropsWithChildren } from 'react';
import { Container } from './Container';
import styled from 'styled-components';

export const Main: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledMain className="main">
			<Container>{children}</Container>
		</StyledMain>
	);
};

const StyledMain = styled.main`
	flex: 1 1 auto;
	padding: 0 15px;
	width: 100%;
`;
