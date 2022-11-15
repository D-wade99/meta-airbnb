import React from 'react'
import X from '../assets/x.png'
import Metamask from '../assets/wallet1.png'
import walletConnect from '../assets/wallet2.png'
import arrow from '../assets/Down Chevron.png'

const Modal = ({visible, onClose}) => {

  const handleOnClose = (e) => {
     if(e.target.id === 'container') onClose();
  };
  
  if (!visible) return null;

  return (
    <div id='container' onClick={handleOnClose} className='fixed top-0 right-0 inset-0 bg-black bg-opacity-30  flex justify-center items-center '>
      <div className='bg-white rounded-2xl  md:w-[600px] w-[400px] h-60  ' >
        <div className='flex justify-between px-6 pt-6'>
          <p className='font-bold  '>Connect to wallet</p>
          <img src={X} alt='close' onClick={onClose} />
        </div>
        <div className='pt-4 px-6 mt-2  border-t-[1px]'>
          <span className='text-[12px]  '>Choose your preferred wallet</span>

          <div className='flex justify-between mt-2 mb-4 items-center bg-[#F8F9FA] border rounded-xl border-[#CFD8DC] py-1 px-2 ' >
            <img src={Metamask} alt='//' />
            <img src={arrow} alt='//' className='h-5 w-5' />
      
          </div>

          <div className='flex justify-between mb-4 items-center  border rounded-xl border-[#CFD8DC] py-1 px-2 ' >
            <img src={walletConnect} alt='//' />
            <img src={arrow} alt='//' className='h-5 w-5' />
          </div>
        </div>
        
        
        
      </div>
    </div>
  )
}

export default Modal