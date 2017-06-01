import React from 'react';
import {
	Route,
    IndexRedirect
} from 'react-router';

import {
	requireAuth
} from './utils';

import Templates from './Templates'
import {
	Account,
    Shops
} from './Pages';

const routes = (store) => {
	return (
		<Route>
            <Route path="/" name="App">
                <IndexRedirect to='shops' />
                <Route onEnter={requireAuth(store)}>
                    <Route component={Templates.components.MainLayout}>
                        <Route path="/shops" name="Shop List" component={Shops.components.Shops}/>
                    </Route>
                </Route>
                <Route component={Templates.components.AccountLayout}>
                    <Route path="/registration" component={Account.components.CreateAccount}/>
                    <Route path="/login" component={Account.components.Login}/>
                </Route>

            </Route>
            <Route path="*" component={Templates.components.NotFound}/>
        </Route>
	)
};

export default routes;
