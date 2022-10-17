import {lazy} from 'react'
import Img1 from './../../../assets/image.webp'
const MenuSection=lazy(()=>import("./../menu"))
const AboutUs = lazy(()=>import("./../about"))
const Contact = lazy(()=>import("./../contact"))

const MainSection=()=>{
    return (
    <div className="h-screenX3 bg-slate-800/10 backdrop-blur-3xl relative">
     <div className="w-full flex flex-row items-center justify-center h-screen ">
        <div className='w-5/6 h-4/5 bg-gray-300 flex flex-row items-center justify-around'>
           <div>
             <h3>Hot & <b>Online</b></h3>
           </div>
           <div className='bg-green-300'>
             <img className='h-full w-full' src={Img1}/>
           </div>
        </div>
     </div>
     <div>
        <MenuSection/>
     </div>
     <div>
        <AboutUs/>
     </div>
     <div>
        <Contact/>
     </div>
    </div>
    )
} 
export default MainSection