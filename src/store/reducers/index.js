import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
// import { reducer as formReducer } from 'redux-form'

// import notyReducer from './noty'
import authReducer from './auth'
import articlesReducer from "./articles";


const reducer = combineReducers({
    articles: articlesReducer,
    authUser: authReducer,
    router: routerReducer
});

export default reducer
