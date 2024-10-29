import styles from "./ErrorBoundary.module.css";
import asciiArt from "./assets/ascii-art.png";

function ErrorBoundary() {
  return (
    <>
      <div className={styles["errorPage"]}>
        <div className={styles['errorTitle']}><h1>Oops... Something weird happened~~~</h1><p className={styles['titleEmoticon']}>૮₍˶Ó﹏Ò ⑅₎ა</p></div>
        <div className={styles["typed"]}>
          <p className={styles['emoticon']}>(」ﾟﾛﾟ)｣</p>
          <p className={styles['emotiText']}>NOOOooooooooooooooooooo━</p>
        </div>

        <img src={asciiArt} alt="error" width="50%" height="500px" />
      </div>
    </>
  );
}

export default ErrorBoundary;
