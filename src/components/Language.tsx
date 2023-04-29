import { IconArrow } from 'icons/index';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledLanguage = styled.div`
	color: ${(props) => props.theme.color.gray};
	cursor: pointer;
	text-transform: uppercase;
	position: relative;
	font-size: 16px;
	font-weight: 600;
`;

interface ILangList {
	title: string;
}

const StyledLangList = styled.ul`
	position: absolute;
	top: 24px;
	z-index: 11111111111;
	border: 1px solid ${(props) => props.theme.color.grayLight};

	background-color: ${(props) => props.theme.color.main};
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

interface IArrow {
	show: boolean;
}

const StyledArrow = styled.span<IArrow>`
	svg {
		transform: ${(props) => (props.show ? 'rotate(180deg)' : 'rotate(0deg)')};
		width: 10px;
		height: 10px;
		margin-left: 4px;
	}
`;

export const Language: FC = () => {
	const { i18n } = useTranslation();
	const [lang, setLang] = useState<string>(localStorage?.getItem('i18nextLng') || 'en');
	const [show, setShow] = useState<boolean>(false);

	const langList = useMemo(() => {
		return [
			{
				title: 'en',
			},
			{
				title: 'ru',
			},
			{
				title: 'az',
			},
		];
	}, []);

	const onSelectedHandler = (item: ILangList) => () => {
		setLang(item.title);
		setShow(true);
		i18n.changeLanguage(item.title);
	};

	const onSelecLanguage = () => {
		setShow((prevState) => !prevState);
	};

	const LanguageRef = useRef<HTMLDivElement | null>(null);

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
					{langList.map((item: ILangList, index) => (
						<StyledLang
							style={{
								backgroundColor: `${item.title === lang ? '#e0e0e0' : null}`,
								color: `${item.title === lang ? '#282C33' : null}`,
								fontWeight: 400,
							}}
							className="lang-container__lang-item"
							onClick={onSelectedHandler(item)}
							key={index}
						>
							<StyledLangItem className="lang-container__lang-text">{item.title}</StyledLangItem>
						</StyledLang>
					))}
				</StyledLangList>
			)}
		</StyledLanguage>
	);
};
