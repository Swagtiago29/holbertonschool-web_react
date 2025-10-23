import React from 'react'

function Login() {
    return (
        <div className='App-body border-t-4 border-[var(--main-color)] pt-3 mb-90'>
            <p className='ml-8 mb-5'>Login to access the full dashboard</p>
            <label className='ml-8' htmlFor="email">Email</label>
            <input className='ml-2 border-1 rounded h-6' id='email' name='email' />
            <label className='ml-2' htmlFor="password">Password</label>
            <input className='ml-2 border-1 rounded h-6' id='password' name='password' />
            <button className='ml-1 px-1 rounded border-1 ml-2' type='button'>OK</button>
        </div>
    )
}

export default Login