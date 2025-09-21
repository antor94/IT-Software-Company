import React from 'react'
import bannerImg from '../assets/images/bannerImg.png'


const Banner = () => {
  return (
    <>
    
    
    <section  id='banner' style={{  background: `URL(${bannerImg})`,  backgroundRepeat: `no-repeat`,    backgroundSize: `cover`, }}
        className=" bg-left lg:backgroundPosition: center, w-full pt-[163px] pb-[199px]  relative z-999 lg:py-[228px]" > 
        <div className=' absolute top-0 left-0 bg-linear-to-r from-[#13102260] to-[#13102298] w-full h-100'></div>

        <div className="container">
            <div id='banner-row' className=' z-999'>
                <div id='heading' className='w-[856px] z-9999'>
                    <div className='w-[856px] text-center'>
                    <h1 className='text-[72px] z-9999 font-extrabold font-main text-white'>The Best IT Solutions for Your Business</h1>

                    </div>
                    <div className='w-[856px] text-center'>
                    <p className='text-[20px] font-normal font-main text-[#fff]'>We carry out the widest range of high quality IT services and solutions to our customers making their business better.</p>

                    </div>
                    <button className='w-[200px] py-[13px] text-[16px] font-semibold font-main text-[#fff] rounded-[8px] bg-[#6366F1]'>Start your project</button>

                </div>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Banner