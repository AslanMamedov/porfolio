import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { IconArrow } from 'icons/index';

interface StyledArrowProps {
	show: boolean;
}

interface ILanguageProps {
	setShowMenu: (value: boolean) => void;
}

export const Language: FC<ILanguageProps> = ({ setShowMenu }) => {
	const { i18n } = useTranslation();
	const [lang, setLang] = useState<string>(localStorage?.getItem('i18nextLng') || 'en');
	const [show, setShow] = useState<boolean>(false);
	const LanguageRef = useRef<HTMLDivElement | null>(null);
	const langList = useMemo<string[]>(() => ['en', 'ru', 'az'], []);
	const onSelectedHandler = (item: string) => () => {
		setLang(item);
		setShow(true);
		setShowMenu(false);
		i18n.changeLanguage(item);
	};
	const onSelecLanguage = () => {
		setShow((prevState) => !prevState);
	};
	useEffect(() => {
		const handler = (e: MouseEvent) => {
			if (LanguageRef.current && !LanguageRef.current.contains(e.target as Node)) {
				setShow(false);
			}
		};
		document.addEventListener('click', handler);
		return () => document.removeEventListener('click', handler);
	}, [LanguageRef, setShow]);

	return (
		<StyledLanguage className="lang-container lang" onClick={onSelecLanguage} ref={LanguageRef}>
			{lang}
			<StyledArrow show={show} className="lang-container__icon">
				<IconArrow className="lang-container__arrow arrow" />
			</StyledArrow>
			{show && (
				<StyledLangList className="lang-container__lang-list">
					{langList.map((item: string, index) => (
						<StyledLang
							style={{
								backgroundColor: `${item === lang ? '#e0e0e0' : null}`,
								color: `${item === lang ? '#282C33' : null}`,
								fontWeight: 400,
							}}
							className="lang-container__lang-item"
							onClick={onSelectedHandler(item)}
							key={index}
						>
							<StyledLangItem className="lang-container__lang-text">{item}</StyledLangItem>
						</StyledLang>
					))}
				</StyledLangList>
			)}
		</StyledLanguage>
	);
};

const StyledLanguage = styled.div`
	color: ${(props) => props.theme.color.gray};
	cursor: pointer;
	text-transform: uppercase;
	position: relative;
	font-size: 16px;
	font-weight: 600;
	@media (max-width: 854px) {
		font-size: 32px;
		flex: 1 1 auto;
		margin-top: 32px;
	}
	z-index: 11111111111111111111111;
`;

const StyledLangList = styled.ul`
	position: fixed;
	top: 54px;
	z-index: 111111;
	border: 1px solid ${(props) => props.theme.color.grayLight};
	background-color: ${(props) => props.theme.color.main};
	@media (max-width: 854px) {
		top: 414px;
	}
`;

const StyledLang = styled.li`
	font-weight: 400;
	&:hover {
		background-color: ${(props) => props.theme.color.grayLight};
		color: ${(props) => props.theme.color.main};
	}
	&:not(:first-child) {
		margin-top: 8px;
	}
`;

const StyledLangItem = styled.span`
	padding: 0 8px;
	width: 100%;
	height: 100%;
	display: block;
	font-weight: 400;
	&:first-child {
		padding: 8px 8px;
	}
	&:last-child {
		padding: 8px 8px;
	}
`;

const StyledArrow = styled.span<StyledArrowProps>`
	svg {
		transform: ${(props) => (props.show ? 'rotate(180deg)' : 'rotate(0deg)')};
		width: 10px;
		height: 10px;
		margin-left: 4px;
		@media (max-width: 854px) {
			width: 15px;
			height: 15px;
		}
	}
`;
