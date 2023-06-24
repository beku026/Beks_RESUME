import { useId } from 'react'
import ProjectItem from './Components/ProjectItem';
import s from './Projects.module.scss'

export interface IProject {
  id: string;
  title: string;
  description: string;
  img: string;
  stack: string[];
}
export default function Projects() {
  const projects: IProject[] = [
    {
      id: useId(), 
      title: 'Игры Будушего', 
      img: '/project/innopolis.png',
      stack: ['React', 'JavaScript', 'TypeScript', "Redux-Toolkit", "RTK-Query", 'Antd', 'Sass'],
      description: 
      '«Игры будущего». Платформа с доступными фиджитал-материалами для студентов, преподавателей и участников соревнований, объединяющих классические виды спорта и киберспорт или VR- / AR-технологии. Система Phygital Learn помогает управлять процессом обучения специалистов в фиджитал спорте и преподавать технологические дисциплины, объединённые с программой турнира'
    },
    {
      id: useId(), 
      title: 'Brooclyn "Royal"', 
      img: '/project/brooclyn.png',
      stack: ['React', 'JavaScript', "Redux-Toolkit", 'Framer-Motion', 'Antd', 'Sass'],
      description: '"Brooclyn". Лендинг для одной из объектов строительной компании "Royal Contruction". "Royal Contruction"-динамично развивающаяся компания. Компания реализует проекты жилой и коммерческой недвижимости на рынке Кыргызстана и зарекомендовала себя на рынке как надежный застройщик, успешно реализующая все проекты в четко обозначенные сроки.'
    },
    {
      id: useId(), 
      title: 'MCard40', 
      img: '/project/MCard40.png',
      stack: ['JavaScript', 'JQuery', '.NET', 'OOP', "C#", 'MVC', 'Bootstrap'],
      description: 'Сайт для здравоохранитьных орган по цифровизации медицинской карточки пациента для его удобного использование и введение истории болезни пациента, а так же обеспечиваюшую пациента круглосуточную связь с врачами и подробной информации о самих врачах, для понимание к какому именно обратиться'
    },
  ]
  
  return (
    <>
      <section id='Portfolio' className={s.portfolio}>
        <h2>Projects</h2>
        <div className={s.projects}>
          {projects.map(item => (
            <ProjectItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  )
}