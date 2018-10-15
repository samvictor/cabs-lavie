interface IProps {
    loadingState: number;
}

const initialState: IProps = {
    loadingState: 0
};

const app  = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_LOADING_STATE':
            return { ...state, 
                loadingState: state.loadingState + 1
            }
      case 'DECREMENT_LOADING_STATE':
            return { ...state,
                loadingState: state.loadingState - 1
            }
        default:
            return state;
    }
}

export default app;