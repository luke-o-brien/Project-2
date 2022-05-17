import React from "react"
import { Link } from "react-router-dom"
import "bulma"
import styles from "./Fish.module.css"


const Fish = (props) => {

  console.log(props.name);

  return <div className={styles.card_margin}>
    <Link to={`/fish/${props.name}`}>
      <div className={`card ${styles.card_dimensions}` }>
        <div className="card-header">
          <div className="card-header-title">{props.name}</div>
        </div>
        <div className={`card-image ${styles.card_image_size}`}>
          <figure >
            <img src={props.images} alt={props.name} />  
          </figure>
        </div>
        <div className="card-content">
          <h5>{`Current Population Levels - ${props.population}`}</h5>
          <p>{`Current Fishing Rate - ${props.fishingRate}`}</p>
        </div>
      </div>
    </Link>
  </div>
}

export default Fish