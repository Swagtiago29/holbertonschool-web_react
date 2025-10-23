import React from 'react'
import { getCurrentYear, getFooterCopy } from '../utils/utils.js'

function Footer() {
  return (
    <div className='App-footer border-t-4 border-[var(--main-color)] flex justify-center'>
      <p className='mt-3 italic'>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
    </div>
  )
}

export default Footer