import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
      
      <div style={{ backgroundColor: "black" }}>
      <footer className="page-footer font-small  teal py-4 text-white">
        <div className="container-fluid text-center text-md-left">
          <div className="row d-flex py-4 justify-content-around">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Navigation</h5>
              Home
              <br />
              Services
              <br />
              Event & Contact Support
              <br />
              Contact
              <br />
              Help
              <br />
            </div>

            

            <div className="col-md-5 mb-md-0 mb-3 text-start">
              <h5 className="text-uppercase font-weight-bold">About</h5>
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
  
       
            </div>
          </div>
          </div>
    </footer>
    
  </div>
      
    )
  }
}

export default Footer;