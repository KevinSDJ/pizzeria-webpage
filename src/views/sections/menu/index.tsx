import {data,Pl,Pr} from '../../../mockup/data'

const MenuSection=()=>{

    console.log(data)
    return (
        <div className="w-full  flex flex-row items-end justify-center h-screen bg-transparent border-4 border-green-500">
            <div className="h-5/6 w-[90%] border">
                <div className="w-fit mx-auto">
                    <h2 className="text-center text-base text-amber-500">Our Menu</h2>
                    <p className="text-gray-400 font-semibold text-2xl">Discover our Menu</p>
                </div>
                {data? data.map((e:Pl)=><div key={e.title+'card'}>
                    <p>{e.title}</p>
                    {Array.isArray(e.price)?e.price.map((e:Pr)=><div>
                        <span>{e.price}</span>
                    </div>):<div>{e.price}</div>}
                </div>):null}

            </div>
        </div>
    )
}

export default MenuSection