import menuIcon from '../assets/images/icon-menu.svg'
import cartIcon from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
const Navbar = (props) => {
  const {cartQuantity, setShowCart, setOpenSideBar} = props
  return (
    <nav className="flex justify-between  items-center border-b border-gray-300 py-6 px-4 sm:px-0">
      <div className="flex items-center ">
        <img src={menuIcon} alt="menuIcon" className="sm:hidden mr-3 mt-1 cursor-pointer" onClick={()=>setOpenSideBar(true)} />
        <p className="text-3xl font-bold font-display ">sneakers</p>
        <ul className="sm:flex gap-10 ml-12  hidden mt-1">
          <li className="text-sm text-gray-400 relative after:content-[''] after:w-0 after:h-1 after:bg-orange-600 after:absolute after:left-0 after:bottom-0 after:inset-12 hover:after:w-full after:duration-500 transition-all hover:text-black cursor-pointer duration-500 font-display">
            Collections
          </li>
          <li className="text-sm text-gray-400 relative after:content-[''] after:w-0 after:h-1 after:bg-orange-600 after:absolute after:left-0 after:bottom-0 after:inset-12 hover:after:w-full after:duration-500 transition-all hover:text-black cursor-pointer duration-500 font-display">
            Men
          </li>
          <li className="text-sm text-gray-400 relative after:content-[''] after:w-0 after:h-1 after:bg-orange-600 after:absolute after:left-0 after:bottom-0 after:inset-12 hover:after:w-full after:duration-500 transition-all hover:text-black cursor-pointer duration-500 font-display">
            Women
          </li>
          <li className="text-sm text-gray-400 relative after:content-[''] after:w-0 after:h-1 after:bg-orange-600 after:absolute after:left-0 after:bottom-0 after:inset-12 hover:after:w-full after:duration-500 transition-all hover:text-black cursor-pointer duration-500 font-display">
            About
          </li>
          <li className="text-sm text-gray-400 relative after:content-[''] after:w-0 after:h-1 after:bg-orange-600 after:absolute after:left-0 after:bottom-0 after:inset-12 hover:after:w-full after:duration-500 transition-all hover:text-black cursor-pointer duration-500 font-display">
            Contact
          </li>
        </ul>
      </div>
      <div className='flex gap-6 items-center'>
      <div className='relative cursor-pointer' onClick={()=>setShowCart((prev)=>!prev)}>
      <img src={cartIcon}/>
      { (cartQuantity>0) &&
      (<div className='absolute top-0 right-0 aspect-square w-5 rounded-full bg-orange-500 flex justify-center items-center mt-[-12px] mr-[-6px]'>  
      <p className=' font-semibold text-[0.70rem]  text-white '>{cartQuantity}</p>
      </div>
      )
      }
      </div>
      <img src={avatar} className='w-10 h-10 border-2 hover:border-orange-500 transition-all cursor-pointer rounded-full '/>
      </div>
    </nav>
  );
}

export default Navbar