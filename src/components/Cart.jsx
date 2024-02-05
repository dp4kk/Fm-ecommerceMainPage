import thumbnailOne from "../assets/images/image-product-1-thumbnail.jpg";

const Cart = ({showCart, cartQuantity, setCartQuantity}) => {
  return (
    <div className={`absolute z-[10] w-full   max-w-[400px] bg-white top-15 sm:right-[100px] shadow-xl transition-all duration-500 origin-top ${showCart ? 'scale-100' : 'scale-0'}`} >
        <p className="font-semibold text-lg p-4 border-b border-gray-300">Cart</p>
        <div className="p-4">
            {
                cartQuantity > 0 ?
            (
                <div>
            <div className="flex justify-around">
                <img src={thumbnailOne} className="w-14 h-14 rounded-md"/>
                <div>
                    <p className="text-gray-400 font-semibold">Fall Limited Edition Sneakers</p>
                    <p className="text-gray-400">{`$125.00 x ${cartQuantity}`} <span className="text-black font-semibold">${cartQuantity*125}</span></p>
                </div>
                <button onClick={()=>setCartQuantity(0)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash text-gray-400" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                </button>
            </div>
            <button className="bg-orange-400 hover:bg-orange-300 transition-colors text-white w-full py-3 rounded-md my-4">
                Checkout
            </button>
            </div>
            )
            :
            (
                <div className="py-10">
                    <p className="text-center text-lg text-gray-400 font-display">Your cart is empty</p>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default Cart