import {useState} from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ImageDisplay from "./ImageDisplay";
import thumbnailOne from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnailThree from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnailFour from "../assets/images/image-product-4-thumbnail.jpg";
import imageOne from "../assets/images/image-product-1.jpg";
import iconPlus from '../assets/images/icon-plus.svg'
import iconMinus from '../assets/images/icon-minus.svg'
import ImageDisplaySmall from "./ImageDisplaySmall";
import Sidebar from "./Sidebar";
const MainPage = () => {

  const [orderQuantity , setOrderQuantity] = useState(0)
  const [viewPicPageOpen,setViewPicPageOpen] = useState(false)
  const [cartQuantity, setCartQuantity] = useState(0)
  const [showCart, setShowCart] = useState(false)
  const [openSideBar, setOpenSideBar] = useState(false)

  const increaseQuantity =()=>{
    setOrderQuantity((prev)=>prev+1)
  }

  const decreaseQuantity = () =>{
    if (orderQuantity > 0) {
      setOrderQuantity((prev)=>prev-1)
    }
  }

  const addToCart =()=> {
      setCartQuantity((prev)=>prev + orderQuantity)
  }

  return (
    <div className=" sm:px-48 relative min-h-screen">
      <Navbar cartQuantity={cartQuantity} setShowCart={setShowCart} setOpenSideBar={setOpenSideBar}/>
      <Cart showCart={showCart} cartQuantity={cartQuantity} setCartQuantity={setCartQuantity}/>
      <div className="flex  flex-col sm:flex-row  items-center  sm:my-20 sm:gap-20 ">
        <ImageDisplaySmall/>
        <div className="w-[40%] hidden  sm:flex flex-col  items-center">
          <img
            src={imageOne}
            alt="image-first-product"
            className="w-[450px] rounded-md cursor-pointer"
            onClick={()=>setViewPicPageOpen(true)}
          />
          <div className="flex gap-4 mt-3">
            <div className="relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-white/40 ">
            <img src={thumbnailOne} className="w-[100px] rounded-md border-orange-600 border-2" />
            </div>
            <div>
            <img src={thumbnailTwo} className="w-[100px] rounded-md" />
            </div>
            <div>
            <img src={thumbnailThree} className="w-[100px] rounded-md" />
            </div>
            <div>
            <img src={thumbnailFour} className="w-[100px] rounded-md" />
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] w-full sm:px-10 px-4  py-6">
          <p className="text-sm text-orange-500 uppercase font-display font-semibold">
            sneaker company
          </p>
          <p className="text-4xl sm:w-[70%] w-full font-bold font-display mt-4 mb-8  ">
            Fall Limited Edition Sneakers
          </p>
          <p className="text-sm text-gray-500  font-display sm:w-[80%] w-full leading-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they will withstand everything
            the weather can offer.
          </p>
          <div className="flex sm:flex-col justify-between items-end sm:items-start">
          <div className="flex gap-3 mt-6 items-center">
            <p className="font-bold font-display text-2xl">$125.00</p>
            <p className="text-orange-600 font-semibold font-display text-sm px-1 py-0.5 rounded-sm bg-orange-100">
              50%
            </p>
          </div>
          <p className="text-lg sm:text-sm text-gray-400 font-display mt-1 line-through">
            $250.00
          </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
            <div className="flex justify-between bg-gray-100 rounded-md">
              <button className="p-3" onClick={()=>decreaseQuantity()} >
                <img src={iconMinus} alt="iconplus" />
              </button>
              <div className="py-3 w-8 flex justify-center items-center">
              <p className="font-display font-semibold ">{orderQuantity || 0}</p>
              </div>
              <button className="p-3" onClick={()=>increaseQuantity()}>
                <img src={iconPlus} alt="iconplus" />
              </button>
            </div>
            <div className="flex gap-2 items-center py-3 justify-center sm:w-[60%] w-full bg-orange-400 hover:bg-orange-300 transition-all  rounded-md cursor-pointer" onClick={addToCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-shopping-cart text-white"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l14 1l-1 7h-13"></path>
              </svg>
              <p className="text-sm text-white font-semibold font-display">Add to cart</p>
            </div>
          </div>
        </div>
      </div>
      <ImageDisplay viewPicPageOpen={viewPicPageOpen} setViewPicPageOpen={setViewPicPageOpen}/>
      <Sidebar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
    </div>
  );
};

export default MainPage;
