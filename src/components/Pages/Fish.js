import React from "react"
import { Link } from "react-router-dom"
import "bulma"
import styles from "./Fish.module.css"


const Fish = (props) => {

  return <div className={styles.card_margin}>
    <Link style={{ textDecoration: "none" }} to={`/fish/${props.name}`}>
      <div className={`card ${styles.card_dimensions}` }>
        <div className="card-header">
          <div className={`card-header-title ${styles.card_header_text}`}>{props.name}</div>
        </div>
        <div className={`card-image ${styles.card_image_size}`}>
          <figure >
            <img src={props.images} alt={props.name} />  
          </figure>
        </div>
        <div className={`card-content ${styles.card_content_style}`}>
          <h5><b>Scientific Name</b></h5>
          <p>{props.scientificName}</p>
        </div>
      </div>
    </Link>
  </div>
}

export default Fish