// styles
import styles from './styles/index.module.scss';

// pages
import Header from '@components/common/header/Header'
import SearchBar from '@components/common/searchBar/SearchBar'
import NavBar from '@components/common/navBar/NavBar'

function index() {
  return (
    <div className={styles.page}>
      {/* HEADER */}
      <Header />
      <NavBar />
      <div className={styles.page__contents}>
        <div className={styles.page__contents_introBox}>
          <div className={styles.wrapper}>
            <span className={styles.wrapper__title}>PhotoSplash</span>
            <span className={styles.wrapper__desc}>
              인터넷의 시작 자료 출처입니다. <br />
              모든 지역에 있는 크리에이터들의 지원을 받습니다.
            </span>
            <SearchBar />
          </div>
        </div>
        <div className={styles.page__contents__imageBox}></div>
      </div>
      { /* FOOTER */ }
    </div>
  )
}

export default index