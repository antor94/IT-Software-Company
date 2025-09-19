import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { VscComment } from "react-icons/vsc";
import { LuShare2 } from "react-icons/lu";

const NewsCommon = () => {
  return (
    <>

    <div className='w-[387px] h-[386px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.1)] rounded-[8px] '>
        <div className='p-[40px]'>


            <div><h3 className='text-[24px] font-extrabold font-main text-[#3E4265]'>Mobile app generates data for the energy management</h3></div>
            <div className='w-[307px]'><p className='text-[16px] font-normal font-main text-[#585C7B]'>Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas maecenas pharetra, tincidunt sollicitudin in in. </p></div>

            {/* -------- icon */}
            <div>
                <div className='flex items-center gap-[4px]'>

                <button><AiOutlineLike className='text-[18px] text-[#9397AD]' /></button>
                <p className='text-[14px] font-normal font-main text-[#9397AD]'>2</p>
            </div>
                 <div className='flex items-center gap-[4px]'>

                <button><VscComment className='text-[18px] text-[#9397AD]' /></button>
                <p className='text-[14px] font-normal font-main text-[#9397AD]'>4</p>
            </div>
                 <div className='flex items-center gap-[4px]'>

                <button><LuShare2 className='text-[18px] text-[#9397AD]' /></button>
                <p className='text-[14px] font-normal font-main text-[#9397AD]'>2</p>
            </div>
                </div>

        </div>


    
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default NewsCommon