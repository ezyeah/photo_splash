import styles from "./header.module.scss"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoBox}>
        <img src="src/assets/images/image-logo.png" alt="PhotoSplash" className={styles.header__logoBox_logo} />
        <span className={styles.header__logoBox_title}>PhotoSplash</span>
      </div>
      <div className={styles.header__profileBox}>
        <button className={styles.header__profileBox_button}>사진제출</button>
        <button className={styles.header__profileBox_button}>북마크</button>
        <span className={styles.header__profileBox_userName}>glim1013 | glim1013@theglim.co.kr</span>
      </div>
    </header>
  )
}

export default Header;