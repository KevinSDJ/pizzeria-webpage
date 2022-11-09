import MenuDisplay from '../../../components/menudisplay'
import {data} from '../../../mockup/data'

const MenuSection=()=>{

    console.log(data)
    return (
        <div className="w-full  flex flex-row items-end justify-center h-screen bg-transparent border-4 border-green-500">
            <div className="h-5/6 w-[90%]">
                <div className="w-fit mx-auto">
                    <p className="text-center font-permanentMark text-lg text-amber-500">Our Menu</p>
                    <p className="text-gray-400 font-semibold text-3xl">Discover our Menu</p>
                </div>
                <MenuDisplay/>
            </div>
        </div>
    )
}

export default MenuSection