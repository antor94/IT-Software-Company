import React from 'react'
import CommonHead from './common/CommonHead'
import NewsCommon from './common/NewsCommon'

const News = () => {
  return (
    <>
    
    
    
    <section id='News' className='pb-[141px] pt-[102px] bg-[#F3F6FF]'>
        <div className="container">
            <div className='text-center'><CommonHead comH2={'News & Insights'} /></div>
            <div id='News-row' className='flex justify-center gap-[16px]'>

                <NewsCommon />
                <NewsCommon />
                <NewsCommon />


            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default News