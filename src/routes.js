import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PhotoList from './components/PhotoList';

//add routes here
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PhotoList} />
    </Route>
);