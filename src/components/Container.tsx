import { FC, ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	max-width: 1028px;
	width: 100%;
	margin: 0 auto;
	height: 100%;
	
`;

interface IContainerProps {
	children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ children }) => {
	return <StyledContainer className="container">{children}</StyledContainer>;
};
