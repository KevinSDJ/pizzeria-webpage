import { createContext, useState } from 'react'
import { data, Pl } from '../../mockup/data'
import CardMenu from '../cardmenu'
import NavTabs from '../navtabs'

type Section = {
    tabSelect: string,
    setTabSelect: Function
}


const MenuDisplayContext = createContext<Section | null>(null)

type Props = {
    children: React.ReactNode
}

const MenuDisplayProvider = ({ children }: Props) => {
    const [tabSelect, setTabSelect] = useState('pizza')

    return (<MenuDisplayContext.Provider value={{ tabSelect, setTabSelect }}>
        {children}
    </MenuDisplayContext.Provider>)
}

const MenuDisplay = () => {


    return (
        <MenuDisplayProvider >
            <div>
                <NavTabs />
                <div className='w-full mt-5 h-auto flex flex-row gap-[4rem]'>
                    {data ? data.map((e: Pl) => <CardMenu image={e.image} price={e.price} tag={e.tag} title={e.title} />
                    ) : null}
                </div>
            </div>
        </MenuDisplayProvider>
    )
}

export default MenuDisplay