import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './IntroSlider.module.css'

const IntroSlider = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true,  }, [Autoplay()])
  
    return (
        <div className={`intro-slider-container ${styles.embla}`} ref={emblaRef}>

            <div className={`intro-slider ${styles.embla__container}`}>

                <div className={`intro-slide ${styles.embla__slide}`} style={{backgroundImage: 'url(/assets/images/demos/demo-13/slider/slide-1.png)'}}>
                    <div className="container intro-content">
                    <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                        <h3 className="intro-subtitle">Trade-In Offer</h3>{/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">MacBook Air <br />Latest Model
                            <span>
                            <sup className="font-weight-light">from{'   '}</sup>
                            <span className="text-primary">$999<sup>,99</sup></span>
                            </span>
                        </h1>{/* End .intro-title */}
                        <a href="category.html" className="btn btn-outline-primary-2">
                            <span>Shop Now</span>
                            <i className="icon-long-arrow-right" />
                        </a>
                        </div>{/* End .col-auto offset-lg-3 */}
                    </div>{/* End .row */}
                    </div>{/* End .container intro-content */}
                </div>

                <div className="intro-slide embla__slide" style={{backgroundImage: 'url(assets/images/demos/demo-13/slider/slide-2.jpg)'}}>
                    <div className="container intro-content">
                    <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                        <h3 className="intro-subtitle">Trevel &amp; Outdoor</h3>{/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">Original Outdoor <br />Beanbag
                            <span>
                            <sup className="font-weight-light line-through">$89,99</sup>
                            <span className="text-primary">$29<sup>,99</sup></span>
                            </span>
                        </h1>{/* End .intro-title */}
                        <a href="category.html" className="btn btn-outline-primary-2">
                            <span>Shop Now</span>
                            <i className="icon-long-arrow-right" />
                        </a>
                        </div>{/* End .col-auto offset-lg-3 */}
                    </div>{/* End .row */}
                    </div>{/* End .container intro-content */}
                </div>

                <div className="intro-slide embla__slide" style={{backgroundImage: 'url(assets/images/demos/demo-13/slider/slide-3.jpg)'}}>
                    <div className="container intro-content">
                    <div className="row">
                        <div className="col-auto offset-lg-3 intro-col">
                        <h3 className="intro-subtitle">Fashion Promotions</h3>{/* End .h3 intro-subtitle */}
                        <h1 className="intro-title">Tan Suede <br />Biker Jacket
                            <span>
                            <sup className="font-weight-light line-through">$240,00</sup>
                            <span className="text-primary">$180<sup>,99</sup></span>
                            </span>
                        </h1>{/* End .intro-title */}
                        <a href="category.html" className="btn btn-outline-primary-2">
                            <span>Shop Now</span>
                            <i className="icon-long-arrow-right" />
                        </a>
                        </div>{/* End .col-auto offset-lg-3 */}
                    </div>{/* End .row */}
                    </div>{/* End .container intro-content */}
                </div>

            </div>
        {/* <span className="slider-loader" />End .slider-loader */}
        </div>
      

      
    )
  }
export default IntroSlider