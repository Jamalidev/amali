const Product = ({classes, product}) => {
    return (
        <>
            <div className={`product ${classes}`}>
                <figure className="product-media">
                {product.onSale && (<span className="product-label label-sale">Sale</span>) }
                {product.averageRating > 3 && (<span class="product-label label-top">Top</span>) }
                <a href="product.html">
                    <img src={product.image.sourceUrl} alt="Product image" className="product-image" />
                </a>
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    <a href="#" className="btn-product-icon btn-compare" title="Compare"><span>Compare</span></a>
                    <a href="popup/quickView.html" className="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                </div>
                <div className="product-action">
                    <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                </div>
                </figure>
                <div className="product-body">
                <div className="product-cat">
                    <a href="#">Furniture</a>
                </div>
                <h3 className="product-title"><a href="product.html">{product.name}</a></h3>
                <div className="product-price">
                    {product.onSale ? (
                        <>
                            <span className="new-price">{product.salePrice}</span>
                            <span className="old-price">Was {product.regularPrice}</span>
                        </>
                    ) : product.price}
                </div>
                <div className="ratings-container">
                    <div className="ratings">
                    <div className="ratings-val" style={{width: '100%'}} />
                    </div>{/* End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                </div>{/* End .rating-container */}
                </div>{/* End .product-body */}
            </div>
        </>
    )
}
export default Product