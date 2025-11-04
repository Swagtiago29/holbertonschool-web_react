import React from 'react'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
  return (
    <div className='App-footer border-t-4 border-[var(--main-color)] flex justify-center max-[912px]:m-2 max-[912px]:mt-0'>
      <p className='mt-3 italic text-[16px]'>Copyright {getCurrentYear()} - {getFooterCopy(true)} main dashboard</p>
    </div>
  )
}

export default Footer