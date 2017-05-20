import React from 'react';
import { render } from 'react-dom';

// import CSS
import css from './styles/style.styl';

// Import Components
import App from './components/App.js';
import Single from './components/Single.js';
import Photogrid from './components/PhotoGrid.js';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store.js';


const router = (
    <Provider store={store} >

        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Photogrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>

    </Provider>
);


render(router, document.getElementById('root'));