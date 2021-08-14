import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import style from '../style/Blog.module.css';
// import GoogleAdId from './GoogleAdId';
import { Adsense } from '@ctrl/react-adsense';

export default function AllBlog() {
	return (
		<div className='row m-0'>
			<div className={`col-lg-6 col-md-6 col-sm-12 mb-5 text-left`}>
				<div className={`${style.cards} px-4 py-4 rounded`}>
					<div>
						<LazyLoadImage
							src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2Ffmzb2zrg8x32r55jkofo.jpeg?alt=media&token=0ee8b885-76e1-4c4e-bf65-31be6b378524'
							alt='upload cloud'
							width='100%'
							effect='blur'
						/>
					</div>
					<h4 className={`${style.header2}`}>
						Uploading an Image to Firebase Cloud Storage with Angular
					</h4>
					<span className={`${style.span}`}>Feb 17, 2020</span>
					<p className={`${style.text} mt-2`}>
						In this tutorial, we are going to learn how to upload an image to
						Firebase Cloud Storage from an Angular Project. We’ll be using
						AngularFire library for setting up Firebase in the Angular web
						application. Firebase is Google's mobile platform that helps you
						quickly develop high-quality apps and grow your business.
					</p>
					<div className='text-right'>
						<a
							className='link'
							href='https://dev.to/fayvik/uploading-an-image-to-firebase-cloud-storage-with-angular-2aeh'
						>
							Read More
						</a>
					</div>
				</div>
			</div>
			<div className={`col-lg-6 col-md-6 col-sm-12 mb-5 text-left`}>
				<div className={`${style.cards} px-4 py-4 rounded`}>
					<div>
						<LazyLoadImage
							src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-08-12%20at%2014.01.03.png?alt=media&token=3284ccdd-58c1-465a-8b6c-c18cec6b7ea8'
							alt='Book app'
							width='100%'
							effect='blur'
						/>
					</div>
					<h4 className={`${style.header2}`}>
						Building a Book Finder App using Google Book API
					</h4>
					<span className={`${style.span}`}>Feb 26, 2020</span>
					<p className={`${style.text} mt-2`}>
						We will be building a simple book finder app that allows users to
						search and know more about there favorite books. Now let’s write
						some code!. As you may already know, Angular massively use rxjs
						behind the scene to handle all sort of asynchronous tasks like Http
						request, reactive forms, emitting events...
					</p>
					<div className='text-right'>
						<a
							className='link'
							href='https://dev.to/fayvik/building-a-book-finder-app-using-google-book-api-305n'
						>
							Read More
						</a>
					</div>
				</div>
			</div>
			<div className={`col-lg-12 col-md-12 col-sm-12 mb-5 text-left`}>
				{/* <GoogleAdId /> */}
				<Adsense
					data-ad-layout='in-article'
					data-ad-format='fluid'
					data-ad-client='ca-pub-3301294413158355'
					data-ad-slot='3120755964'
				/>
			</div>
			<div className={`col-lg-6 col-md-6 col-sm-12 mb-5 text-left`}>
				<div className={`${style.cards} px-4 py-4 rounded`}>
					<div>
						<LazyLoadImage
							src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-08-12%20at%2013.40.49.png?alt=media&token=0da07559-985c-4160-afa4-106f36e06eff'
							alt='Google doc'
							width='100%'
							effect='blur'
						/>
					</div>
					<h4 className={`${style.header2}`}>
						Build a Google Doc clone with HTML, CSS, and JavaScript
					</h4>
					<span className={`${style.span}`}>January 5, 2021</span>
					<p className={`${style.text} mt-2`}>
						Google Docs is Google’s browser-based word processor that allows you
						to create, edit, download, and share documents online and access it
						from any computer as long as there is an internet connection.
					</p>
					<div className='text-right'>
						<a
							className='link'
							href='https://blog.logrocket.com/build-a-google-doc-clone-with-html-css-and-javascript/'
						>
							Read More
						</a>
					</div>
				</div>
			</div>
			<div className={`col-lg-6 col-md-6 col-sm-12 mb-5 text-left`}>
				<div className={`${style.cards} px-4 py-4 rounded`}>
					<div>
						<LazyLoadImage
							src='https://firebasestorage.googleapis.com/v0/b/uploader-89d2b.appspot.com/o/images%2FScreenshot%202021-08-12%20at%2013.44.20.png?alt=media&token=122b35b9-9cad-4022-bdc5-70a8808e9fe0'
							alt='Google doc'
							width='100%'
							effect='blur'
						/>
					</div>
					<h4 className={`${style.header2}`}>
						How to implement form validation with Vuetify in a Vue.js app
					</h4>
					<span className={`${style.span}`}>November 4, 2020</span>
					<p className={`${style.text} mt-2`}>
						Google Docs is Google’s browser-based word processor that allows you
						to create, edit, download, and share documents online and access it
						from any computer as long as there is an internet connection.
					</p>
					<div className='text-right'>
						<a
							className='link'
							href='https://blog.logrocket.com/how-to-implement-form-validation-with-vuetify-in-a-vue-js-app/'
						>
							Read More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
