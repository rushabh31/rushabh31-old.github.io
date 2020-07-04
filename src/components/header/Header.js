import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
		<Fade top duration={1000} distance="20px">
			<div>
				<header className="header">
					<NavLink to="/splash" tag={Link} className="logo">
						<span className="grey-color"> &lt;</span>
						<span className="logo-name">Rushabh Patel</span>
						<span className="grey-color">/&gt;</span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>

					<ul className="menu">
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'rgba(23, 137, 239, 0.19)' }}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activeStyle={{ fontWeight: "bold", backgroundColor:'rgba(23, 137, 239, 0.19)' }}
							>
								Education
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'rgba(23, 137, 239, 0.19)'}}
							>
								Experience
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , backgroundColor:'rgba(23, 137, 239, 0.19)'}}
							>
								Projects
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/contact"
                className = "test_active"
								tag={Link}
                exact
                activeClassName="active1"
							>
								Contact Me
							</NavLink>
						</li>
					</ul>
				</header>
			</div>

		</Fade>
	);
}
export default Header;
