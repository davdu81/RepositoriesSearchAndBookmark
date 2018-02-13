/// <reference path="components/main.js" />
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

import Main from './components/main.js';
import Bookmarks from './components/bookmarks.js';
import Layout from './components/layout.js';



render(
    <BrowserRouter>
        
        <Layout>
          <Switch>
            <Route path="/default/bookmarks" component={Bookmarks} />
            <Route path="/" component={Main} />
          </Switch>
        </Layout>
    </BrowserRouter>
, document.getElementById('root'));
