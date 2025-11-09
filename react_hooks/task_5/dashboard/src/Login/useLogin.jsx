import { useEffect, useState } from "react";

export default function useLogin(onLogin) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [enableSubmit, setEnableSubmit] = useState(false)

    const isValidEmail = (value) => /\S+@\S+\.\S+/.test(value)

    const isValidPasword = (value) => value.length >= 8

    useEffect(() => {
        if (isValidEmail(email) && isValidPasword(password)) {
            setEnableSubmit(true)
        } else {
            setEnableSubmit(false)
        }
    }, [email, password])

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (enableSubmit && typeof onLogin === 'function') {
            onLogin(email, password)
        }
    }

    return {
        email,
        password,
        enableSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    }
}