import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main.js';

// This will give us access to our state as props
function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments,
    };
}

// This will give us access to our action creators as props
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// This will open the Main component with the state and action
// creators mapped to props
// connect will inject the data so that we don't have to pass
// it down via props many layers
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;

