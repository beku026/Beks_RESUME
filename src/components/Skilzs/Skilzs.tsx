import Image from 'next/image';
import { useId } from 'react'
import s from './Skilzs.module.scss'

export interface IItem {
  id: string;
  title: string;
  logo: string;
}

export default function Skilzs() {
  const skilz: IItem[] = [
    { id: useId(), title: "HTML", logo: '/skilz_icon/HTML.svg'},
    { id: useId(), title: "CSS", logo: '/skilz_icon/css.svg'},
    { id: useId(), title: "Sass", logo: '/skilz_icon/sass.svg'},
    { id: useId(), title: "JS", logo: '/skilz_icon/js.svg'},
    { id: useId(), title: "Typescript", logo: '/skilz_icon/typescript.svg'},
    { id: useId(), title: "React", logo: '/skilz_icon/react.svg'},
    { id: useId(), title: "Next", logo: '/skilz_icon/next.svg'},
    { id: useId(), title: "Vue", logo: '/skilz_icon/vue.svg'},
    { id: useId(), title: "Node js", logo: '/skilz_icon/nodejs.svg'},
    { id: useId(), title: "Nest js", logo: '/skilz_icon/nest.svg'},
    { id: useId(), title: "Git", logo: '/skilz_icon/git.svg'},
    { id: useId(), title: "GitHub", logo: '/skilz_icon/github.svg'},
    { id: useId(), title: "GitLub", logo: '/skilz_icon/gitLub.svg'},
    { id: useId(), title: "Redux", logo: '/skilz_icon/retdux.svg'},
    { id: useId(), title: "MobX", logo: '/skilz_icon/mobx.svg'},
    { id: useId(), title: "Pinia", logo: '/skilz_icon/pinia.svg'},
    { id: useId(), title: "Vite", logo: '/skilz_icon/vite.svg'},
    { id: useId(), title: "Webpack", logo: '/skilz_icon/webpack.svg'},
  ]
  return (
    <>
      <section className={s.skilz} id='Skills'>
        <h2>Skills</h2>
        <div className={s.cards}>
          {skilz.map(({id, title, logo}) => (
            <div key={id} className={s.card}>
              <Image src={logo}  width={100} height={100} alt={title}/>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}