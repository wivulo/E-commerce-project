import {FaUser, FaShoppingBag, FaBars, FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <header className="w-full h-36 px-4 pt-5 bg-base-soft">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <div className="logo w-auto h-10">
            <h1 className='text-main-third text-xl font-semibold'>E-commerce</h1>
          </div>

          <div className="button-group w-auto flex gap-x-2">
            <button>
              <FaUser className='w-6 h-6'/>
            </button>
            <button>
              <FaShoppingBag className='w-6 h-6'/>
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div>
            <button className='w-8 h-6 flex justify-center items-center'>
              <FaBars className='w-6 h-6'/>
            </button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder='Search' className='w-96 h-10 px-4 rounded-md'/>
            <button type="submit">
              <FaSearch className='w-6 h-6'/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
