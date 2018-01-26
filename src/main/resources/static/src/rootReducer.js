import {combineReducers} from "redux";
/*import user from "./reducers/user";*/
import clients from "./reducers/clients";
import formErrors from "./reducers/formErrors";

export default combineReducers({
    clients,
    formErrors
});