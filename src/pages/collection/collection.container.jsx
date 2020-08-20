import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import {selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapToStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapToStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer 