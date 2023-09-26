import Link from 'next/link';

import Header from '@/components/Header';
import FilterPresses from '@/components/FilterPresses';

const AlbumReviews = (props: any) => {
	return (<>
		<Header section='album_reviews' />
		<main>
			<FilterPresses type="album" />
		</main>
	</>)
}

export default AlbumReviews;
