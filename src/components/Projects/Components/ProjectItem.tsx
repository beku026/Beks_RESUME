import Image from 'next/image'
import { FC } from 'react'
import { IProject } from '../Projects'
import s from './ProjectItem.module.scss'

const ProjectItem:FC<IProject> = ({img, title, description, stack, id}) => {
  return (
    <>
      <div className={s.card}>
        <div className={s.card_content}>
          <div className={s.card_front}>
            <Image src={img} width='400' height={300} alt={title} className={s.img} />
          </div>
        <div className={s.stack}>
          {stack?.map(item => (
            <div key={item} className={s.stack_item}>{item}</div>
          ))}
        </div>
          <div className={s.card_back}>
            <h3>{title}</h3>
            <p className={s.text}>{description}</p> 
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectItem;