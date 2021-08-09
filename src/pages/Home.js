import React from 'react';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Skills from '../components/Skills';

export default function Home() {
	return (
		<div className={`container-fluid p-0`}>
			<Hero />
			<Work />
			<Skills />
		</div>
	);
}
