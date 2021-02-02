import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import Particles from 'react-particles-js';

function Header() {
  return (

		<Fade top duration={1000} distance="20px">
			<div>
				<header className="header">

					<NavLink to="/splash" tag={Link} className="logo">
						<span className="logo-name"> Rushabh Patel</span>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					{/* <img src={require("../../assests/images/splash_logo.gif")} width = "500px"></img> */}

			
					<ul className="menu">
						
						<li>
							
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , color:'#a92750'}}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/education"
								tag={Link}
								activeStyle={{ fontWeight: "bold", color:'#a92750' }}
							>
								Education
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/experience"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , color:'#a92750'}}
							>
								Experience
							</NavLink>
						</li>
						{/* <li>
							<NavLink
								to="/projects"
								tag={Link}
								activeStyle={{ fontWeight: "bold" , color:'#a92750'}}
							>
								Projects
							</NavLink>
						</li> */}
            <li>
            <a href="https://rushabh.info/react-blog-github/#/">Blogs</a>

            </li>
						<li>
							<NavLink
								to="/contact"
                className = "test_active"
								tag={Link}
                exact
                activeStyle={{ fontWeight: "bold" , color:'#a92750'}}
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
