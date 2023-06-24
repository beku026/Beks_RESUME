'use client'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import { getLocalStore } from '../../shared/LocalStore'
import { Theme } from '../../shared/Theme'
import MainDrawer, { navigation } from '../Draiwer/Drawer'
import ParticlesContainer from '../particles'
import BurgerBtn from '../UI/BurgerBtn/BurgerBtn'
import s from './Header.module.scss'

const Header = () => {
  const [ themeMode, setThemeMode ] = useState<string>(getLocalStore('theme'))
  const [isMode , setIsMode] = useState<boolean>(getLocalStore('theme') == "light" ? true : false)
  const [color, setColor] = useState('')

  const handleChangeMode = ({target}: ChangeEvent<HTMLInputElement>) => {
    setIsMode(target.checked)
    setThemeMode(target.checked ? 'light': 'darck')
  }

  useEffect(() => {
    Theme(themeMode)
    setColor(isMode ? '#5222D0' : 'rgba(0,245,160,1)')
  }, [isMode, themeMode])

  return ( 
    <>
      <ParticlesContainer color={color} />
      <header className={s.header}>
        <div className={s.container}>
          <div className={s.logo}>
            Beks
          </div>
          <div className={s.header_rigth}>
            <nav className={s.nav}>
              <ul className={s.nav_list}>
                {navigation.map(({id, route, title}) => (
                  <li key={id}>
                    <a href={route}>{title}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <input type='checkbox' className={s.checkbox} id='switch' checked={isMode} hidden onChange={handleChangeMode} />
              <label className={s.switch} htmlFor='switch'>
                <Image src={'/moon.svg'} width={20} height={22} alt='moon' className={s.moon} />
                <Image src={'/sun.svg'} width={20} height={22} alt='sun' className={s.sun}/>
              </label>
            </div>
            <MainDrawer />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;