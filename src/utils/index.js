import axios from 'axios';
//import {push} from 'react-router-redux';
import jwt_decode from 'jwt-decode';


const JWT_TOKEN = 'JWT_TOKEN';
const USER_IN = 'USER_IN';


export function setJwtToken(token) {
    localStorage.setItem(JWT_TOKEN, token);
}

export function setUserAuth(user,isAuth){
    let userData={
       "model":{
           "user_email": user.user_email,
           "user_password":user.user_password
       },
        "isAuthenticated":isAuth
    };
    localStorage.setItem(USER_IN, JSON.stringify(userData));
}

export function getUserAuth() {
    return JSON.parse(localStorage.getItem(USER_IN));
}


export function removeTokens() {
    localStorage.removeItem(JWT_TOKEN);
    localStorage.removeItem(USER_IN);
}

export function getJwtToken() {
    return localStorage.getItem(JWT_TOKEN);
}


export function decodeToken(token) {
    try {
        return jwt_decode(token || getJwtToken());
    } catch (err) {
        return null;
    }
}
export function authHeaders() {
    return {
        'Accept': "application/json",
        'Content-Type': "application/json"
    };
}




export function initEnvironment(store) {

    const environment = process.env.NODE_ENV || 'development';
    const config = require('./config.' + environment + '.js');

    axios.defaults.baseURL = config.webApiUrl;
  //  axios.defaults.headers.common = {};
  //  axios.defaults.headers.put = {};

    // Response interceptor
    /*axios.interceptors.response.use(null, // nothing to do on a valid response
        function (error) {  // this handles error responses
            if (error.response && error.response.status === 401 && !error.response.data.isLogin && !error.response.data.isRefresh) {
                return refreshToken()
                    .then((response) => {
                        error.config.headers = authHeaders();  // set new header auth bearer
                        return axios(error.config);            // resend the original request
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            } else if (error.response && error.response.status === 401 && error.response.data.isRefresh) {  // means the refresh token was rejected
                let state = store.getState();
                store.dispatch(push({
                    // Redirect to index to prevent unauthorized access to user pages
                    pathname: '/',
                    // store where to redirect after successful login
                    state: {
                        redirectPath: (state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.state && state.routing.locationBeforeTransitions.state.redirectPath)
                        || (state.routing && state.routing.locationBeforeTransitions)
                        || null
                    }
                }));
                // store.dispatch(accountAction.account.showLoginModal());
            }

            return Promise.reject(error);
        });*/
}

export function requireAuth(store) {  // this is called by the router only - ie. not ajax calls.
    return function (nextState, replace) {
        const {login} = store.getState().account;
        if (!login.isAuthenticated) {
            if(!getUserAuth()){
            replace({
                pathname: '/registration',
                state: {nextPathname: nextState.location.pathname}
            })
            }
        }

    }
}
