import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalState } from "../Data/Context";
import { BiCog, BiLogIn } from "react-icons/bi";
import logo from "../Assets/logo.png";
import "../Styles/Sidebar.css";
// import "../Styles/OrgAuth.css";
import { Navbar } from "reactstrap";
import logo2 from "../Assets/logo.png";
import { BsChevronRight } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

export let CapitalizeFirst = text => {
	return text.replace(/\b\w/g, m => {
		return m.toUpperCase();
	});
};

const Sidebar = () => {
	const {
		sidebarList,
		sidebarListUser,
		// logoutUser,
		auth,
		getSetTempUser,
	} = useContext(GlobalState);
	let location = useLocation(),
		navigate = useNavigate(),
		[sidebarState, setSidebarState] = useState(null);

	useEffect(() => {
		if (auth?.temp_auth === "agent") {
			setSidebarState(sidebarList);
		} else if (auth?.temp_auth === "user") {
			setSidebarState(sidebarListUser);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [auth?.temp_auth]);

	let menuList = (item, index) => (
		<li
			title={item?.name}
			className={`nav-link position-relative ${
				location.pathname.includes(item.url) ? "headerActive" : ""
			} ${item?.type === "button" ? "button" : ""}`}
			key={index}>
			{item?.counter > 0 && (
				<FaCircle
					className="text-danger position-absolute"
					style={{ top: "10px", right: "7px" }}
				/>
			)}
			{item?.type === "button" ? (
				<>
					<span className="myCursor nav-item dropdown post-options menuBtn">
						<span
							id="moreLink"
							data-bs-toggle="dropdown"
							className="menuBtn myCursor">
							{item.icon}
							<span className="text nav-text text-capitalize">{item.name}</span>
						</span>
						<span className="dropdown-menu" aria-labelledby="moreLink">
							{item?.listArr?.map((list, i) => (
								<div
									key={i}
									className="dropdown-item d-flex align-items-center my-1 myCursor text-capitalize text-center d-flex justify-content-center">
									{list.type === "button" ? (
										item.name
									) : (
										<Link
											to={list?.url}
											className="text-decoration-none text-dark">
											{list?.name}
										</Link>
									)}
								</div>
							))}
						</span>
					</span>
				</>
			) : (
				<Link to={item?.url}>
					{item?.icon}
					<span className="text nav-text text-capitalize">{item?.name}</span>
				</Link>
			)}
		</li>
	);

	let handleLogOut = async e => {
		e.preventDefault();
		await getSetTempUser("no_auth");
		navigate("/");
	};

	useEffect(() => {
		document.title = CapitalizeFirst(
			`Honourworld Dashboard ${location.pathname
				.split("/")
				.join(" ")
				.substring(1)}`
		);
	}, [location.pathname]);

	let handleToggle = () => {
		let sidebar = document?.body?.querySelector(".sidebar");

		sidebar?.classList?.toggle("close");
	};

	if (!sidebarState) return <></>;

	return (
		<>
			<nav className="sidebar close">
				<header>
					<div className="image-text">
						<Link to={"/"}>
							<span className="image">
								<img src={logo} alt="logo" className="rounded" />
							</span>
						</Link>
						{/* <div className="text header-text">
							<span className="name">Honour world</span>
							<span className="profession">Limited</span>
						</div> */}
					</div>
					<BsChevronRight
						className="toggle toggleIcon icon myCursor d-none d-md-block"
						onClick={handleToggle}
					/>
				</header>
				<div className="menu-bar">
					<div className="menu">
						<ul className="menu-links list-unstyled">
							{sidebarState?.map((item, i) => menuList(item, i))}
						</ul>
					</div>
					<div className="bottom-content">
						<li
							title="Settings"
							className={`nav-link ${
								location.pathname.includes("/settings") ? "headerActive" : ""
							}`}>
							<Link to="/settings">
								<BiCog className="icon" size={24} />
								<span className="text nav-text">Settings</span>
							</Link>
						</li>
						<li className="" title="Logout" onClick={handleLogOut}>
							<Link to="#">
								<BiLogIn className="icon" size={24} />
								<span className="text nav-text">Logout</span>
							</Link>
						</li>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;

export const Header = () => {
	let location = useLocation(),
		[isShadow, setIsShadow] = useState(null);

	let handleScroll = () => {
		window.onscroll = () => {
			if (window.scrollY > 100) setIsShadow(true);
			else setIsShadow(false);
		};
	};

	useEffect(() => {
		document.title = CapitalizeFirst(
			`Honourworld Dashboard ${location.pathname
				.split("/")
				.join(" ")
				.substring(1)}`
		);
		handleScroll();
	}, [location.pathname]);

	return (
		<Navbar
			expand="lg"
			sticky="top"
			className={`container-fluid px-3 header bg-white headerScroll ${
				isShadow ? "shadow" : ""
			}`}
			light>
			<Link to="/">
				<img src={logo2} alt="Honourworld" className="logo" />
			</Link>
		</Navbar>
	);
};
