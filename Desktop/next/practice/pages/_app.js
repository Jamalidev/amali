import '../styles/bootstrap.min.css'
import '../styles/style.css'
import '../styles/skin-demo-13.css'
import '../styles/demo-13.css'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return  (
    <div className="page-wrapper">
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
