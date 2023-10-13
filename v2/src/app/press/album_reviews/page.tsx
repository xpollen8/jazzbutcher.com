import Header from '@/components/Header';
import FilterPresses, { filterPressByTypeAlbumReview } from '@/components/FilterPresses';

const AlbumReviews = (props: any) => {
	return (<>
		<Header section='album_reviews' />
		<main>
			<FilterPresses filter={filterPressByTypeAlbumReview} />
		</main>
	</>)
}

export default AlbumReviews;
