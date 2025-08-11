import React from 'react'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatshapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center  w-220 m-auto  '>
          <div className='flex flex-col items-center justify-center gap-9 mt-16 p-5  mb-50 '>
          
                      <div className='flex flex-row items-center justify-center gap-3 '>
                      <img src={logo} alt='' className='h-15 w-10 '/>
                      <h1 className='text-4xl font-bold '>SHOPPER</h1>
                      </div>
                
                      <div>
                          <ul className='flex flex-row items-center justify-between gap-5 '>
                              <li>Company</li>
                              <li>Products</li>
                              <li>Offices</li>
                              <li>About</li>
                              <li>Contact</li>
          
                          </ul>
                          <div className='flex flex-row  items-center justify-center gap-10 mt-10  mb-10'>
                            <img src={instagram_icon} alt='' className=' p-1 shadow-md bg-gray-100 cursor-pointer  '/>
                            <img src={pintester_icon} alt='' className=' p-1 shadow-md bg-gray-100 cursor-pointer  '/>
                            <img src={whatshapp_icon} alt='' className=' p-1 shadow-md bg-gray-100 cursor-pointer'/>
                          </div>
                          <div className='flex flex-col items-center justify-center gap-2 '>
                            <hr className='bg-black-200 h-2 w-100'/>
                            <p>Copyright @ 2025 -ALL Rights Resever</p>
                          </div>
                      </div>
                     
                   </div>
    </div>
  )
}

export default Footer
