import {combineReducers} from 'redux'

import authReducer from './auth'
import articlesReducer from "./articles";


const reducer = combineReducers({
    articles: articlesReducer,
    authUser: authReducer,
    router: routerReducer,
});

export default reducer
