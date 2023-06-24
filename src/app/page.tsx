'use client'
import AboutMe from '@/components/AboutMe/AboutMe'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Resume from '@/components/Resume/Resume'
import Skilzs from '@/components/Skilzs/Skilzs'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
     <Hero />
     <AboutMe />
     <Projects />
     <Skilzs />
     <Resume />
    </main>
    </>
  )
}
