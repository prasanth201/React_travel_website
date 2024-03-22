import React, { useEffect } from 'react'
import './notFound.css'

const notFound = () => {
   useEffect(()=>{
    let navBar = document.getElementById("navBar")
    let footer = document.getElementById("footer")
    navBar.style.display="none";
    footer.style.display="none";
    })
    

  return (
    <>

<img src="https://thumbs.dreamstime.com/b/error-rubber-stamp-page-not-found-grungy-symbol-vector-illustration-87577580.jpg" style={{height:"650px",width:"90%",objectFit:"cover",marginLeft:"50px"}} alt="" />
</>
  )
}

export default notFound