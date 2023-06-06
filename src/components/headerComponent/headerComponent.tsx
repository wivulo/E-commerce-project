import {FaUser, FaShoppingBag, FaBars, FaSearch} from 'react-icons/fa'
import './header.css';

const Header = () => {
  let w = window.innerWidth;
  return (
    <header className="w-full h-36 px-4 pt-5 bg-base-soft min-w-80">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-row justify-between items-center">
          <div className="logo w-auto">
            <h1 className='text-main-third text-xl font-semibold'>E-commerce</h1>
          </div>

          <div className="button-group w-auto flex gap-x-2">
            <button>
              <FaUser className='w-6 h-6 text-main-medium'/>
            </button>
            <button className='relative grid place-content-center'>
              <span className='absolute w-6 h-6 text-main-white bg-main-third rounded-full -right-3 -top-2 grid place-content-center'>
                3
              </span>
              <FaShoppingBag className='w-6 h-6 text-main-medium'/>
            </button>
          </div>
        </div>
        <div className="flex flex-row  gap-x-2 justify-between items-center">
          <div className='h-12 w-12 grid place-content-center bg-main-white rounded-full'>
            <button className='w-8 h-6 flex justify-center items-center'>
              <FaBars className='w-6 h-6 fabars text-main-medium'/>
            </button>
          </div>
          <div className="flex w-56 h-12 rounded-full bg-main-white overflow-hidden py-2">
            <input type="text" placeholder='Search anything' 
            className='rounded-md w-3/4 ml-3 focus:border-none focus:outline-none'/>
            <button type="submit">
              <FaSearch className='w-6 h-6 text-main-medium'/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
