import React from 'react'

const contact = () => {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <body className="bg-light">
        <div className="mt-5 conatiner">
            <div className="text-center">
                <h3 className="text-primary">How Can We Help You?</h3>
                <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisic</p>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
                <div className="bg-white col-md-4">
                    <div className="p-4 rounded shadow-md">
                        <div>
                            <label for="name" className="form-label">Your Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Your Name" required/>
                        </div>
                        <div className="mt-3">
                            <label for="email" className="form-label">Your Email</label>
                            <input type="text" name="email" className="form-control" placeholder="Your Email" required/>
                        </div>
                        <div className="mt-3">
                            <label for="subject" className="form-label">Subject</label>
                            <input type="text" name="subject" className="form-control" placeholder="Subject" required/>
                        </div>
                        <div className="mt-3 mb-3">
                            <label for="message" className="form-label">Message</label>
                            <textarea name="message" cols="20" rows="6" className="form-control"
                                placeholder="message"></textarea>
                        </div>
                        <button className="btn btn-primary">
                            Submit Form
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </>
  )
}

export default contact