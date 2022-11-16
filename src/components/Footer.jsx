import React from "react";
import Meta2 from '../assets/MetaLogo.svg'
import {GrFacebookOption, GrInstagram, GrTwitter} from 'react-icons/gr'

function Footer(props) {
    return (
        <div className='w-screen  bg-black text-white grid grid-cols-2 md:grid-cols-4 gap-4 px-10 pt-8 '>
            <div>
                <div className=' mb-[96px] '>
                    <img src={Meta2} alt='//' />
                </div>
                <div className=' flex gap-4 mb-[55px] ' >
                    <GrFacebookOption />
                    <GrInstagram />
                    <GrTwitter />

                </div> 
                <span className=' font-normal text-[12px] text-[#F7F7F7]  '>© 2022 Metabnb</span>
            </div>
            <div>
                <ul>
                    <li className='font-bold text-lg py-2'>Community</li>
                    <li className="py-2" >NFTS</li>
                    <li className="py-2" >Tokens</li>
                    <li className="py-2" >Landlords</li>
                    <li className="py-2" >Discord</li>
                </ul>
            </div>
            <div>
               <ul>
                    <li className='font-bold text-lg py-2'>Places</li>
                    <li className="py-2" >Castle</li>
                    <li className="py-2" >Farm</li>
                    <li className="py-2" >Beach</li>
                    <li className="py-2" >Learn more</li>
                </ul> 
            </div>
                
            <div>
               <ul>
                    <li className='font-bold text-lg py-2'>About us</li>
                    <li className="py-2" >Road map</li>
                    <li className="py-2" >Creators</li>
                    <li className="py-2" >Career</li>
                    <li className="py-2" >Contact us</li>

                </ul> 
            </div>
                
            
        </div>
    )
}
    
export default Footer;