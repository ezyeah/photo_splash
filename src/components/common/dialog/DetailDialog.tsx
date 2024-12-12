import styles from './detailDialog.module.scss'

function DetailDialog() {
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog_header}>
          <div className={styles.close}>
            <button className={styles.close__butoon}>{/* 구글 아이콘 사용 예정*/}</button>
            <img src="" alt="사진작가 프로필 사진" className={styles.close__authorImage} />
            <span className={styles.close__authorName}>glim1013</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark__button}>{/* 구글 아이콘 사용 예정 */}북마크</button>
            <button className={styles.bookmark__button}>다운로드</button>
          </div>
        </div>
        <div className={styles.container__dialog_body}>
          <img src="" alt="상세 이미지" className={styles.image} />
        </div>
        <div className={styles.container__dialog_footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>이미지 크기</span>
              <span className={styles.infoBox__item_value}>상세 데이터 조회</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>이미지 크기</span>
              <span className={styles.infoBox__item_value}>상세 데이터 조회</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>이미지 크기</span>
              <span className={styles.infoBox__item_value}>상세 데이터 조회</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>이미지 크기</span>
              <span className={styles.infoBox__item_value}>상세 데이터 조회</span>
            </div>
          </div>
          <div className={styles.tagBax}>
            <div className={styles.tagBox__tag}>태그 데이터</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailDialog