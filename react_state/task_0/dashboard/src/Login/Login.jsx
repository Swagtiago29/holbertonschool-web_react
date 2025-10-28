import React from 'react'

function Login() {
    return (
        <div className='App-body border-t-4 border-(--main-color) pt-3 mb-70 max-[912px]:mb-50 max-[912px]:flex max-[912px]:flex-col'>
            <p className=' mb-5'>Login to access the full dashboard</p>
                <label className='' htmlFor="email">Email</label>
                <input className='ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]' id='email' name='email' />
                <label className='ml-3 max-[912px]:ml-0 max-[912px]:mt-2' htmlFor="password">Password</label>
                <input className='ml-1 max-[912px]:ml-0 border rounded h-6 max-[912px]:w-[60%]' id='password' name='password' />
            <button className='px-1 max-[912px]:mt-2 rounded border w-[35px]' type='button'>OK</button>
        </div>
    )
}

export default Login