import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.footer_container}>
      <footer className={styles.footer}>
        <p className={styles.footer_item}>This Website is powered using the fish watch API</p>
        <a className={styles.footer_item}>https://www.fishwatch.gov/resources</a>
      </footer>
    </div> )
}

export default Footer