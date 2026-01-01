import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/animate.css'
import '../styles/fontawesome.css';
import '../styles/themify-icons.css';
import '../styles/animate.css';
import '../styles/sass/style.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Cloud Hub | Integrated IT & Cloud Solutions</title>
        <meta name="description" content="Cloud Hub is a comprehensive IT solutions platform delivering web and mobile development, cloud infrastructure, DevOps, systems engineering, hosting, and server management." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, web development, mobile development, DevOps, systems engineering, hosting, server management" />
        <meta property="og:title" content="Cloud Hub | Integrated IT & Cloud Solutions" />
        <meta property="og:description" content="Cloud Hub is a comprehensive IT solutions platform delivering web and mobile development, cloud infrastructure, DevOps, systems engineering, hosting, and server management." />
      </Head>
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp
