import React, { useCallback, useState } from "react";
import { FaArrowCircleRight, FaArrowLeft, FaTimesCircle } from "react-icons/fa";

import "../SearchInput/SearchInput.css";
import SearchInput from "../SearchInput";

import "./MainNav.css";

function MenuItem({ menu, handleNavigate }) {
	return (
		<li className="mobile-nav__item">
			<a href={menu.href} className="mobile-nav__link">
				{menu.text}
			</a>
			{menu.subMenus ? (
				<span onClick={handleNavigate} className="mobile-nav__right-icon">
					<FaArrowCircleRight className="mobile-nav__right-arrow" />
				</span>
			) : null}
		</li>
	);
}

function MobileNav(props) {
	const { menus, showMobileNav, onCloseMenuClick } = props;
	const [currentMenuTitles, setCurrentMenuTitles] = useState(["Main Menu"]);
	const [currentMenus, setCurrentMenus] = useState([menus]);

	const pushMenu = useCallback(
		(title, menu) => {
			setCurrentMenuTitles((prvsTitles) => [...prvsTitles, title]);
			setCurrentMenus((prvsMenu) => [...prvsMenu, menu]);
		},
		[setCurrentMenuTitles, setCurrentMenus]
	);

	const popMenu = useCallback(() => {
		setCurrentMenuTitles((prvsTitles) =>
			prvsTitles.slice(0, prvsTitles.length - 1)
		);
		setCurrentMenus((prvsMenu) => prvsMenu.slice(0, prvsMenu.length - 1));
	}, [setCurrentMenuTitles, setCurrentMenus]);

	const handleOnSubmit = (e) => {
		e.preventDefault();
	};

	if (!showMobileNav) return null;

	return (
		<nav className="mobile-nav__container">
			<div className={currentMenus.length > 1 ? "mobile-nav__grid" : ""}>
				<div
					className="mobile-nav__back-btn"
					style={{ display: currentMenus.length > 1 ? "flex" : "none" }}
					onClick={popMenu}
				>
					<FaArrowLeft />
				</div>

				<div className="mobile-nav__main">
					<div className="mobile-nav__body">
						<ul className="mobile-nav__list">
							<li className="mobile-nav__item mobile-nav__item--search">
								<SearchInput
									onSubmit={handleOnSubmit}
									className="mobile-search"
								/>
							</li>
							<li className="mobile-nav__item mobile-nav__item--title">
								{currentMenuTitles[currentMenuTitles.length - 1]}
							</li>
							{currentMenus[currentMenus.length - 1].map((menu, index) => {
								return (
									<MenuItem
										key={index}
										menu={menu}
										handleNavigate={() => pushMenu(menu.text, menu.subMenus)}
									/>
								);
							})}
						</ul>
					</div>

					<div className="mobile-nav__footer">
						<FaTimesCircle
							className="mobile-nav__close-icon"
							onClick={onCloseMenuClick}
						/>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default MobileNav;
