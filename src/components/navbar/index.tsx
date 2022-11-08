import Logo from './../../assets/logo.webp'
import { Link } from 'react-router-dom'
import { BsFillBasket3Fill } from 'react-icons/bs'
import {useScroll} from 'framer-motion'
import { useEffect,useState } from 'react'
import "./index.css"

const NavBar = () => {
    const {scrollY} =useScroll()
    const [top,setIsTop]= useState<Boolean>(true)
    useEffect(()=>{
        return scrollY.onChange((latest) => {
            
            latest<24?
            setIsTop(true)
            :
            setIsTop(false)
          })
    },[])
    return (
        <header className={`fixed w-full ${!top&&"bg-slate-800 shadow-xl h-16 transition-all duration-300 shadow-slate-700/20"} z-10 flex flex-row justify-between lg:py-3 lg:px-20`} >
            <div className='flex items-center space-x-2'>
                <img className='logo-nv w-auto h-14' src={Logo} alt={'logo-image'} />
                <p className='logo-text text-3xl text-primary font-permanentMark'>
                    Pizza
                </p>
            </div>
            <div className='flex flex-row items-center space-x-16 px-4'>
                <nav className="px-3 text-gray-300">
                    <ul className='flex flex-row space-x-6'> 
                        <li  className='space-y-2 '>
                            <Link to={'/'} className=''>Home</Link>
                            <hr className='border-b-2 w-0 border-b-primary'/>
                        </li>
                        <li className='space-y-2'>
                            <Link to={'menu'}>Menu</Link>
                            <hr className='border-b-2 w-0 border-b-primary'/>
                        </li>
                        <li className='space-y-2'>
                            <Link to={'#'}>About us</Link>
                            <hr className='border-b-2 w-0 border-b-primary'/>
                        </li>
                        <li className='space-y-2' >
                            <Link to={'#'}>Contact</Link>
                            <hr className=' border-b-2 w-0 border-b-primary'/>
                        </li>
                        
                    </ul>
                </nav>
                <div className='w-fit  relative'>
                    <BsFillBasket3Fill className='text-gray-200 text-2xl' />
                    <span className='absolute px-2 bottom-3 left-3 text-sm text-white bg-slate-400  rounded-full'>
                        0
                    </span>
                </div>
            </div>
        </header>
    )

}


export default NavBar