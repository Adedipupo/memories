import { AUTH } from "../constants/actionTypes";

 const authReducer =  (state,action) => {
    switch (action.type) {
        case AUTH:
            console.log(action?.data)
        default:
            break;
}
 }
export default authReducer;