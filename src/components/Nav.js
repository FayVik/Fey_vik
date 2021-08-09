import React, { useState } from 'react';
import '../App.css';
import RouteLinks from '../HOC/RouteLink';
import { NavLink } from 'react-router-dom';

const styles = {
	activeLinkItem: {
		color: '#fff',
		fontWeight: 'bolder',
		borderBottom: '2px solid #f16405',
		paddingBottom: '6px',
	},
	linkItem: {
		textDecoration: 'none',
		fontWeight: '900',
		fontSize: '14px',
		color: '#fff',
	},
};

function Nav() {
	const links = RouteLinks;
	const [colorChange, setColorchange] = useState(false);

	const changeNavbarColor = () => {
		if (window.scrollY >= 80) {
			setColorchange(true);
		} else {
			setColorchange(false);
		}
	};
	window.addEventListener('scroll', changeNavbarColor);

	return (
		<div>
			<nav
				className={
					colorChange
						? ' navbar navbar-expand-lg navbar-light fixed-top colorChange'
						: ' navbar navbar-expand-lg navbar-light fixed-top animate__fadeIn animate__animated animate__delay-1s'
				}
			>
				<button
					className='navbar-toggler mx-2 pt-2'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div
					className='collapse navbar-collapse px-5'
					id='navbarSupportedContent'
				>
					<ul className='navbar-nav mx-auto '>
						{links.map((link) => (
							<NavLink
								className='links mx-4'
								key={link.path}
								exact
								style={styles.linkItem}
								activeStyle={styles.activeLinkItem}
								to={link.path}
							>
								<span className='name'>{link.name}</span>
							</NavLink>
						))}
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
