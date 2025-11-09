import PropTypes from 'prop-types';
import useLogin from '../hooks/useLogin';

function Login({ login }) {
    const {
        email,
        password,
        enableSubmit,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit,
    } = useLogin(login);

    return (
        <div className="App-body border-t-4 border-(--main-color) pt-3 mb-70 max-[912px]:mb-50 max-[912px]:flex max-[912px]:flex-col">
            <p className="mb-5">Login to access the full dashboard</p>
            <form className="max-[912px]:flex max-[912px]:flex-col" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    className="ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label className="ml-3 max-[912px]:ml-0 max-[912px]:mt-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
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

Login.propTypes = {
    login: PropTypes.func.isRequired,
};

export default Login;
