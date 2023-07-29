"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import { useState, ChangeEvent } from "react";


export default function Home() {

  const [day, setDay] = useState('');

  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because months are zero-indexed
  const currentYear = currentDate.getFullYear();

  function handleSubmit(event: any){
    event.preventDefault();
    console.log('Current Day:', currentDay);
    console.log('Current Month:', currentMonth);
    console.log('Current Year:', currentYear);
  }

  return (
    <main className={styles.main}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <div>
            <label htmlFor="day" className={styles.labels}>DAY</label>
            <input type="number" id="day" name='day' placeholder='DD' className={styles.inputs} autoComplete='off'/>
          </div>
          <div>
            <label htmlFor="month" className={styles.labels}>MONTH</label>
            <input type="number" id="month" name='month' placeholder='MM' className={styles.inputs} autoComplete='off'/>
          </div>
          <div>
            <label htmlFor="year" className={styles.labels}>YEAR</label>
            <input type="number" id="year" name='year' placeholder='YYYY' className={styles.inputs} autoComplete='off'/>
          </div>
        </div>
        <div className={styles.submit}>
          <hr />
          <button type="submit" className={styles.arrow}><Image className={styles.icon_arrow} src={'./icon-arrow.svg'} alt='icon arrow' width={50} height={50}/></button>
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
