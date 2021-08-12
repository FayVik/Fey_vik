import React from 'react';
import style from '../style/About.module.css';
export default function AboutImages() {
	return (
		<div>
			<div className='row m-0 pb-5'>
				<div className={`${style.col}`}>
					<h2 className={`header my-5`}>My Experiences</h2>
					<div className={`${style.timeline}`}>
						<div
							className={`${style.timeline__content} ${style.right}`}
							data-aos='fade-right'
						>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h5 className={`${style.exp_header}`}>
										PrimedSoft (Frontend Engineer)
										<small className='exp__role'> Intership</small>
									</h5>
									<p className={`${style.exp__date}`}>
										January 2019 - December 2020
									</p>
									<ul className={`${style.exp__list}`}>
										<li>Working mostly as a frontend developer,</li>
										<li>
											Worked with the team on various projects that can be seen
											below.
											<a href='https://qtalk-4dd0f.firebaseapp.com/'>
												https://qtalk-4dd0f.firebaseapp.com/
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							className={`${style.timeline__content} ${style.left}`}
							data-aos='fade-left'
						>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h5 className={`${style.exp_header}`}>
										LogRocket
										<small className='exp__role'>
											Freelance Technical Writer
										</small>
									</h5>
									<p className={`${style.exp__date}`}>January 2021 - Present</p>
									<ul className={`${style.exp__list}`}>
										<li>Write technical articles on web technologies</li>
										<li>
											Author page:
											<a href='https://blog.logrocket.com/author/favourvivianwoka/'>
												https://blog.logrocket.com/author/favourvivianwoka/
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							className={`${style.timeline__content} ${style.right}`}
							data-aos='fade-right'
						>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h5 className={`${style.exp_header}`}>
										HelixGade, Port Harcourt(Remote) -
										<small className='exp__role'> Frontend Engineer</small>
									</h5>
									<p className={`${style.exp__date}`}>
										June 2020 - August 2021
									</p>
									<ul className={`${style.exp__list}`}>
										<li>Working mostly as a frontend developer,</li>
										<li>
											Worked with the team on various projects that can be seen
											below.
											<a href='http://editor-group-service.web.app/'>
												http://editor-group-service.web.app/
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div
							className={`${style.timeline__content} ${style.left}`}
							data-aos='fade-left'
						>
							<div className={`${style.content}`}>
								<div className='exp'>
									<h5 className={`${style.exp_header}`}>
										Marbl Front-end Engineer
										<small className='exp__role'>(Freenlancing)</small>
									</h5>
									<p className={`${style.exp__date}`}>March 2021 - Present</p>
									<ul className={`${style.exp__list}`}>
										<li>
											I am in charge of documenting and implematation of all ui
											mockup
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
