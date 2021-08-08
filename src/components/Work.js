import React from 'react';
import Style from '../style/Work.module.css';
import Slider from 'react-slick';

const channels = [
	{
		id: 1,
		participant: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-26%20at%2013.19.56.png?alt=media&token=317042be-ad87-4bfe-8a71-399f2479dbfd',
			name: 'EDIT GROUP SERVICES',
			specialty: 'I used Javascript and Firebase Hosting',
			link: 'https://edit-group.com/',
		},
	},
	{
		id: 2,
		participant: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-25%20at%2021.44.00.png?alt=media&token=704b842d-592c-463b-b0a4-9bd929f199b1',
			name: 'Image Link Generator',
			specialty:
				'It is a drag and drop image uploader, I used React.js, Firebase storage and material ul',
			link: 'https://image-uploader-one.vercel.app/',
		},
	},
	{
		id: 3,
		participant: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-23%20at%2018.32.41.png?alt=media&token=3a2f5c0c-756c-4242-9f93-3c1bcff26d78',
			name: 'Your Doctors',
			specialty: 'Some columns have multiple widths defined.',
		},
	},
	{
		id: 2,
		participant: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-25%20at%2021.44.00.png?alt=media&token=704b842d-592c-463b-b0a4-9bd929f199b1',
			name: 'Your Doctors',
			specialty: 'Some columns have multiple widths defined.',
		},
	},
];

export default function Work() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className={`${Style.carousel} my-5 text-center`}>
			<div className='my-5'>
				<h2 className={Style.header}>My Lastest Work</h2>
				<p className='my-2'>
					Here are some of my recent projects that i worked on
				</p>
			</div>
			<Slider {...settings} className={Style.slider}>
				{channels.map((channel) => {
					return (
						<div>
							<div
								key={channel.id}
								className={`${Style.bgPad} mx-5 hadow-sm p-3 mb-5 rounded`}
							>
								<img src={channel.participant.image} width='100%' alt='work' />
								<div className='my-4'>
									<h3 className={Style.header2}>{channel.participant.name}</h3>
									<p className={Style.text}>{channel.participant.specialty}</p>
									<a
										href={channel.participant.link}
										target='_blank'
										rel='noreferrer'
										className='text-white'
									>
										{channel.participant.link}
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
