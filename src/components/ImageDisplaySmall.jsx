import {useState} from 'react'
import imageOne from "../assets/images/image-product-1.jpg";
import imageTwo from "../assets/images/image-product-2.jpg";
import imageThree from "../assets/images/image-product-3.jpg";
import imageFour from "../assets/images/image-product-4.jpg";
const ImageDisplaySmall = () => {
    const [displayImageIndex, setDisplayImageIndex] = useState(0)

    const images = [
        {imageSrc:imageOne,id:0,title:"Shoe image One"},
        {imageSrc:imageTwo,id:1,title:"Shoe image Two"},
        {imageSrc:imageThree,id:2,title:"Shoe image Three"},
        {imageSrc:imageFour,id:3,title:"Shoe image Four"}
    ]

    const nextImage = () =>{
        if(displayImageIndex < images.length-1){
            setDisplayImageIndex((prev)=>prev+1)
        }
    }

    const prevImage = () =>{
        if(displayImageIndex > 0) {
            setDisplayImageIndex((prev)=>prev - 1)
        }
    }
  return (
    <div className='w-full relative sm:hidden'>
          <img src={images[displayImageIndex].imageSrc} className="w-full h-[350px] rounded-md object-cover" alt={images[displayImageIndex].title}/>
               <button className="bg-white absolute left-2 top-1/2 p-3 rounded-full  mt-[-30px] group" onClick={prevImage}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left group-hover:text-orange-400 transition-all" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
               </button>
               <button className="bg-white absolute right-2 top-1/2 p-3 rounded-full  mt-[-30px] group" onClick={nextImage}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right group-hover:text-orange-400 transition-all" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
               </button>
    </div>
  )
}

export default ImageDisplaySmall