import React from 'react';
import Style from '../style/Footer.module.css';
import {
	FiTwitter,
	FiFacebook,
	FiInstagram,
	FiGithub,
	FiLinkedin,
} from 'react-icons/fi';

export default function Footer() {
	return (
		<div className={`${Style.footer}`}>
			<h2 className={`${Style.header} my-4`}>
				You can follow me on my social media handle
			</h2>
			<div className='row m-0'>
				<div className='col-lg-4 col-sm-12'></div>
				<div className='col-lg-4 col-sm-12 text-center'>
					<div className='row m-0 justify-center'>
						<div className='col-3 text-center'>
							<a href='https://twitter.com/Fey_vik' alt>
								<FiTwitter size={22} />
							</a>
						</div>
						<div className='col-2 text-center'>
							<a href='https://web.facebook.com/favour.emma.3150/?_rdc=1&_rdr'>
								<FiFacebook size={22} />
							</a>
						</div>
						<div className='col-2 text-center'>
							<a href='https://www.instagram.com/favour.emma.3150/'>
								<FiInstagram size={22} />
							</a>
						</div>
						<div className='col-2 text-center'>
							<a href='https://github.com/FayVik'>
								<FiGithub size={22} />
							</a>
						</div>
						<div className='col-3 text-center'>
							<a href='https://www.linkedin.com/in/favour-vivian-woka-650894196/'>
								<FiLinkedin size={22} />
							</a>
						</div>
					</div>
				</div>
				<div className='col-lg-4 col-sm-12'></div>
			</div>
			<hr />
			<p>&copy; Fey_vik 2021 : vivianemma97@gmail.com</p>
		</div>
	);
}
