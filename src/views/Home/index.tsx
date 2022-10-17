import Navbar from './../../components/navbar'
import {Outlet} from 'react-router-dom'
import './index.css'

const Home =()=>{
    return (
        <div className="w-full relative bg-slate-800">
            <div className="bg-object">

            </div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default Home