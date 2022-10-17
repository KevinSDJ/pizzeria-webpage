import {lazy} from 'react'
const MenuSection=lazy(()=>import("./../menu"))
const AboutUs = lazy(()=>import("./../about"))
const Contact = lazy(()=>import("./../contact"))


const MainSection=()=>{
    return (
    <div className="h-screenX3">
     <div className="w-full flex flex-row items-center justify-center h-screen bg-transparent border-4 border-green-500">
        <h1>Initial</h1>
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