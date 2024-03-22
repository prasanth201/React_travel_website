import React from 'react'

const destinations = () => {
  return (
    <>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
     <div class="container">
    <h1 class="text-center my-5">Popular Travel Destinations</h1>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card destination">
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Goa.png" class="card-img-top" alt="Destination 1"/>
          <div class="card-body">
            <h5 class="card-title">1. Goa</h5>
            <p class="card-text">Goa is one of the best holiday destinations in India that makes your trip memorable.</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card destination">
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Leh-Ladakh.jpg" class="card-img-top" alt="Destination 2"/>
          <div class="card-body">
            <h5 class="card-title">2. Leh-Ladakh</h5>
            <p class="card-text">Ladakh is on every travel enthusiast’s list of famous tourist places to visit in India</p>
          </div>
        </div>
      </div>
    </div>
  </div> <div class="container">
    <h1 class="text-center my-5">Popular Travel Destinations</h1>
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card destination">
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/Coorg2.jpg" class="card-img-top" alt="Destination 1"/>
          <div class="card-body">
            <h5 class="card-title">3. Coorg</h5>
            <p class="card-text">Coorg simply cannot be skipped from the list of best and safe places to visit in India. </p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card destination">
          <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2023/06/kerala.jpg
" class="card-img-top" alt="Destination 2"/>
          <div class="card-body">
            <h5 class="card-title">4. Kerala</h5>
            <p class="card-text"> A trip to God’s own country is a must in your twenties for its enchanting wilderness.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default destinations