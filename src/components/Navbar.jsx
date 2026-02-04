import React, { useState, useEffect } from 'react'
import { Home, Hotel, CalendarCheck, UserCircle, Menu } from 'lucide-react'
import { Link } from 'react-router'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', icon: <Home size={20} />, href: '/' },
        { name: 'Find Stays', icon: <Hotel size={20} />, href: '/properties' },
        { name: 'My Bookings', icon: <CalendarCheck size={20} />, href: '#' },
    ]

    return (
        <nav className={`sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3 transition-all duration-300 
      ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>

            {/* Brand Section */}
            <div className='flex items-center gap-2'>
                <div className='w-8 md:w-10'>
                    <img src="/Logo.png" alt="Logo" className='object-contain w-full' />
                </div>
                <div className='text-xl md:text-2xl font-bold'>
                    <span className='text-slate-800'>Swift</span>
                    <span className='text-blue-600'>Stay</span>
                </div>
            </div>

            {/* Navigation Options (Desktop) */}
            <div className='hidden md:flex items-center gap-8'>
                {navLinks.map((link) => (
                    <Link key={link.name} to={link.href} className='flex items-center gap-1.5 text-slate-600 hover:text-blue-600 font-medium transition-colors'>
                        {link.icon}
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Action Icons (User Profile & Mobile Menu) */}
            <div className='flex items-center gap-4'>
                <button className='p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-700'>
                    <UserCircle size={28} />
                </button>
                <button className='md:hidden p-2 text-slate-700'>
                    <Menu size={28} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar
