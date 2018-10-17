
export function incrementLoadingState() {
    return {
        type: 'INCREMENT_LOADING_STATE'
    };
}

export function decrementLoadingState() {
    return {
        type: 'DECREMENT_LOADING_STATE'
    };
}

// thunk dispatcher

export const incrementTwice = () => (dispatch, getState) => {
    dispatch(incrementLoadingState())
    dispatch(incrementLoadingState())
    // to get data from store
    // getState() ==> return {app { }}
};