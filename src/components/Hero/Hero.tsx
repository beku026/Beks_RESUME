import s from './Hero.module.scss'

export default function Hero() {

  return (
    <>
      <section id='Home' className={s.home}>
        <div className={s.content}>
          <p className={s.profetion}>web deloper</p>
          <h1 className={s.user_name}>Beksultan Bakytbekov</h1>
          <p className={s.text}>
            Привет, меня зовут Бексултан. Я midlle frontend dev с опытом работы в разработке интерфейсов и создании пользовательских веб-приложений
          </p>
          <a href="https://t.me/beku_026" target='_blank' >
            <button className={s.btn}>Contact Me</button>
          </a>
        </div>
        <div className={s.banner}></div>
      </section>
    </>
  )
}