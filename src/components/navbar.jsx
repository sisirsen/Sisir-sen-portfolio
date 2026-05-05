import React from 'react'
import icons from '../utils/iconAccess'

function Navbar() {
  const navItems=[
    {item:'Home'},
    {item:'About'},
    {item:'Skills'},
    {item:'Projects'},
    {item:'Contact'}
  ]
  return (
    <div className='h-screen bg-[#0F172A]'>
      <div className='flex p-4 items-center bg-[#05091A] '>
        <div className=' bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-2xl font-bold'>SISIR SEN</div>

        <div className='md:hidden h-7 w-7 ml-auto '><img src={icons.menuButton}  alt="menu" /></div>

        <div className='hidden sm:flex  ml-auto gap-8 text-lg text-white cursor-pointer'>
        {navItems.map((items)=> <p className='hover:underline'>{items.item}</p>
        )}
      </div>
      </div>

      
    </div>
  )
}

export default Navbar