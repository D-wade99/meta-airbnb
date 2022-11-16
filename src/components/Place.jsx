import React from 'react'
import location from '../assets/placeLocation.png'
import one from '../assets/building-1.png'
import two from '../assets/building-2.png'
import three from '../assets/building-3.png'
import four from '../assets/building-4.png'
import five from '../assets/building-5.png'
import six from '../assets/building-6.png'
import seven from '../assets/building-7.png'
import eight from '../assets/building-8.png'
import nine from '../assets/building-9.png'
import ten from '../assets/building-10.png'
import eleven from '../assets/building-11.png'
import twelve from '../assets/building-12.png'
import thirteen from '../assets/building-13.png'
import fourteen from '../assets/building-14.png'
import fifteen from '../assets/building-15.png'
import sixteen from '../assets/building-16.png'


const Place = () => {
  return (
    <div className='w-full px-8'>
      <div>
        <ul className='hidden md:flex justify-center items-center gap-x-4'>
            <li>Restaurant</li>
            <li>Cottage</li>
            <li>Castle</li>
            <li>fantast city</li>
            <li>beach</li>
            <li>Carbins</li>
            <li>Off-grid</li>
            <li>Farm</li>
            <li><img src={location} alt='/' /></li>
        </ul>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 md:grid-rows-4 gap-4 py-6'>
            <img src={one} alt='/' />
            <img src={two} alt='/' />
            <img src={three} alt='/' />
            <img src={four} alt='/' />
            <img src={five} alt='/' />
            <img src={six} alt='/' />
            <img src={seven} alt='/' />
            <img src={eight} alt='/' />
            <img src={nine} alt='/' />
            <img src={ten} alt='/' />
            <img src={eleven} alt='/' />
            <img src={twelve} alt='/' />
            <img src={thirteen} alt='/' />
            <img src={fourteen} alt='/' />
            <img src={fifteen} alt='/'/>
            <img src={sixteen} alt='/'/>
            
      </div>
    </div>
  )
}

export default Place