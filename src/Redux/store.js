import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allPlayersReducer from './Reducers.js/playersReducers';

export const initialState = {

    players: {
        data: [],
        loading: false,
        error: null
    },
}

const combinedReducers = combineReducers({
    players: allPlayersReducer
})

export const store = createStore(
    combinedReducers,
    initialState,
    process.env.REACT_APP_DEVELOPMENT ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
)



export default store