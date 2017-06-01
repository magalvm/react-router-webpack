import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import {
	Account,
	Shops
} from './Pages'

const rootReducer = combineReducers({

	account: combineReducers({
		registration: Account.reducers.registration,
		login: Account.reducers.login,
	}),
	companies:Shops.reducers.shops,
	routing: routerReducer,
	form: formReducer
});

export default rootReducer;
