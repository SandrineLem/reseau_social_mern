import { GET_USER } from "../actions/user.actions";

const initialState = {};

export default function userreducer(state = initialState, action) {
    switch (action.type) {
      case GET_USER:
          return action.payload
        default:
            return state;
    }
}