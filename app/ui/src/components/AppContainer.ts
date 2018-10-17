import {connect} from 'react-redux';
import App from './App';
import { incrementLoadingState, decrementLoadingState, incrementTwice } from '../actions/app';

const mapStateToProps = (state) => ({
    loadingState: state.app.loadingState
});

const mapDispatchToProps = dispatch => ({
    incrementLoadingState: () => dispatch(incrementLoadingState()),
    decrementLoadingState: () => dispatch(decrementLoadingState()),
    incrementTwice: () => dispatch(incrementTwice())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);