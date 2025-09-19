import React from 'react'
import { AiOutlineLike } from "react-icons/ai";

const NewsCommon = () => {
  return (
    <>

    <div className='w-[387px] h-[386px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] rounded-[8px] '>
        <div className='p-[40px]'>


            <div><h3 className='text-[24px] font-extrabold font-main text-[#3E4265]'>Mobile app generates data for the energy management</h3></div>
            <div className='w-[307px]'><p className='text-[16px] font-normal font-main text-[#585C7B]'>Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. </p></div>

            {/* -------- icon */}
            <div>
                <button><AiOutlineLike /></button>
                <p className='text-[14px] font-normal font-main text-[#9397AD]'>2</p>
            </div>

        </div>


    
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default NewsCommon