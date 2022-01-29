import { useSelector } from 'react-redux';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

export default function CollectionOverviewContainer() {
	const collectionOverviewLoading = useSelector(selectIsCollectionFetching);
	return WithSpinner({ isLoading: collectionOverviewLoading })(
		CollectionsOverview
	);
}

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
// import WithSpinner from '../with-spinner/with-spinner.component';
// import CollectionsOverview from './collections-overview.component';

// const mapStateToProps = createStructuredSelector({
// 	isLoading: selectIsCollectionFetching
// });

// const CollectionsOverviewContainer = compose(
// 	connect(mapStateToProps),
// 	WithSpinner
// )(CollectionsOverview);

// export default CollectionsOverviewContainer;

// import {useSelector} from 'react-redux';
// import WithSpinner from './with-spinner-component-location';
// import CollectionOverview from './collection-overview-component-location'

// export default function CollectionOverviewContainer () {
//   const collectionOverviewLoading = useSelector(get-your-state-information-from-here);
//   return (
//     <WithSpinner isLoading = {collectionOverviewLoading} >
//       <CollectionOverview />
//     </WithSpinner>
// }
