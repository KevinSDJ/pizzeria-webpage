import { lazy } from 'react'
import Img1 from './../../../assets/image@2x.webp'
import Img2 from './../../../assets/pngwing2.png'
const MenuSection = lazy(() => import("./../menu"))
const AboutUs = lazy(() => import("./../about"))
const Contact = lazy(() => import("./../contact"))

const MainSection = () => {
   return (
      <div className="h-screenX3 bg-slate-800/50 backdrop-blur-3xl relative">
         <div className="w-full flex flex-row items-center justify-center h-screen relative">
            <div className='w-5/6 h-4/5 flex flex-row items-center  justify-between'>
               <div className='flex items-center grow'>
                  <div className='m-auto font-medium'>
                     <h3 className='text-3xl text-gray-300'>Hot & <b className='text-5xl text-amber-500 font-permanentMark'>Online</b></h3>
                     <p className='pl-12 text-left text-xl text-gray-300'>your favourite food</p>
                     <p className='pl-24 text-left text-3xl text-gray-300'>just an <b className="text-5xl text-amber-500 font-permanentMark">click away</b></p>
                  </div>
               </div>
               <div className='h-full'>
                  <img className='max-h-full' src={Img1} />
               </div>
            </div>
            <img className='h-56 absolute left-20 top-3/4' src={Img2} />
         </div>
         <div>
            <MenuSection />
         </div>
         <div>
            <AboutUs />
         </div>
         <div>
            <Contact />
         </div>
      </div>
   )
}
export default MainSection