
import './App.css'
import NavBar from './navBar/navBar.jsx'
import Home from './home/home.jsx'
import Contact from './contact/contact.jsx'
import Destinations from './destinations/destinations.jsx'
import Footer from './footer/footer.jsx'
import Error from './notFound/notFound.jsx'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
function App() {

  return (
   <>
   <BrowserRouter>
   <NavBar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/contact" element={ <Contact/>}/>
    <Route path="/destinations" element={ <Destinations/>}/>
    <Route path="*" element={ <Error/>}/>
   </Routes>
   <Footer />
  </BrowserRouter>
   </>
  )
}
export default App
