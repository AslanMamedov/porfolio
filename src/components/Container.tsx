import { motion } from 'framer-motion';
import { FC, ReactNode, Ref, forwardRef } from 'react';
import styled from 'styled-components';

interface ContainerProps {
	children: ReactNode;
}

const ContainerMotion: FC<ContainerProps> = forwardRef(({ children }, ref: Ref<HTMLSelectElement>) => {
	return (
		<StyledContainer className="container" ref={ref}>
			{children}
		</StyledContainer>
	);
});

export const Container = motion(ContainerMotion);

const StyledContainer = styled.section`
	max-width: 1028px;
	width: 100%;
	margin: 0 auto;
	height: 100%;
`;
