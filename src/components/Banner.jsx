import React from 'react'
import bannerImg from '../assets/images/bannerImg.png'


const Banner = () => {
  return (
    <>
    
    
    <section  id='banner' style={{  background: `URL(${bannerImg})`,  backgroundRepeat: `no-repeat`,    backgroundSize: `cover`, }}
        className=" bg-left lg:backgroundPosition: center, w-full pt-[163px] pb-[199px] relative z-999 lg:py-[228px]" > 

        <div className="container">
            <div id='banner-row'>
                <div id='heading' className='w-[856px]'>
                    <div className='w-[856px] text-center'>
                    <h1 className='text-[72px] font-extrabold font-main text-white'>The Best IT Solutions for Your Business</h1>

                    </div>
                    <p>We carry out the widest range of high quality IT services and solutions to our customers making their business better.</p>
                    <button className='w-[200px] bg-[#6366F1]'>Start your project</button>

                </div>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}

export default Banner