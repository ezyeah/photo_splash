import styles from './detailDialog.module.scss'
import {CardDTO} from "@pages/index/types/card";

interface Props {
  data: CardDTO
}

function DetailDialog({ data }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.container__dialog}>
        <div className={styles.container__dialog_header}>
          <div className={styles.close}>
            <button className={styles.close__butoon}>
              <span className="metarial-symbols-outlined" style={{ fontSize: 28 + 'px'}}>close</span>
            </button>
            <img src={data.user.profile_image.small} alt="사진작가 프로필 사진" className={styles.close__authorImage} />
            <span className={styles.close__authorName}>{data.user.name}</span>
          </div>
          <div className={styles.bookmark}>
            <button className={styles.bookmark__button}>
              <span className="metarial-symbols-outlined" style={{fontSize: 16 + 'px'}}>favorite</span>
            </button>
            <button className={styles.bookmark__button}>다운로드</button>
          </div>
        </div>
        <div className={styles.container__dialog_body}>
          <img src={data.urls.small} alt="상세 이미지" className={styles.image} />
        </div>
        <div className={styles.container__dialog_footer}>
          <div className={styles.infoBox}>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>이미지 크기</span>
              <span className={styles.infoBox__item_value}>{data.width} X {data.height}</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>업로드</span>
              <span className={styles.infoBox__item_value}>{data.created_at.split('T')[0]}</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>마지막 업데이트</span>
              <span className={styles.infoBox__item_value}>{data.updated_at.split('T')[0]}</span>
            </div>
            <div className={styles.infoBox__item}>
              <span className={styles.infoBox__item_label}>다운로드</span>
              <span className={styles.infoBox__item_value}>{data.likes}</span>
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