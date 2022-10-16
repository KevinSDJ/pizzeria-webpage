import Navbar from './../../components/navbar'
import {Outlet} from 'react-router-dom'


const Home =()=>{
    return (
        <div className="w-full bg-slate-800">
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default Home