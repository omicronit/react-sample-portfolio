import React from 'react'

const HeaderComponent = () => {
    return (
        <header id="header-wrap">
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="icon-menu"></span>
                            <span className="icon-menu"></span>
                            <span className="icon-menu"></span>
                        </button>
                        <a href="" className="navbar-brand"><img src="../../assets/img/logo.png" alt="" /></a>
                    </div>
                    <div className="collapse navbar-collapse" id="main-navbar">
                        <ul className="onepage-nev navbar-nav mr-auto w-100 justify-content-end clearfix">
                        <li className="nav-item active">
                            <a className="nav-link" href="#hero-area">
                            Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                            About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">
                            Services
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">
                            Resume
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                            Contact
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <ul className="onepage-nev mobile-menu">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">about</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#resume">resume</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div id="hero-area" className="hero-area-bg">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 text-center">
                            <div className="contents">
                                <h5 className="script-font wow fadeInUp" data-wow-delay="0.2s">Hi This is</h5>
                                <h2 className="head-title wow fadeInUp" data-wow-delay="0.4s">John Doe</h2>
                                <p className="script-font wow fadeInUp" data-wow-delay="0.6s">Front-end Web Developer and Graphic Designer</p>
                                <ul className="social-icon wow fadeInUp" data-wow-delay="0.8s">
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
                                    <a className="linkedin" onClick={()=> {} }><i className="icon-social-linkedin"></i></a>
                                </li>
                                <li>
                                    <a className="google" onClick={()=> {} }><i className="icon-social-google"></i></a>
                                </li>
                                </ul>
                                <div className="header-button wow fadeInUp" data-wow-delay="1s">
                                <a onClick={()=> {} } className="btn btn-common">Get a Free Quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
