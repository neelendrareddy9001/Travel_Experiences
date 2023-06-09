import React from 'react';
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
                <li className="font-bold text-3xl p-8">Home</li>
                <li className="font-bold text-3xl p-8">Destinations</li>
                <li className="font-bold text-3xl p-8">Reservations</li>
                <li className="font-bold text-3xl p-8">Amenities</li>
                <li className="font-bold text-3xl p-8">Rooms</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
