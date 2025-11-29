'use client'
import { useState } from 'react'
import { Menu, ShoppingCart, User, X } from 'lucide-react'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SHOP', href: '/shop' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className=' grid grid-cols-12 '>
      <div className=' col-span-12 xl:col-span-8 xl:col-start-3 px-4 sm:px-6 lg:px-8'>
        {/* Desktop & Mobile wrapper */}
        <div className='flex justify-between items-center py-2'>
          {/* Logo */}
          <a href='/' className='text-3xl text-[#07771C] font-bold'>
            VitalLife
          </a>

          {/* Desktop Menu */}
          <div className='hidden xl:flex flex-1 justify-center items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='text-gray-700 hover:text-green-700 text-base font-medium'
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <section className='hidden xl:flex gap-4'>
            <div>
              <ShoppingCart size={24} />
            </div>
            <div className='flex gap-1 text-base'>
              <User />
              <button>LOGIN</button>
            </div>
          </section>

          {/* Mobile Menu Button */}
          <button
            className='xl:hidden text-gray-700 hover:text-black'
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className='xl:hidden mt-2 space-y-2 px-2 pb-4'>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className='block text-gray-700 py-2 text-lg hover:text-black'
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* Mobile Button */}
            <div className='pt-3 gap-4'>
              <div className='mb-4'>
                <ShoppingCart />
              </div>
              <div className='flex gap-1'>
                <User />
                <button>LOGIN</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
