import { useState } from 'react'
import styles from './navBar.module.scss'

interface NavProps {
  index: number
  path: string
  label: string
  searchVal: string
  isActive: boolean
}

function NavBar() {
  const [nav, setNav] = useState<NavProps[]>([
    {
      index: 0,
      path: '/edit',
      label: '보도/편집 전용',
      searchVal: 'edit',
      isActive: false,
    },
    {
      index: 1,
      path: '/following',
      label: '팔로잉',
      searchVal: 'following',
      isActive: false,
    },
    {
      index: 2,
      path: '/photoPlus',
      label: 'Unsplash Photo+',
      searchVal: 'photo',
      isActive: false,
    },
    {
      index: 3,
      path: '/oneColor',
      label: '단색',
      searchVal: 'one color',
      isActive: false,
    },
    {
      index: 4,
      path: '/3dRender',
      label: '3D 렌더링',
      searchVal: '3d rendering',
      isActive: false,
    },
    {
      index: 5,
      path: '/nature',
      label: '자연',
      searchVal: 'nature',
      isActive: false,
    },
    {
      index: 6,
      path: '/texture',
      label: '텍스쳐 및 패턴',
      searchVal: 'texture',
      isActive: false,
    },
    {
      index: 7,
      path: '/interior',
      label: '인테리어',
      searchVal: 'interior',
      isActive: false,
    },
    {
      index: 8,
      path: '/film',
      label: '필름',
      searchVal: 'film',
      isActive: false,
    },
    {
      index: 9,
      path: '/experimental',
      label: '실험적인',
      searchVal: 'experimental',
      isActive: false,
    },
    {
      index: 10,
      path: '/travel',
      label: '여행',
      searchVal: 'travel',
      isActive: false,
    },
    {
      index: 11,
      path: '/sports',
      label: '스포츠',
      searchVal: 'sports',
      isActive: false,
    },
  ])

  const nabLinks = nav.map((item: NavProps) => {
    return (
      <div className={styles.navBar__menu} key={item.path}>
        <span className={styles.navBar__menu_label}>{item.label}</span>
      </div>
    )
  })

  return (
    <div className={styles.navBar}>{nabLinks}</div>
  )
}

export default NavBar