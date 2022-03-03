import axios from "axios";
//action recup info users dans le state
export const GET_USERS ="GET_USERS";

export const getUsers = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/user`)
            .then ((res) => {
                dispatch( { type: GET_USERS, payload: res.data })
            })
            .catch((err) => console.log(err));
    }
}