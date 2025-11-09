import { React, useContext } from 'react'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js'
import Context from '../Context/context.js'

function Footer() {

  const { user } = useContext(Context);

  return (
    <div className='App-footer border-t-4 border-[var(--main-color)] flex flex-col text-center max-[912px]:m-2 max-[912px]:mt-0' >
      {user && user.isLoggedIn && (
        <p className='mt-3'>
          <a href='#'>
            Contact us
          </a>
        </p>
      )}
      <p className='italic text-[16px]'>Copyright {getCurrentYear()} - {getFooterCopy(true)} main dashboard</p>
    </div>
  )
}

export default Footer