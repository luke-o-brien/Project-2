import React from "react";
import FishAlternativeCard from "../UI/FishAlternativeCard";
import "bulma"
import styles from "./SustainableEating.module.css"
//import BetterChoiceFish from "../UI/BetterChoiceFish";



function SustainableEating () {
  return <div>
    <h2 className={`${styles.sustainable_eating_title}`}>Sustainable Eating</h2>
    <h4 className={`${styles.sustainable_eating_tagline}`}>Today more than ever it is important to make Sustainable eating choices.</h4>
    <p className={`${styles.sustainable_eating_description}`}>If you would like to make more enviromently concious decisions regarding what you eat take a look below at our more sustainable alternatives to popular fish and get inspiration by checking out some recipes</p>
    <div>
      <FishAlternativeCard />
    </div>
  </div>
}

export default SustainableEating