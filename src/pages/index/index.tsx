// APIs
import axios from "axios"
import { CardDTO } from './types/card'

// styles
import styles from './styles/index.module.scss';

// pages
import Header from '@components/common/header/Header'
import SearchBar from '@components/common/searchBar/SearchBar'
import NavBar from '@components/common/navBar/NavBar'
import Footer from '@components/common/footer/Footer'

// components
import Card from './components/Card'
import { useState, useEffect } from "react";

function index() {
  const [imgUrls, setImgUrles] = useState([])
  const getData = async () => {
    // 오픈 API 호출
    const API_URL = 'http://api.unsplash.com/search/photos'
    const API_KEY = 'RW7251z9Bjc_WXquCGe6_bNoRgdxulKVlOQJJ-KF5cE'
    const PER_PAGE = 30

    const searchVal = 'Korea'
    const pageVal = 100

    try {
      const res = await axios.get(`${API_URL}?query=${searchVal}&client_id=${API_KEY}&page=${pageVal}&per_page=${PER_PAGE}`)

      console.log(res)

      if (res.status === 200) {
        setImgUrles(res.data.results)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const cardList = imgUrls.map((card: CardDTO) => {
    return (
      <Card data={card} key={card.id} />
    )
  })

  useEffect(() => {
    getData()
  }, [])

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
        <div className={styles.page__contents__imageBox}>
          {cardList}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index