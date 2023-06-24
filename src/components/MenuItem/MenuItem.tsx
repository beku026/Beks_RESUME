// import { ListItemButton } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import s from './MenuItem.module.scss'

interface IProps {
  item: {
    id: number
    title: string
    route: string
  }, 
  toggle: () => void
}

const MenuItem:FC<IProps> = ({ item, toggle }) => {
  const variant = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

    return (
      <motion.li
          variants={variant}
          whileHover={{ 
            scale: 1.1, 
          }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
          className={s.item}
        >
          <a href={item.route} className={s.route}>
            {item.title}
          </a>
        </motion.li>
    );
  };

export default MenuItem;