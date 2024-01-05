"use client"
import Image from 'next/image'
import './page.scss'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { clsx } from 'clsx';

interface FormData {
  day: any;
  month: any;
  year: any;
}

export default function Home() {

  const [formData, setFormData] = useState<FormData>({
    day: '',
    month: '',
    year: ''
  });


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function checkDays(year: any, month: any) {
    return new Date(year, month, 0).getDate();
  }

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const [errorMessageYear, setErrorMessageYear] = useState("")
  const [errorMessageMonth, setErrorMessageMonth] = useState("")
  const [errorMessageDay, setErrorMessageDay] = useState("")

  const [day, setDay] = useState("--")
  const [month, setMonth] = useState("--")
  const [year, setYear] = useState("--")

  const [dayError, setDayError] = useState(false)
  const [monthError, setMonthError] = useState(false)
  const [yearError, setYearError] = useState(false)

  function calculateAge(year: any, month: any, day: any) {
    let years = currentDate.getFullYear() - year;
    let months = (currentDate.getMonth() + 1) - month;
    let days = currentDate.getDate() - day;

    if (months < 0 || (months === 0 && currentDate.getDate() < day)) {
      years--;
      months = (12 + currentDate.getMonth() + 1 - month) % 12;
    }

    if (days < 0) {
      const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
      days = prevMonth.getDate() - day + currentDate.getDate();
      months--;
    }

    setDay(days.toString())
    setMonth(months.toString())
    setYear(years.toString())
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setDayError(false)
    setMonthError(false)
    setYearError(false)
    setErrorMessageDay("")
    setErrorMessageMonth("")
    setErrorMessageYear("")

    const validDays = checkDays(formData.year, formData.month);

    if (!formData.day) {
      setDayError(true)
      setErrorMessageDay("This field is required")
    } else if (!formData.month) {
      setMonthError(true)
      setErrorMessageMonth("This field is required")
    } else if (!formData.year) {
      setYearError(true)
      setErrorMessageYear("This field is required")
    } else if (formData.year > currentYear) {
      setErrorMessageYear("Must be in the past")
      setYearError(true)
    } else if (formData.month > 12) {
      setMonthError(true)
      setErrorMessageMonth("Must be a valid month")
    } else if (formData.day > 31) {
      setDayError(true)
      setErrorMessageDay("Must be a valid day")
    } else if (formData.day > validDays) {
      setDayError(true)
      setMonthError(true)
      setYearError(true)
      setErrorMessageDay("Must be a valid date")
    } else {
      calculateAge(formData.year, formData.month, formData.day)
    }


  };


  return (
    <main className="main">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <div>
            <label htmlFor="day" className={clsx("labels", dayError ? "required" : "")}>DAY</label>
            <input
              type="number"
              id="day"
              name='day'
              placeholder='DD'
              className={clsx(`inputs`, dayError ? "required" : "")}
              autoComplete='off'
              value={formData.day}
              onChange={handleChange} />
            <span className="warning">
              {errorMessageDay}

            </span>
          </div>
          <div>
            <label htmlFor="month" className={clsx("labels", monthError ? "required" : "")}>MONTH</label>
            <input
              type="number"
              id="month"
              name='month'
              placeholder='MM'
              className={clsx(`inputs`, monthError ? "required" : "")}
              autoComplete='off'
              value={formData.month}
              onChange={handleChange} />
            <span className="warning">
              {errorMessageMonth}
            </span>
          </div>
          <div>
            <label htmlFor="year" className={clsx("labels", yearError ? "required" : "")}>YEAR</label>
            <input
              type="number"
              id="year"
              name='year'
              placeholder='YYYY'
              className={clsx(`inputs`, yearError ? "required" : "")}
              autoComplete='off'
              value={formData.year}
              onChange={handleChange} />
            <span className="warning">
              {/* {
                yearError && "This field is required"
              } */}
              {errorMessageYear}
            </span>
          </div>
        </div>
        <div className="submit">
          <hr />
          <button type="submit" className="arrow"><Image className="icon_arrow" src={'./icon-arrow.svg'} alt='icon arrow' width={50} height={50} /></button>
        </div>
      </form>
      <section className="results">
        <h1><span className="date">{year}</span> years</h1>
        <h1><span className="date">{month}</span> months</h1>
        <h1><span className="date">{day}</span> days</h1>
      </section>

    </main>
  )
}
