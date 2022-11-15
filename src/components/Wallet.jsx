import React from 'react'
import Modal from './Modal'
import X from '../assets/x.png'
import Metamask from '../assets/wallet1.png'
import arrow from '../assets/Down Chevron.png'
import Walletconnect from '../assets/wallet2.png'


const Wallet = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className='flex  justify-between items-center border-b-[1px] p-2'>
        <p className='font-bold text-xl'>Connect Wallet</p>
        <img src={X} alt='/' onClick={props.onClose} />
      </div>
      <p className='py-4'>Choose your preferred wallet:</p>
      
      <div className='flex justify-between items-center rounded-xl bg-[#f8f9fa] border-[1px] border-[#cfd8dc] mb-4 p-2'>
        <img src={Metamask} alt='/' />
        <img src={arrow} alt='/' />
      </div>

      <div className='flex justify-between items-center rounded-xl  border-[#cfd8dc] border-[1px] mb-4 p-2'>
      <img src={Walletconnect} alt='/' />
      <img src={arrow} alt='/' />
      </div>
    </Modal>
  )
}
export default Wallet;