import Style from '../style/Progress.module.css';

export function Progress(props) {
	return (
		<div className='my-4'>
			<div className={`${Style.progress} ${Style.blue}`}>
				<span className={`${Style.progressleft}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<span className={`${Style.progressright}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<div className={`${Style.progressvalue}`}>{props.children}</div>
			</div>
		</div>
	);
}

export function Progress2(props) {
	return (
		<div className='my-4'>
			<div className={`${Style.progress} ${Style.yellow}`}>
				<span className={`${Style.progressleft}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<span className={`${Style.progressright}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<div className={`${Style.progressvalue}`}>{props.children}</div>
			</div>
		</div>
	);
}

export function Progress3(props) {
	return (
		<div className='my-4 '>
			<div className={`${Style.progress} ${Style.pink}`}>
				<span className={`${Style.progressleft}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<span className={`${Style.progressright}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<div className={`${Style.progressvalue}`}>{props.children}</div>
			</div>
		</div>
	);
}

export function Progress4(props) {
	return (
		<div className='my-4 '>
			<div className={`${Style.progress} ${Style.green}`}>
				<span className={`${Style.progressleft}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<span className={`${Style.progressright}`}>
					<span className={`${Style.progressbar}`}></span>
				</span>
				<div className={`${Style.progressvalue}`}>{props.children}</div>
			</div>
		</div>
	);
}
