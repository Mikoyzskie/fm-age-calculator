import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <form action="" className={styles.form}>
        <div className={styles.input_container}>
          <div>
            <label htmlFor="day" className={styles.labels}>DAY</label>
            <input type="text" id="day" placeholder='DD' className={styles.inputs}/>
          </div>
          <div>
            <label htmlFor="month" className={styles.labels}>MONTH</label>
            <input type="text" id="month" placeholder='MM' className={styles.inputs}/>
          </div>
          <div>
            <label htmlFor="year" className={styles.labels}>YEAR</label>
            <input type="text" id="year" placeholder='YYYY' className={styles.inputs}/>
          </div>
        </div>
        <div className={styles.submit}>
          <hr />
          <button type="submit" className={styles.arrow}><Image src={'./icon-arrow.svg'} alt='icon arrow' width={50} height={50}/></button>
        </div>
      </form>
      <section className={styles.results}>
        <h1><span className={styles.date}>--</span> years</h1>
        <h1><span className={styles.date}>--</span> months</h1>
        <h1><span className={styles.date}>--</span> days</h1>
      </section>
    </main>
  )
}
