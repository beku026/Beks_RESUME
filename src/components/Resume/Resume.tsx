import Image from 'next/image'
import s from './Resume.module.scss'

export default function Resume () {

  return (
    <>
      <section className={s.resume} id='resume'>
        <div className={s.resume_img}>
          <Image src='/Beks CV.png' width={1000} height={1000} alt='resume_image' style={{textAlign: 'right'}} />
          <Image src='/Beks CV Projects.png' width={1000} height={1000} alt='resume_image' />
        </div>
        <div className={s.resume_btns}>
          <a href='/Бекслутан_DEV.pdf' download="Резюме_Бексултан_Frontend.pdf">
            <button className={s.btn}>Скачать</button>
          </a>
          <a href='https://www.figma.com/file/elBFCIHPVuw7xGnAo9GpjR/Beks-CV?type=design&node-id=2-18&mode=design&t=lgW22RQvayLkOO8C-0' target='_blank'>
            <button className={s.btn}>Просмотреть</button>
          </a>
        </div>
      </section>
    </>
  )
}