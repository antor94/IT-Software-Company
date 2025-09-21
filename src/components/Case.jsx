import React from 'react'
import caseImg from '../assets/images/caseBanner.png'
import CommonHead from './common/CommonHead'
import caseLogo from '../assets/images/caseLogo.png'

const Case = () => {
  return (
    <>
    

    <div id='case'>
        <div className="container">

            {/* -------------- common */}
            <div className='flex justify-between items-center'>
                <div>
            <h2 className='text-[40px] font-extrabold font-main  text-main pb-[24px]'>Case Studies</h2>
            <div className='w-[636px]' ><CommonHead comP={'We bring real solutions to each client’s problems through a deep understanding of their market, solution, and vision.'} /></div>
                </div>
            <div className='w-[215px] border border-[#6365f157] py-[13px] text-[16px] font-semibold font-main text-[#6366F1] rounded-[8px] text-center'>See all case studies</div>
            </div>
        </div>
    </div>

    <section id='case2' style={{  background: `URL(${caseImg})`, backgroundRepeat: `no-repeat`,  backgroundSize: `cover`, }} >
        <div className="container">
            <div className='w-[526px] h-[420px] bg-[#FFFFFF] rounded-[8px]'>
                <div><img src={caseLogo} alt="case-logo" /></div>

                <h2>Cashless payment case study</h2>
                <p>Payment Service Provider Company</p>
                <div><p>Aenean dolor elit tempus tellus imperdiet. Elementum, ac convallis morbi sit est feugiat ultrices. Cras tortor maecenas pulvinar nec ac justo. Massa sem eget semper odio ornare...</p></div>
                <button className='w-[163px] bg-[#6366F1] rounded-[8px]'>View case study</button>

            </div>
        </div>

    </section>
    
    
    
    
    
    </>
  )
}

export default Case