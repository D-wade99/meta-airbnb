import React, {useState} from 'react'
import Modal from './components/Modal'
import Hero from './components/Hero';
import Footer from './components/Footer';
import Place from './components/Place';
import {Route, Routes, Link } from 'react-router-dom'
import Metabnb from './assets/Group.png'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import './App.css';

function App() {
  
  const [showModal, setShowModal] = useState(false)

  const handleOnClose = () => setShowModal(false)

  const [nav, setNav] = useState(false)
    

    const handleNav = () => {
        setNav(!nav)
       
    }
  
    
  return (
    <div>
     
     <div className='w-full h-[80px] flex justify-between items-center px-6  '>
      <div>
        <img src={Metabnb} alt='Logo' style={{width: '60%'}}/>
      </div>

      <ul className='hidden md:flex gap-8 justify-center items-center'>
        
        <Link to='/'><li>Home</li></Link>
       <Link to='/place'><li>Place to stay</li></Link>
        <li>NFTs</li>
        <li>Community</li>
        
      </ul>

        <div className=' hidden md:flex '>
        <button onClick={() => setShowModal(true)} className=' px-[22px] py-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-[#ffffff] rounded-lg'>Connect wallet</button>
       </div>
       


      <div onClick={handleNav} className='md:hidden z-10'>
      {nav ?  <AiOutlineClose/>:  <AiOutlineMenu />} 
       </div>

       {/* mobile menu */}
       <ul onClick={handleNav} className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#ffffff]'} >
       <Link to='/'><li className='py-4'>Home</li></Link>
       <Link to='/place'><li className='py-4'>Place to stay</li></Link>
       <li  className='py-4'>NFTs</li>
       <li  className='py-4'>Community</li>
       <li className='py-4'>
       <button className=' px-[22px] py-[10px] bg-gradient-to-r from-[#A02279] to-[#A02279] text-[#ffffff] rounded-lg'>Connect wallet</button>
       </li>
        
       </ul>
    </div>
      
      <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/place' element={<Place/>} />
      </Routes>
      
      <Footer />
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
}

export default App;
