import React from 'react';
import Style from '../style/Work.module.css';
import Slider from 'react-slick';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
				'It is a drag and drop image uploader. It is built React.js, Firebase storage and material ul',
			link: 'https://image-uploader-one.vercel.app/',
		},
	},
	{
		id: 3,
		participant: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-07-23%20at%2018.32.41.png?alt=media&token=3a2f5c0c-756c-4242-9f93-3c1bcff26d78',
			name: 'A Dashboard',
			specialty:
				'A coding challenge That I took. It is built with bootstrap, react',
			link: 'https://aneeque-coding-challenge-taupe.vercel.app/',
		},
	},
	{
		id: 2,
		participant: {
			image:
				'https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-08-12%20at%2013.29.19.png?alt=media&token=96ec7d57-859b-4e8d-b01c-ae42f5b5ec5e',
			name: 'Image Link Generator',
			specialty:
				'A demo site I built as part of my article on "Build a Shopping Cart with Vue, Vuex & Vue Material Design',
			link: 'https://codesource.io/build-a-shopping-cart-with-vue-vuex-vue-material-design/',
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
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className={`${Style.carousel} text-center`} data-aos='fade-down'>
			<div className='my-5'>
				<h2 className='header'>My Lastest Work</h2>
				<p className='my-2'>
					Here are some of my recent projects that i worked on
				</p>
			</div>
			<Slider {...settings} className={`${Style.slider} text-center`}>
				{channels.map((channel) => {
					return (
						<div>
							<div
								key={channel.id}
								className={`${Style.bgPad} mx-5 hadow-sm p-3 mb-5 rounded`}
							>
								<LazyLoadImage
									src={channel.participant.image}
									width='100%'
									alt='work'
									effect='blur'
								/>
								<div className={`${Style.cards}`}>
									<h3 className={`${Style.header2} my-4`}>
										{channel.participant.name}
									</h3>
									<p className={Style.text}>{channel.participant.specialty}</p>
									<a
										href={channel.participant.link}
										target='_blank'
										rel='noreferrer'
										className={`${Style.link}`}
									>
										Link to view project
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
