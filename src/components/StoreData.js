import React from 'react';
import { GetData } from '../hook/GetData';
import Update from './UpdateDate';

export default function StoreData() {
	const [documents] = GetData();

	return (
		<div>
			<span>Values</span>
			{documents.map((documents) => (
				<div key={documents.id}>
					<div>
						Document: {documents.id} Value: {documents.value.value}
					</div>
					<Update doc={documents.id} />
				</div>
			))}
		</div>
	);
}
