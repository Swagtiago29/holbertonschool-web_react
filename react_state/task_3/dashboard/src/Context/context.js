import React from "react"
const User = {
    email: '',
    password: '',
    isLoggedIn: false
}
const logOut = () => { }

const newContext = React.createContext({ User, logOut })

export default newContext