import React, { useState, useEffect } from 'react';

function Login({ email = '', password = '', logIn = () => { } }) {
    const [formData, setFormData] = useState({
        email,
        password,
    });
    const [enableSubmit, setEnableSubmit] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            const { email, password } = formData;
            const emailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
            const passwordValidate = password.length >= 8;
            setEnableSubmit(emailValidate && passwordValidate && email !== '' && password !== '');
        };
        validateForm();
    }, [formData.email, formData.password, formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        logIn(formData.email, formData.password);
    };

    return (
        <div className="App-body border-t-4 border-(--main-color) pt-3 mb-70 max-[912px]:mb-50 max-[912px]:flex max-[912px]:flex-col">
            <p className="mb-5">Login to access the full dashboard</p>
            <form className="max-[912px]:flex max-[912px]:flex-col" onSubmit={handleLoginSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    className="ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]"
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label className="ml-3 max-[912px]:ml-0 max-[912px]:mt-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]"
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    className={`px-1 max-[912px]:ml-0 ml-3 max-[912px]:mt-2 rounded border w-[35px] ${!enableSubmit ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    type="submit"
                    value="OK"
                    disabled={!enableSubmit}
                />
            </form>
        </div>
    );
}

export default Login;
