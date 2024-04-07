import styles from "./Coin.module.css"; // Import CSS module

function Coin() {
  return (
    <div>
      <div className={styles.coin}>
        <div className={`${styles.front} ${styles.jump}`}>
          <div className={styles.star}></div>
          <span className={styles.currency}>$</span>
          <div className={styles.shapes}>
            <div className={styles.shape_l}></div>
            <div className={styles.shape_r}></div>
          </div>
          <span className={styles.top}>500</span>
          <span className={styles.bottom}></span>
        </div>
        <div className={styles["shadow body"]}></div>{" "}
        {/* Use bracket notation for class names with spaces */}
      </div>
    </div>
  );
}

export default Coin;
