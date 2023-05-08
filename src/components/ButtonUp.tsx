import { FC } from 'react';
import styled from 'styled-components';

export const ButtonUp: FC = () => {
	return (
		<StyledUpButton
			onClick={() => {
				window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
			}}
		>
			{'~~>'}
		</StyledUpButton>
	);
};

const StyledUpButton = styled.button`
	position: fixed;
	right: 160px;
	top: 500px;
	padding: 15px;
	transform: rotate(-90deg);
	border: 1px solid ${({ theme }) => theme.color.green};
	background-color: ${({ theme }) => theme.color.main};
	color: ${({ theme }) => theme.color.white};
	@media (max-width: 1454px) {
		display: none;
	}
`;
