import './App.css'
import Navbar from './common/Navbar'
import CustomersSays from './component/CustomersSays'
import Features from './component/Features'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Offer from './component/Offer'
import Product from './component/Product'
import Reviews from './component/Reviews'
import Story from './component/Story'

function App() {
  return (
    <>
      <div className='navbar h-auto md:h-auto pb-14'>
        <Navbar />
        <Hero />
      </div>
      <Story />
      <Features />
      <Product />
      <Offer />
      <CustomersSays />
      <Reviews />
      <Footer />
    </>
  )
}

export default App
