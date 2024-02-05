import thumbnailOne from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnailThree from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnailFour from "../assets/images/image-product-4-thumbnail.jpg";
import imageOne from "../assets/images/image-product-1.jpg";
import imageTwo from "../assets/images/image-product-2.jpg";
import imageThree from "../assets/images/image-product-3.jpg";
import imageFour from "../assets/images/image-product-4.jpg";
import { useState } from "react";


const ImageDisplay = ({viewPicPageOpen,setViewPicPageOpen}) => {
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
    <div className={`absolute top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center transition-all duration-500 origin-[28%_55%]  ${viewPicPageOpen ? "scale-100" : "scale-0"}`}>
        <div className="w-[35%] h-[600px]  flex flex-col ">
            <button className="ml-auto mb-2" onClick={()=>setViewPicPageOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x text-white hover:text-orange-400 transition-all" width="28" height="28" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>
            <div className="relative">
               <img src={images[displayImageIndex].imageSrc} className="w-full h-[500px] rounded-md" alt={images[displayImageIndex].title}/>
               <button className="bg-white absolute left-0 top-1/2 p-3 rounded-full ml-[-20px] mt-[-50px] group" onClick={prevImage}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left group-hover:text-orange-400 transition-all" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
               </button>
               <button className="bg-white absolute right-0 top-1/2 p-3 rounded-full mr-[-20px] mt-[-50px] group" onClick={nextImage}>
               <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right group-hover:text-orange-400 transition-all" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
               </button>
            </div>
            <div className="flex justify-around mt-4">
                <div className={`border-2 border-transparent overflow-hidden rounded-md relative cursor-pointer ${displayImageIndex===0 
                    ? 
                    "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-white/30 " 
                    : ""
                    } `} onClick={()=>setDisplayImageIndex(0)}>
                <img src={thumbnailOne} className="w-[100px]"/>
                </div>
                <div className={`border-2 border-transparent overflow-hidden rounded-md relative cursor-pointer ${displayImageIndex===1 
                    ? 
                    "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-white/30 " 
                    : ""
                    } `} onClick={()=>setDisplayImageIndex(1)}>
                <img src={thumbnailTwo} className="w-[100px] rounded-md"/>
                    </div>
                    <div className={`border-2 border-transparent overflow-hidden rounded-md relative cursor-pointer ${displayImageIndex===2 
                    ? 
                    "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-white/30" 
                    : ""
                    } `} onClick={()=>setDisplayImageIndex(2)}>
                <img src={thumbnailThree} className="w-[100px] rounded-md"/>
                    </div>
                    <div className={`border-2 border-transparent overflow-hidden rounded-md relative cursor-pointer ${displayImageIndex===3 
                    ? 
                    "before:absolute before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:bg-white/30" 
                    : ""
                    } `} onClick={()=>setDisplayImageIndex(3)}>
                <img src={thumbnailFour} className="w-[100px] rounded-md"/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ImageDisplay