import {REHYDRATE} from 'redux-persist/lib/constants';

const initialState = {
  data: [],
  counter: 0,
};

export default function timer(state = initialState, action) {
  switch (action.type) {
    case REHYDRATE: {
      if (action.payload) {
        const incoming = action.payload && action.payload.timer;
        if (incoming) {
          return {...state, ...incoming};
        }
      }
      return state;
    }

    case 'ADD_DATA':
      return {
        ...state,
        counter: action.payload,
      };

    default:
      return state;
  }
}
