import SignUpValidations from "@/services/SignUpValidations";
// import { LOADING_SPINNER_SHOW_MUTATION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from "@/store/storeconstants";
// uncomment above if you're using loading spinner in this file
import { AUTH_ACTION, AUTO_LOGIN_ACTION, AUTO_LOGOUT_ACTION, LOGIN_ACTION, LOGOUT_USER, SET_AUTO_LOGOUT_MUTATION, SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from "@/store/storeconstants";
import axios from "axios";

let timer = ''

export default {
    [LOGOUT_USER](context) {
        context.commit(SET_USER_TOKEN_DATA_MUTATION, {
            email: null,
            token: null,
            expiresIn: null,
            refreshToken: null,
            userId: null,
        })
        localStorage.removeItem('userData')
        if(timer) {
            clearTimeout(timer)
        }
    },
    
    [AUTO_LOGOUT_ACTION](context){
        context.dispatch(LOGOUT_USER)
        context.commit(SET_AUTO_LOGOUT_MUTATION)
    },

    async [LOGIN_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdD8z57cyKtc49TRAI-kdS1gq8tbSr_lc`
        })
    },



    // async [SIGNUP_ACTION] (_, payload) {
    //uncomment above if the mutation is yet to be set
    async[SIGNUP_ACTION](context, payload) {
        return context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdD8z57cyKtc49TRAI-kdS1gq8tbSr_lc`
        })
    },

    [AUTO_LOGIN_ACTION](context) {
        let userDataString = localStorage.getItem('userData')
        if (userDataString) {
            let userData = JSON.parse(userDataString)
            let expirationTime = userData.expiresIn - new Date().getTime()

                if(expirationTime < 10000) {
                    // get token with refreshToken
                    // and perform autologout
                    context.dispatch(AUTO_LOGOUT_ACTION)
                } else {
                    timer = setTimeout(() => {
                        context.dispatch(AUTO_LOGOUT_ACTION)
                    }, expirationTime)
                }
            context.commit(SET_USER_TOKEN_DATA_MUTATION, userData)
        }
    },

    async [AUTH_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        }

        let response = ''

        try {
            response = await axios.post(payload.url, postData)
        } catch (err) {
            let errorMessage = SignUpValidations.getErrorMessageFromCode(
                err.response.data.error.errors[0].message,
            )
            // console.log(errorMessage)
            throw errorMessage
        }


        if (response.status === 200) {
            // let expirationTime = +response.data.expiresIn * 1000
            // uncomment below if you want 10 seconds auto logout time 
            let expirationTime = + 10 * 1000

            timer = setTimeout(() => {
                context.dispatch(AUTO_LOGOUT_ACTION)
            }, expirationTime)
            let tokenData = {
                email: response.data.email,
                token: response.data.idToken,
                expiresIn: expirationTime,
                refreshToken: response.data.refreshToken,
                userId: response.data.localId,
            }
            localStorage.setItem('userData', JSON.stringify(tokenData))
            context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)
        }
    },
}