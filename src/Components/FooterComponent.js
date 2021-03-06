import React from 'react'

const FooterComponent = () => {
    return (
            <footer className="footer-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-text text-center wow fadeInDown" data-wow-delay="0.3s">
              <ul className="social-icon">
                <li>
                  <a className="facebook" onClick={()=> {} }><i className="icon-social-facebook"></i></a>
                </li>
                <li>
                  <a className="twitter" onClick={()=> {} }><i className="icon-social-twitter"></i></a>
                </li>
                <li>
                  <a className="instagram" onClick={()=> {} }><i className="icon-social-instagram"></i></a>
                </li>
                <li>
                  <a className="instagram" onClick={()=> {} }><i className="icon-social-linkedin"></i></a>
                </li>
                <li>
                  <a className="instagram" onClick={()=> {} }><i className="icon-social-google"></i></a>
                </li>
              </ul>
              <p>Copyright © 2020 All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
    )
}

export default FooterComponent
