import React from 'react';
import {HiMenuAlt3} from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
        <HiMenuAlt3 size={25} className='text-white cursor-pointer' />
        <div>
            <ul>
                <li>Home</li>
                <li>Destinations</li>
                <li>Reservations</li>
                <li>Amenities</li>
                <li>Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar