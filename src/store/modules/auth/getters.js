import { GET_USER_TOKEN_GETTER, IS_USER_AUTHETICATED_GETTER } from "@/store/storeconstants";

export default {
    [GET_USER_TOKEN_GETTER] : (state) => {
        return state.token
    },

    [IS_USER_AUTHETICATED_GETTER] : (state) => {
        return !!state.token
    }
}