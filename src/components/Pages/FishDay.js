
import React from "react"
import "bulma"
import styles from "./FishDay.module.css"


const FishDay = (props) => {

  return <>

    <div className={styles.fish_Day_h2}>
      <h2>Fish of the day</h2>
    </div>
    <div className={styles.fish_Day_Container}>
      <div className={`${styles.card_style}`}>
        <div className={`card ${styles.fish_Day_Card}`}>
          <div className={`card-header ${styles.card_header_style}`}>
            <div className={`card-header-title ${styles.card_header_text}`}>{props.name}</div>
          </div>
          <div className="card_image">
            <figure className={`${styles.card_img_fig}`} >
              <img className={`${styles.card_img}`} src={props.images} alt={props.name} />  
            </figure>
          </div>
          <div className={`card-content ${styles.card_style}`}>
            <h5><b>Scientific Name</b></h5>
            <p>{props.scientificName}</p>
            <h5><b>Summary</b></h5>
            <p>{props.summary}</p>
            <h5><b>Habitat</b></h5>
            <p>{props.habitat}</p>
            <h5><b>Current Population Levels</b></h5>
            <p>{props.population}</p>
            <h5><b>Current Fishing Rate</b></h5>
            <p>{props.fishingRate}</p>
          </div>
        </div>
      </div>
    </div>
  </>
}



export default FishDay