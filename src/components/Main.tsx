import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const StyledMain = styled.main`
	/* max-width: 1028px;
	width: 100%; */

	flex: 1 1 auto;
	/* margin: 0 auto; */
`;

export const Main: FC<PropsWithChildren> = ({ children }) => {
	return (
		<StyledMain className="main">
			<Container>{children}</Container>
		</StyledMain>
	);
};
