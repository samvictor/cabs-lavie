import {connect} from 'react-redux';
import App from './App';
import { incrementLoadingState, decrementLoadingState } from '../actions/app';

const mapStateToProps = (state) => ({
    loadingState: state.app.loadingState
});

const mapDispatchToProps = dispatch => ({
    incrementLoadingState: () => dispatch(incrementLoadingState()),
    decrementLoadingState: () => dispatch(decrementLoadingState())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);