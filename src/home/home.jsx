import React from 'react'
import './home.css'
const home = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <div style={{position:'relative'}} className='image-container'>
        <img  src="https://th.bing.com/th/id/R.3d042c92d9b167c065d4875c964d0b4a?rik=j%2bwe8hUaZqdmSA&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2015%2f12%2f74165-nature-HDR-river-trees-mountain-landscape.jpg&ehk=yHKVetDTiL5y89jHLEMdJx0A%2f0iGuZctDOo3T9ozKvg%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <h1 style={{color:'white',position:'absolute',top:"35%",left:"26%"}}>Discover Your Dream Destinations</h1>
        <p style={{color:'white',position:'absolute',top:"44%",left:"2%",right:"2%",fontSize:"20px"}} className='text-center'>Uncover the world's wonders with our travel guide. From breathtaking landscapes to vibrant cultures, find inspiration for your next adventure. Start exploring today!</p>
    </div>
  </>
  )
}

export default home