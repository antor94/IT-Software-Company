import React from 'react'
import bannerImg from '../assets/images/bannerImg.png'


const Banner = () => {
  return (
    <>
    
    
    <section  id='banner' style={{  background: `URL(${bannerImg})`,  backgroundRepeat: `no-repeat`,    backgroundSize: `cover`, }}
        className=" bg-left lg:backgroundPosition: center, w-full pt-[163px] pb-[199px] relative lg:py-[228px]" > 
        <div className='w-full h-[600px] bg-[#131022] absolute top-0 left-0 opacity-50 '></div>
        <div className="container">
            <div id='banner-row'>
                <div className=''>

                </div>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Banner