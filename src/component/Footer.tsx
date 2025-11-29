import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa6'
import { IoLogoTwitter } from 'react-icons/io'
const Footer = () => {
  return (
    <footer className='grid grid-cols-12  px-4 md:px-0 bg-black text-white mt-10 md:mt-20'>
      <div className='col-span-12 xl:col-span-8 xl:col-start-3 px-4 sm:px-6 lg:px-8 py-12'>
        {/* Main grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div>
            <h1 className='text-[#07771C] text-2xl md:text-3xl font-bold px-2 py-1 inline-block mb-4'>
              VitalLife
            </h1>
            <p className='text-sm md:text-base text-gray-300'>
              Pure wellness for optimal living. Authentic natural supplements
              backed by science.
            </p>
            <div className='flex gap-3 mt-6'>
              <FaFacebookF />
              <IoLogoTwitter />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className='text-lg md:text-[20px] font-semibold mb-4'>
              Company
            </h2>
            <ul className='space-y-2'>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                About Us
              </li>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Products
              </li>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Contact Us
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className='text-lg md:text-[20px] font-semibold mb-4'>
              Support
            </h2>
            <ul className='space-y-2'>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Shipping Info
              </li>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Return
              </li>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                FAQ
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className='text-lg md:text-[20px] font-semibold mb-4'>Legal</h2>
            <ul className='space-y-2'>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Terms & Conditions
              </li>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Privacy Policy
              </li>
              <li className='hover:text-[#07771C] cursor-pointer transition-colors'>
                Cookies Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
