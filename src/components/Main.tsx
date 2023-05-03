import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Container } from './Container';

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
