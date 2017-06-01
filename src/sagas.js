import {
	Account,
	Shops
} from './Pages';

export default [
	...Account.sagas,
	...Shops.sagas
];
