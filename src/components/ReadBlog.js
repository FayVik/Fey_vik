import React from 'react';
import Disqus from 'disqus-react';
import { Adsense } from '@ctrl/react-adsense';

export default function ReadBlog() {
	const disqusShortname = 'https-www-wokafavourvivian-com-3';
	const disqusConfig = {
		url: 'http://localhost:3000',
		identifier: 'article-id',
		title: 'Title of Your Article',
	};
	return (
		<div>
			<div className={`col-lg-12 col-md-12 col-sm-12 mb-5 text-left`}>
				<Adsense
					data-ad-layout='in-article'
					data-ad-format='fluid'
					data-ad-client='ca-pub-3301294413158355'
					data-ad-slot='3120755964'
				/>
			</div>
			<Disqus.DiscussionEmbed
				shortname={disqusShortname}
				config={disqusConfig}
			/>
		</div>
	);
}
