import React from 'react';
import { GetData } from '../hook/GetData';

export default function StoreData() {
	const [documents] = GetData();
	const getSingleDocId = (id) => {
		localStorage.setItem('token', id);
		// window.location.href = '/Markdown';
	};
	return (
		<div>
			{documents.map((documents) => (
				<div key={documents.id}>
					<div
						style={{ cursor: 'pointer' }}
						onClick={getSingleDocId(documents.id)}
						dangerouslySetInnerHTML={{ __html: documents.value.__html }}
					></div>
				</div>
			))}
		</div>
	);
}
