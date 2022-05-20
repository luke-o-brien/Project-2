import Footer from "../UI/Footer";
import Dailyfish from "../UI/Dailyfish";
import styles from "./Home.module.css";
import ControlledCarousel from "../UI/ControlledCarousel";


function Home () {



  return ( 
    <>
      <ControlledCarousel />
      <Dailyfish />
      <Footer />
    </>
  )
}

export default Home