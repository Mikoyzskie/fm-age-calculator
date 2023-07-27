import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <form action="" className={styles.form}>
        <div className={styles.input_container}>
          <div>
            <label htmlFor="day">DAY</label>
            <input type="text" id="day" placeholder='DD'/>
          </div>
          <div>
            <label htmlFor="month">MONTH</label>
            <input type="text" id="month" placeholder='MM'/>
          </div>
          <div>
            <label htmlFor="year">YEAR</label>
            <input type="text" id="year" placeholder='YYYY'/>
          </div>
        </div>
        <div className={styles.submit}>
          <hr />
          <button type="submit"><Image src={'./icon-arrow.svg'} alt='icon arrow' width={100} height={100}/></button>
        </div>
      </form>
      <section>
        <h1><span>--</span> years</h1>
        <h1><span>--</span> months</h1>
        <h1><span>--</span> days</h1>
      </section>
    </main>
  )
}
