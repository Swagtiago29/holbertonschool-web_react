import React from 'react'

function BodySection({ title, children }) {
  return (
    <div className='bodySection max-[912px]:m-2'>
      <h2 className='font-bold'>{title}</h2>
      {children}
    </div>
  )
}

export default BodySection