"use client"
import Image from 'next/image'
import './page.scss'
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
  const [daywarn, setDaywarn] = useState('');
  const [dayerror, setDayerror] = useState('hidden');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!formData.day || formData.day == 0){
      console.log(formData.day);
      setDayerror("");
      setDaywarn("This field is required");
      setRequired("required"); 
    }
    else{
      console.log(formData.day);
      setRequired("");
      setDayerror("hidden");
      setDaywarn("");
    }
   
  };


  return (
    <main className="main">
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <div>
            <label htmlFor="day" className="labels">DAY</label>
            <input type="number" id="day" name='day' placeholder='DD' className={`inputs ${required}`} autoComplete='off' onChange={handleChange} />
            <span className={`warning ${dayerror}`}>{daywarn}</span>
          </div>
          <div>
            <label htmlFor="month" className="labels">MONTH</label>
            <input type="number" id="month" name='month' placeholder='MM' className={`inputs`} autoComplete='off' onChange={handleChange} />
            <span className="warning">Must be a valid day</span>
          </div>
          <div>
            <label htmlFor="year" className="labels">YEAR</label>
            <input type="number" id="year" name='year' placeholder='YYYY' className={`inputs`} autoComplete='off' onChange={handleChange} />
            <span className="warning">Must be a valid day</span>
          </div>
        </div>
        <div className="submit">
          <hr />
          <button type="submit" className="arrow"><Image className="icon_arrow" src={'./icon-arrow.svg'} alt='icon arrow' width={50} height={50}/></button>
        </div>
      </form>
      <section className="results">
        <h1><span className="date">--</span> years</h1>
        <h1><span className="date">--</span> months</h1>
        <h1><span className="date">--</span> days</h1>
      </section>
     
    </main>
  )
}
