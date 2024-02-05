

const Sidebar = ({openSideBar, setOpenSideBar}) => {
  return (
    <div className={`${openSideBar ? 'w-full' : 'w-0'}  overflow-hidden h-full bg-black/70 sm:hidden absolute top-0 left-0 transition-all duration-300 ease-in-out`}>
        <div className='w-[70%] h-full bg-white p-6'>
            <button onClick={()=>setOpenSideBar(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>
            <ul className='flex flex-col gap-4 items-start mt-4'>
                <li className='font-semibold text-lg relative overflow-hidden before:content-[""] before:absolute before:border before:border-black before:w-full before:bottom-0 before:translate-x-[-100px] hover:before:translate-x-[0] before:transition-all before:duration-500'>Collections</li>
                <li className='font-semibold text-lg relative overflow-hidden before:content-[""] before:absolute before:border before:border-black before:w-full before:bottom-0 before:translate-x-[-100px] hover:before:translate-x-[0] before:transition-all before:duration-500'>Men</li>
                <li className='font-semibold text-lg relative overflow-hidden before:content-[""] before:absolute before:border before:border-black before:w-full before:bottom-0 before:translate-x-[-100px] hover:before:translate-x-[0] before:transition-all before:duration-500'>Women</li>
                <li className='font-semibold text-lg relative overflow-hidden before:content-[""] before:absolute before:border before:border-black before:w-full before:bottom-0 before:translate-x-[-100px] hover:before:translate-x-[0] before:transition-all before:duration-500'>About</li>
                <li className='font-semibold text-lg relative overflow-hidden before:content-[""] before:absolute before:border before:border-black before:w-full before:bottom-0 before:translate-x-[-100px] hover:before:translate-x-[0] before:transition-all before:duration-500'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar