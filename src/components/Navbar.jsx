import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {HiMenuAlt3} from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if(!nav) {
            document.body.style.overflow = 'hidden' 
        } else {
            document.body.style.overflow = 'scroll'
        }
    };
  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
        <HiMenuAlt3 onClick={handleNav} size={25} className='text-white cursor-pointer z-20' />
        <div 
            className={
                nav
                ? 'fixed ease-in duration-300 text-gray-300 left-0 top-0 w-full h-screen bg-black/90 py-7 flex-col z-10' 
                :'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
            <ul className='flex flex-col fixed w-full h-full items-center justify-center className="font-bold text-3xl p-8"'>
                <Link to="/home" className="font-bold  cursor-wait">Home</Link>
                <Link to="/destination" className="font-bold   cursor-pointer">Destinations</Link>
                <Link to="/reservation" className="font-bold   cursor-pointer">Reservations</Link>
                <Link to="/amenities" className="font-bold   cursor-pointer">Amenities</Link>
                <Link to="/rooms" className="font-bold   cursor-pointer">Rooms</Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
