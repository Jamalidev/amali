import styles from './IntroSlider.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Product from './Product'

const ProductsSlider = ({products}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: true }, [Autoplay(),])

    return (
    <div className={styles.embla} ref={emblaRef}>
        
        <div className={`carousel-equal-height carousel-with-shadow embla__container owl-carousel owl-simple`}>
            {
                products && products.map((product) => {
                    return <Product product={product} classes={'embla__slide'} />
                })
            }
        </div>

    </div>
    )
}

export default ProductsSlider