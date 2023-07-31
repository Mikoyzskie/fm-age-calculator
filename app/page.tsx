"use client"
import Image from 'next/image'
import styles from './page.module.scss'
import React, { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
  day: number;
  month: number;
  year: number;
}

export default function Home() {

  const currentDate = new Date();

  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [formData, setFormData] = useState<FormData>({
    day: 0,
    month: 0,
    year: 0,
  });

  const [required, setRequired] = useState('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(formData.day === 0 || !formData.day){
      console.log(formData.day);
      setRequired("required"); 
    }
    else if(formData.month === 0 || !formData.month){
      console.log(formData.month);
      setRequired("required"); 
    }
    console.log(formData);
  };


  return (
    <main className={styles.main}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <div>
            <label htmlFor="day" className={styles.labels}>DAY</label>
            <input type="number" id="day" name='day' placeholder='DD' className={`${styles.inputs} ${required && styles.required}`} autoComplete='off' onChange={handleChange} />
            <span className={styles.warning}>Must be a valid day</span>
          </div>
          <div>
            <label htmlFor="month" className={styles.labels}>MONTH</label>
            <input type="number" id="month" name='month' placeholder='MM' className={styles.inputs} autoComplete='off' onChange={handleChange} />
            <span className={styles.warning}>Must be a valid day</span>
          </div>
          <div>
            <label htmlFor="year" className={styles.labels}>YEAR</label>
            <input type="number" id="year" name='year' placeholder='YYYY' className={styles.inputs} autoComplete='off' onChange={handleChange} />
            <span className={styles.warning}>Must be a valid day</span>
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
