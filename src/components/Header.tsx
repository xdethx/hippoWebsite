'use client'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import Snowfall from 'react-snowfall'

const Header = () => {
    const navigation = [
        {
            _id:1,
            title:"All Products",
            href:"/",
        },
        {
    _id:2,
    title:"Incense Burners",
    href:"/incense-burners",
},
{
    _id:3,
    title:"christmas",
    href:"/christmas",
},
{
    _id:4,
    title:"Home Decor",
    href:"/home-decor",
},
{
    _id:5,
    title:"favor",
    href:"/celebration-favors",
},



    ]
  return (
    <Popover className='container mx-auto flex items-center border-b-2 px6 py-2 h-24  '>
         <Snowfall    style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
  }}/>
     

    
   <h1 className='font-bold'>Ghosthippo</h1>
   <div className='grow'>
<div className=' hidden sm:flex items-center justify-center gap-2 '>
{
    navigation.map((item)=>(
        <Link href={item?.href}
        key={item?._id}
         className='uppercase text-sm hover:text-white duration-200 '>
            {item?.title}
         </Link>
    ))
}
</div>
   </div >
   <div className=' flex grow items-center justify-end sm:hidden  '    >
<Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500  '    >
<span className='sr-only' > Open menu</span>
<Bars3Icon className='h-6 w-6' aria-hidden='true' />
</Popover.Button>   
   </div>
   <Popover.Overlay className=' sm:hidden fixed inset-0 bg-black opacity-30  '/>
   <Transition as={Fragment} 
   enter='duration-200 ease-out'
   enterFrom='opacity-0 scale-95 '
   enterTo='opacity-100 scale-100'
   leave='duration-100 ease-in'
   leaveFrom='opacity-100 scale-100'
   leaveTo='opacity-0 scale-95 '
   >
   <Popover.Panel focus className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden ' >
<div className='rounded-lg bg-white shadow-lg  ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 ' >
<div className='px-5 pt-5 pb-6' >
<div className='flex items-center justify-between '>
 <h1 className='font-bold' >Ghosthippo</h1>
<div className='-mr-2' >
<Popover.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500  '    >
<span className='sr-only' > Close menu</span>
<XMarkIcon className='h-6 w-6' aria-hidden='true' />
</Popover.Button>
  </div>
</div>
<div className='mt-1'>
<nav className='grid grid-cols-2 gap-y-2'>
{
    navigation.map((item)=>(
        <Link href={item?.href}
        key={item?._id}
         className='focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 z-40 '>
            {item?.title}
         </Link>
    ))
}
</nav>
</div>
<div className='mt-6 flex flex-col items-center gap-2'>
<Link className='rounded-md bg-white px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500  ' href='https://ghosthippo.etsy.com'>Visit Etsy</Link>
</div>
</div>
</div>
   </Popover.Panel>
   </Transition>
 
   <div className='hidden sm:block' >
    <Link className='font-bold' href='https://ghosthippo.etsy.com'>Visit Etsy</Link>
   </div>
</Popover>
  )
}

export default Header