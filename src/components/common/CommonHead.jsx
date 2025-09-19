import React from 'react'

const CommonHead = ({comH2 , comP}) => {
  return (
    <>
    
    
    <div>
        <h2 className='text-[40px] font-extrabold font-main text-main'>{comH2}</h2>
        <p className='text-[18px] font-normal font-main text-main'>{comP}</p>
    </div>
    
    
    
    
    </>
  )
}

export default CommonHead