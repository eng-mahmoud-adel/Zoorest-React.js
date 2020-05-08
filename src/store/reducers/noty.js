import {ERROR_401, ERROR_403, ERROR_422, ERROR_500, ERROR_503, ERROR_NETWORK} from "../actions/response_errors";

const initialState = {
  type: '',
  text: "",
  layout: 'topRight',
  timeout: 2000,
  // closeWith: "button",
};
const notyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_401:
      return {
        ...state,
        type: 'error',
        text: "unauthenticated"
      }
    case ERROR_403:
      return {
        ...state,
        type: 'error',
        text: "Forbidden"
      }
    case ERROR_422:
      return {
        ...state,
        type: 'error',
        text: action.payload
      }
    case ERROR_500:
      return {
        ...state,

        type: 'error',
        text: 'Something went wrong.'
      }
    case ERROR_503:
      return {
        ...state,

        type: 'error',
        text: 'Website is in maintenance mode, please try again later.'
      }
    case ERROR_NETWORK:
      return {
        ...state,
        type: 'error',
        text: 'Network error, please check your internet connection.'
      }
    default:
      return state
  }
}

export default notyReducer
