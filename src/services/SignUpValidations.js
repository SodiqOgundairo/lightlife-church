import Validations from "./Validations"

export default class SignUpValidations {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    checkValidations() {
        let errors = []

        // email validations
        if(!Validations.checkEmail(this.email)) {
            errors['email'] = 'Invalid Email'
        }

        // password validations 
        if(!Validations.minLenght(this.password, 6)) {
            errors['password'] = 'password should be of 6 characters'
        }
        return errors
    }

    static getErrorMessageFromCode(errorCode) {
        switch(errorCode) {
            case 'EMAIL_EXISTS' :
                return 'Email already eists'
            case 'EMAIL_NOT_FOUND' :
                return 'Email Not Found'
            case 'INVALID_PASSWORD' :
                return 'Please check your password and try again'
                default: 
                    return 'Unexpected error occured. Please try again'
        }
    }
}