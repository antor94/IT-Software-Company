import React from 'react'
import CommonHead from './common/CommonHead'
import NewsCommon from './common/NewsCommon'

const News = () => {
  return (
    <>
    
    
    
    <section id='News'>
        <div className="container">
            <div className='text-center'><CommonHead comH2={'News & Insights'} /></div>
            <div id='News-row'>

                <NewsCommon />


            </div>
        </div>
    </section>
    
    
    
    
    
    
    </>
  )
}

export default News