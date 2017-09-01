import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import PhotoList from './components/PhotoList';
import Profile from './components/Profile';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PhotoList} />
        <Route path="profile" component={Profile} />
    </Route>
);