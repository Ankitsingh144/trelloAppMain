export const loginSuccess = (payload) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload
    }
}
export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}
