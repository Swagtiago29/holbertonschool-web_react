import React from 'react'
class Login extends React.Component {

    static defaultProps = {
        email: '',
        password: '',
        logIn: () => { },
    }

    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            password: this.props.password,
            enableSubmit: false
        };
    }

    handleChangeEmail = (e) => {
        const value = e.target.value;
        this.setState({ email: value }, this.validateForm);
    }

    handleChangePassword = (e) => {
        const value = e.target.value;
        this.setState({ password: value }, this.validateForm);
    };

    handleLoginSubmit = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        this.props.logIn(email, password)

    }

    validateForm = () => {
        const { email, password } = this.state;
        const emailValidate = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
        const passwordValidate = password.length >= 8
        const enableSubmit = emailValidate && passwordValidate && email != '' && password != ''

        this.setState({ enableSubmit })
    }

    render() {
        return (
            <div className='App-body border-t-4 border-(--main-color) pt-3 mb-70 max-[912px]:mb-50 max-[912px]:flex max-[912px]:flex-col'>
                <p className=' mb-5'>Login to access the full dashboard</p>
                <form className='max-[912px]:flex max-[912px]:flex-col' onSubmit={this.handleLoginSubmit}>
                    <label className='' htmlFor="email">Email</label>
                    <input className='ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]'
                        id='email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChangeEmail} />
                    <label className='ml-3 max-[912px]:ml-0 max-[912px]:mt-2' htmlFor="password">Password</label>
                    <input className='ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]'
                        id='password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChangePassword} />
                    <input className={`px-1 max-[912px]:ml-0 ml-3 max-[912px]:mt-2 rounded border w-[35px] 
                        ${!this.state.enableSubmit ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type='submit'
                        value='OK'
                        disabled={!this.state.enableSubmit}></input>
                </form>
            </div>
        )
    }
}
export default Login