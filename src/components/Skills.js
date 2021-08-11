import React from 'react';
import Style from '../style/Skills.module.css';

export default function Skills() {
	return (
		<div className={Style.skills}>
			<div className='my-5'>
				<h2 className={Style.header}>My Skills</h2>
				<p className='my-2 text-center'>
					Here are all my Skills that I have aquired.
				</p>
			</div>
			<div className='row m-0 justify-center px-2'>
				<div className='col-1 d-none d-lg-block'></div>
				<div className={`${Style.card} col-lg-5 col-md-6 col-sm-12`}>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Html</p>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Css</p>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Bootstrap</p>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Tailwind</p>
					</div>
					<div className='my-2'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Firebase</p>
					</div>
				</div>
				<div className={`${Style.card} col-lg-5 col-md-6 col-sm-12`}>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>JavaScript</p>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Angular.js</p>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Vue.js</p>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>React.js</p>
					</div>
					<div className='my-2'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<p>Material Ui</p>
					</div>
				</div>
				<div className='col-1 d-none d-lg-block'></div>
			</div>
		</div>
	);
}
