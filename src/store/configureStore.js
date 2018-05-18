import { createStore,combineReducers, applyMiddleware } from 'redux';
import signupReducer from '../reducers/signupReducer';
import thunk from 'redux-thunk';

const middleware=[thunk]
export default ()=>{
    const store=createStore(
        combineReducers({
            signup: signupReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(...middleware)
    )
    return store;
}