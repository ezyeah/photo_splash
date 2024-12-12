// API
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

// store
import { imageData } from '@/store/selectors/imageSelector'

// component
import Card from './components/Card'

// page
import Header from '@components/common/header/Header'
import SearchBar from '@components/common/searchBar/SearchBar'
import NavBar from '@components/common/navBar/NavBar'
import Footer from '@components/common/footer/Footer'

// style
import styles from './styles/index.module.scss';

import { CardDTO } from './types/card'

function index() {
  const imgSelector  = useRecoilValue(imageData)
  const [imgData, setImgData] = useState<CardDTO[]>([])

  const CARD_LIST = imgSelector.results.map((card: CardDTO) => {
    return <Card data={card} key={card.id} />
  })

  return (
    <div className={styles.page}>
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
        <div className={styles.page__contents__imageBox}>{CARD_LIST}</div>
      </div>
      <Footer />
    </div>
  )
}

export default index