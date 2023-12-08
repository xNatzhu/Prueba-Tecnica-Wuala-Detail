import './App.css'
import DetailProduct from './page/DetailProduct'
import Footer from './page/Footer'
import NavBar from './page/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<DetailProduct/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
