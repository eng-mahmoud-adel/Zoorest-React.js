import {ERROR_422, ERROR_500, ERROR_503} from "../actions/response_errors";

const notyReducer = (state = {}, action) => {
  switch (action.type) {
    case ERROR_422:
      return {
        type: 'error',
        message: state.payload
      }
    case ERROR_500:
      return {
        type: 'error',
        message: 'Something went wrong.'
      }
    case ERROR_503:
      return {
        type: 'error',
        message: 'Website is in maintenance mode, please try again later.'
      }
    default:
      return state
  }
}

export default notyReducer
