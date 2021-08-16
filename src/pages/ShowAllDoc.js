import React from 'react';
import StoreData from '../components/StoreData';

export default function ShowAllDoc() {
	localStorage.clear();
	const newDocPost = () => {
		window.location.href = '/Markdown';
	};
	return (
		<div>
			<div
				className='row align-items-start mt-5 pt-5'
				style={{ minheight: '65vh' }}
			>
				<div className='col-9 pl-5 text-justify'>
					<StoreData />
				</div>
				<div className='google col-3 text-center'>
					<button
						className='btn-google btn-success btn mb-2 rounded-circle'
						style={{ padding: '30px 10px' }}
						onClick={newDocPost}
					>
						<span>New Post</span>
					</button>
				</div>
			</div>
		</div>
	);
}
