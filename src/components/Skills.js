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
			<div className='row m-0 justify-center px-5'>
				<div className='col-1 d-md-none d-lg-block'></div>
				<div className={`${Style.card} col-lg-5 col-md-6 col-sm-6`}>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Html</h4>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Css</h4>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Bootstrap</h4>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Tailwind</h4>
					</div>
					<div className='my-2'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Firebase</h4>
					</div>
				</div>
				<div className={`${Style.card} col-lg-5 col-md-6 col-sm-6`}>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>JavaScript</h4>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Angular.js</h4>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Vue.js</h4>
					</div>
					<div className='my-5'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>React.js</h4>
					</div>
					<div className='my-2'>
						<div id={Style.myProgress}>
							<div id={Style.myBar}></div>
						</div>
						<h4>Material Ui</h4>
					</div>
				</div>
				<div className='col-1 d-md-none d-lg-block'></div>
			</div>
		</div>
	);
}
