import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {lazy,Suspense} from 'react'
import { LoadingInitial } from '../components/loading/init'
const Home= lazy(()=>new Promise(resolve=>{
  setTimeout(()=>{
    import("./../views/Home").then((e:any)=>{
      resolve(e)
    })
  },5000)
}))
const MainSection=lazy(()=>import("./../views/sections/initial"))



function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingInitial/>}>
        <Routes>
          {/*vista una sola pagina*/}
          <Route path="/" element={<Home/>}>
            <Route path="/" element={<MainSection/>}/>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
