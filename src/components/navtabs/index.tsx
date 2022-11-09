import {menu_tags} from './../../mockup/data'
import { useState } from 'react'

const NavTabs=()=>{
    const [tabselect,setTabSelect]= useState<string>('pizza')
    const onChangeSelect=(event:React.MouseEvent<HTMLSpanElement>,tag:string)=>{
        setTabSelect(tag)
    }
    return (
        <div className='w-fit text-amber-500 mx-auto my-10 p-2 space-x-4'>
            {menu_tags?.map(e=><span className={`hover:cursor-pointer hover:opacity-50 transition-all duration-150 px-6 py-2 font-normal ${tabselect===e.name&&"border-amber-500 bg-amber-600 text-gray-300"} rounded-3xl border border-amber-600`} onClick={(ev)=>onChangeSelect(ev,e.name)} key={e.tag+"_tab"}>
                {e.name}
            </span>)}
        </div>
    )
}
export default NavTabs