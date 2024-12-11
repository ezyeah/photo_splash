import { useState } from 'react'
import { Link } from 'react-router-dom'
import navJson from './nav.json'
import styles from './navBar.module.scss'

interface NavProps {
  index: number
  path: string
  label: string
  searchVal: string
  isActive: boolean
}

function NavBar() {
  const [nav, setNav] = useState<NavProps[]>(navJson)

  const nabLinks = nav.map((item: NavProps) => {
    return (
      <Link to={item.path} className={styles.navBar__menu} key={item.path}>
        <span className={styles.navBar__menu_label}>{item.label}</span>
      </Link>
    )
  })

  return (
    <nav className={styles.navBar}>{nabLinks}</nav>
  )
}

export default NavBar