import { Suspense } from "react";
import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeAlbumReview } from '@/components/FilterPresses';

const AlbumReviews = (props: any) => {
	return (<>
		<Header section='album_reviews' />
		<main>
			<Suspense>
				<FilterPresses filter={filterPressByTypeAlbumReview} />
			</Suspense>
		</main>
	</>)
}

export default AlbumReviews;
