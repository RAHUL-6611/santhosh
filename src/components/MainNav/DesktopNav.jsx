import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

function getComputedCss(text) {
	if (text.includes("Departments"))
		return "desktop-nav__nested-sub-menu--departments";
	else return "";
}

function DesktopNav(props) {
	const { menus } = props;

	return (
		<nav className="desktop-nav">
			<div className="desktop-nav__container">
				{menus.map((menu, index) => {
					return (
						<div key={index} className="desktop-nav__link-section">
							{menu.isNormalLink && (
								<a
									href={menu.href}
									className={`desktop-nav__link desktop-nav__main-link ${
										index === menus.length - 1
											? "desktop-nav__main-link--reset"
											: ""
									}`}
								>
									{menu.text}
								</a>
							)}
							{!menu.isNormalLink && (
								<Link
									to={menu.href}
									className={`desktop-nav__link desktop-nav__main-link ${
										index === menus.length - 1
											? "desktop-nav__main-link--reset"
											: ""
									}`}
								>
									{menu.text}
								</Link>
							)}

							{menu.subMenus && (
								<div className="desktop-nav__sub-menu-container">
									<div className="desktop-nav__go-to">
										{menu.text}{" "}
										{menu.isNormalLink && <a href={menu.href}>{">"}</a>}
										{!menu.isNormalLink && <Link to={menu.href}>{">"}</Link>}
									</div>
									<div className="desktop-nav__sub-menu">
										{menu.subMenus.map((subMenu, index) => {
											return (
												<div key={index} className="desktop-nav__seperator">
													{menu.isNormalLink && (
														<a
															href={subMenu.href}
															className="desktop-nav__link desktop-nav__link--sub-menu-title"
														>
															{subMenu.text}
														</a>
													)}
													{!menu.isNormalLink && (
														<Link
															to={subMenu.href}
															className="desktop-nav__link desktop-nav__link--sub-menu-title"
														>
															{subMenu.text}
														</Link>
													)}

													<div
														className={`desktop-nav__nested-sub-menu ${getComputedCss(
															subMenu.text
														)}`}
													>
														{subMenu.subMenus &&
															subMenu.subMenus.map((subMenu, index) => {
																return (
																	<div key={index}>
																		<IoMdArrowDropright />

																		{subMenu.isNormalLink && (
																			<a
																				href={subMenu.href}
																				className="desktop-nav__link"
																			>
																				{subMenu.text}
																			</a>
																		)}
																		{!subMenu.isNormalLink && (
																			<Link
																				to={subMenu.href}
																				className="desktop-nav__link"
																			>
																				{subMenu.text}
																			</Link>
																		)}
																	</div>
																);
															})}
													</div>
												</div>
											);
										})}
									</div>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</nav>
	);
}

export default DesktopNav;
