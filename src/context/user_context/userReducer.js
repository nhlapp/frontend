const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        case "REGISTER":
            return {
                user: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default userReducer