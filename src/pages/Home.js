import React from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';

export default function Home() {
	return (
		<div className={`container-fluid p-0`}>
			<Hero />
			<Work />
		</div>
	);
}
