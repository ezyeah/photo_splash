import styles from './footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.pagination}>
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowLeft.svg" alt=""/>
        </button>
        {/* 변경 예정 */}
        <span>1</span>
        <button className={styles.pagination__button}>
          <img src="src/assets/icons/icon-arrowRight.svg" alt=""/>
        </button>
      </div>
    </footer>
  )
}

export default Footer