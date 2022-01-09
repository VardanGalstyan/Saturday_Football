import {
    FILL_PLAYERS_DATA_ERROR,
    FILL_PLAYERS_DATA_LOADING,
    FILL_PLAYERS_DATA,
} from "./actionTypes";

export const fillPlayersDataAction = () => {


    return async (dispatch, getState) => {

        try {
            let response = await fetch(`${process.env.REACT_APP_URL}/players`)
            if (response.ok) {
                let data = await response.json()
                dispatch({
                    type: FILL_PLAYERS_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_PLAYERS_DATA,
                    payload: data
                })
            } else {
                dispatch({
                    type: FILL_PLAYERS_DATA_LOADING,
                    payload: false
                })
                dispatch({
                    type: FILL_PLAYERS_DATA_ERROR,
                    payload: true
                })
            }
        } catch (error) {
            dispatch({
                type: FILL_PLAYERS_DATA_LOADING,
                payload: false
            })
            dispatch({
                type: FILL_PLAYERS_DATA_ERROR,
                payload: true
            })
        }

    }
}