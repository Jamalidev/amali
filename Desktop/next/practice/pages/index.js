import { gql } from '@apollo/client';
import wpdb from '../lib/db';

import 'bootstrap/dist/css/bootstrap.css'
import IntroSlider from '../components/IntroSlider'
import ProductsSlider from '../components/ProductsSlider'

export default function Home({products}) {
  console.log(products)
  return (
      <div className='main'>
        <IntroSlider />
        <div className="mb-4" />{/* End .mb-2 */}
        <div className="container">
          <h2 className="title text-center mb-2">Explore Popular Categories</h2>{/* End .title */}
          <div className="cat-blocks-container">
            <div className="row">
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img src="assets/images/demos/demo-13/cats/1.jpg" alt="Category image" />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Computer &amp; Laptop</h3>{/* End .cat-block-title */}
                </a>
              </div>{/* End .col-sm-4 col-lg-2 */}
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img src="assets/images/demos/demo-13/cats/2.jpg" alt="Category image" />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Lighting</h3>{/* End .cat-block-title */}
                </a>
              </div>{/* End .col-sm-4 col-lg-2 */}
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img src="assets/images/demos/demo-13/cats/3.jpg" alt="Category image" />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Smart Phones</h3>{/* End .cat-block-title */}
                </a>
              </div>{/* End .col-sm-4 col-lg-2 */}
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img src="assets/images/demos/demo-13/cats/4.jpg" alt="Category image" />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Televisions</h3>{/* End .cat-block-title */}
                </a>
              </div>{/* End .col-sm-4 col-lg-2 */}
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img src="assets/images/demos/demo-13/cats/5.jpg" alt="Category image" />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Cooking</h3>{/* End .cat-block-title */}
                </a>
              </div>{/* End .col-sm-4 col-lg-2 */}
              <div className="col-6 col-sm-4 col-lg-2">
                <a href="category.html" className="cat-block">
                  <figure>
                    <span>
                      <img src="assets/images/demos/demo-13/cats/6.jpg" alt="Category image" />
                    </span>
                  </figure>
                  <h3 className="cat-block-title">Furniture</h3>{/* End .cat-block-title */}
                </a>
              </div>{/* End .col-sm-4 col-lg-2 */}
            </div>{/* End .row */}
          </div>{/* End .cat-blocks-container */}
        </div>{/* End .container */}
        <div className="mb-2" />{/* End .mb-2 */}

        {/* Hot Deals Product */}
        <div className="bg-light pt-3 pb-5 mb-5">
          <div className="container">
            <div className="heading heading-flex heading-border mb-5">
              <div className="heading-left">
                <h2 className="title py-4">Hot Deals Products</h2>{/* End .title */}
              </div>
            </div>
            <ProductsSlider products={products} />
          </div>
        </div>

        {/* Electronics Product */}
          <div className="container electronics mb-5">
            <div className="heading heading-flex heading-border mb-5">
              <div className="heading-left">
                <h2 className="title py-4">Electronics</h2>{/* End .title */}
              </div>
            </div>
            <ProductsSlider />
          </div>

           {/* Clothing & Apparel Product */}
        <div className="bg-light pt-3 pb-5 mb-5">
          <div className="container">
            <div className="heading heading-flex heading-border mb-5">
              <div className="heading-left">
                <h2 className="title py-4">Clothing & Apparel</h2>{/* End .title */}
              </div>
            </div>
            <ProductsSlider />
          </div>
        </div>
      </div>
  )
}

export async function getStaticProps() {
  const { data } = await wpdb.query({
    query: gql`
        query AllProducts {
            products(where: {onSale: true}) {
            nodes {
                id
                databaseId
                name
                image {
                sourceUrl
                }
                reviewCount
                averageRating
                onSale
                featured
                productCategories {
                nodes {
                    databaseId
                    name
                }
                }
                ... on SimpleProduct{
                price
                salePrice
                regularPrice
                }
            }
            }
        }
        
    `
  });

  const products = data.products.nodes

  return {
    props: {
      products:products
    }
  }
}

