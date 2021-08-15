import React from 'react';
import style from '../style/Contact.module.css';

export default function Contact() {
	return (
		<div>
			<div className={`${style.contact}`}>
				<div className={`${style.contact2} text-center`}>
					<h1 className='header mt-5'>Let Work Together</h1>
					<h5>
						Leave a message I will reply within 24hours (All fields are
						required)
					</h5>
				</div>
			</div>
			<div className={`${style.formCont} container my-5`}>
				<form className={`${style.form} row`}>
					<div className='form-group col-12'>
						<label htmlFor='exampleInputFullname1'>Full Name</label>
						<input
							type='text'
							className='form-control'
							id='exampleInputFullname1'
						/>
					</div>
					<div className='form-group col-lg-6 col-md-6 col-sm-12'>
						<label htmlFor='exampleInputPhoneNumber1'>Phone number</label>
						<input
							type='number'
							className='form-control'
							id='exampleInputPhoneNumber1'
						/>
					</div>
					<div className='form-group col-lg-6 col-md-6 col-sm-12'>
						<label htmlFor='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
					</div>
					<div className='form-group col-12'>
						<label htmlFor='exampleFormControlTextarea1'>Message</label>
						<textarea
							className='form-control'
							id='exampleFormControlTextarea1'
							rows='3'
						></textarea>
					</div>
					<div className='text-center'>
						<button
							className={`${style.btn} mt-2 animate__animated animate__delay-2s animate__infinite animate__pulse`}
							type='submit'
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
