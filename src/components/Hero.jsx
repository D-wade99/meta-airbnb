import React from 'react'
import group from '../assets/Group 4028.png'
import property1 from '../assets/property-1.png'
import property2 from '../assets/property-2.png'
import property3 from '../assets/property-3.png'
import property4 from '../assets/property-4.png'
import property5 from '../assets/property-5.png'
import property6 from '../assets/property-6.png'
import property7 from '../assets/property-7.png'
import property8 from '../assets/property-8.png'
import NFTS from '../assets/NFTs.png'
import token from '../assets/token.svg'
import Meta from '../assets/meta-mask.svg'
import openSea from '../assets/opensea.svg'


const Hero = () => {
return (
    <div className=' ' >
        <div class="grid md:grid-cols-2 gap-4 px-6 ">
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl md:text-5xl'>Rent a <span className='span'>Place</span> away from <span className='span'>Home</span> in the <span className='span'>Metaverse</span></h1>
                <p className='text-lg md:text-xl py-4'>we provide you access to luxury and affordable houses in the metaverse,  get a chance to turn your imagination to reality at your comfort zone </p>
                <div className='border-[1px] border-[#A3A3A3] flex justify-between rounded-lg mt-2  '>
                    <input className='p-2 shrink max-[420px]:w-[200px]'type='text' placeholder='Search for a location' />
                    <button className='px-[45px] py-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-[#ffffff] '>Search</button>
                </div>
            </div>
            <div  className=' flex justify-center items-center py-6' >
                <img src={group} alt='/'/>
            </div>
        </div>
        <div className='bg-gradient-to-r from-[#A02279] to-[#A02279] h-16 flex justify-between items-center px-8  '>
            <img src={token} alt='//' className='w-24 md:w-32 ' />
            <img src={Meta} alt='//' className='w-24 md:w-32 ' />
            <img src={openSea} alt='//' className='w-24 md:w-32  ' />
        </div>
        <div className=' flex justify-center items-center text-center mt-[39px] mb-[43px] '>
            <p className='text-[48px] font-bold '>Inspiration for your next adventure</p>
        </div>
        <div   className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 px-8 pb-8' >
            <img src={property1} alt='property' />
            <img src={property2} alt='property' />
            <img src={property3} alt='property' />
            <img src={property4} alt='property' />
            <img src={property5} alt='property' />
            <img src={property6} alt='property' />
            <img src={property7} alt='property' />
            <img src={property8} alt='property' />
            
        </div>
        <div className='bg-gradient-to-r from-[#A02279] to-[#A02279] grid md:grid-cols-2 px-8 text-[#ffffff]'>
        <div className='flex flex-col w-80 py-12 md:py-32'>
          <h1 className='text-3xl font-bold'>Metabnb NFTs</h1>
          <p className='py-8'>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs
            .These NFTs gives our customer access to loads of our exclusive services.
          </p>
            <div>
            <button className='bg-[#ffffff] text-[#A02279] px-8 py-4 rounded-lg'>Learn more</button>
            </div>
        </div>
            <div className='py-6 md:py-10'>
                <img className='w-[80%]' src={NFTS} alt='/' />
            </div>
        </div>
        
        
        
    </div>
)
}

export default Hero