import { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface ContainerProps {
	children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
	return <StyledContainer className="container">{children}</StyledContainer>;
};

const StyledContainer = styled.section`
	max-width: 1028px;
	width: 100%;
	margin: 0 auto;
	height: 100%;
`;
