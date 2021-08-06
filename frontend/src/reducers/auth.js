import { AUTH } from "../constants/actionTypes";

export default (users = [],action) => {
    switch (action.type) {
        case AUTH:
            return action.payload;
        default:
            return users;
}