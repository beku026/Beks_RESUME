import React from 'react'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from '@/hooks/FrameMotion';
import s from './style.module.scss'
import MenuItem from '@/components/MenuItem/MenuItem';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(20px at  250px 38px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const variants = {
  open: {
    display: 'flex',
    transition: { staggerChildren: 0.07, delayChildren: 0.2, delay: 0.5  }
  },
  closed: {
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.5  }
  }
};

export const navigation = [
  {
    id: 1,
    title: 'Home',
    route: '#Home'
  },
  {
    id: 2,
    title: 'About Me',
    route: '#About'
  },
  {
    id: 3,
    title: 'Portfolio',
    route: '#Portfolio'
  },
  {
    id: 4,
    title: 'Skills',
    route: '#Skills'
  },
  {
    id: 5,
    title: 'Resume',
    route: '#resume'
  }
]
const MainDrawer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className={s.navig}
    >
      <motion.div className={s.background} variants={sidebar} />
       <motion.ul variants={variants}>
        {navigation.map(i => (
          <MenuItem item={i} key={i.id} toggle={() => toggleOpen()} />
        ))}
      </motion.ul>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  )
}

export default MainDrawer

const Path = (props: any) => (
  <motion.path
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);


export const MenuToggle = ({ toggle }: any) => (
  <motion.button onClick={toggle}
    variants={{
      closed: { x: 0, transition: { duration: 1, delay: 0.05 } },
      open: { x: -220, transition: { duration: 1, delay: 0.2  } }
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </motion.button>
)