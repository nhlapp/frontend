import { useReducer } from "react"
import UserContext from "./userContext"
import userReducer from "./userReducer"


export default function UserState(props) {

    const initialState = {
        user: null
    }

    const [userState, dispatch] = useReducer(userReducer, initialState)

    const login = (user) => {
        dispatch({
            type: "LOGIN",
            payload: user
        })
    }

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
    }

    const register = (user) => {
        dispatch({
            type: "REGISTER",
            payload: user
        })
    }

    return (
        <UserContext.Provider value={{
            userState, login, logout, register
        }}>
            {props.children}
        </UserContext.Provider>
    )
}