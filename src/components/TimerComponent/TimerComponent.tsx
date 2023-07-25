import React, { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

export const TimerComponent = () => {
  const [time, setTime] = useState('00:00:00')
  const [inputValue, setInputValue] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target

    // Remove non-numeric characters from the input
    value = value.replace(/\D/g, '')

    // Add ":" at the appropriate positions to form the "hh:mm:ss" format
    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{1,2})/, '$1:$2')
    }
    if (value.length > 5) {
      value = value.replace(/^(\d{2}):(\d{2})(\d{1,2})/, '$1:$2:$3')
    }

    setInputValue(value)
  }

  const handleStart = () => {
    if (inputValue.length === 8) {
      if (time === '00:00:00') {
        setTime(inputValue)
      }
      setIsRunning(true)
    }
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setInputValue('')
    setTime('00:00:00')
  }

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const [hh, mm, ss] = prevTime.split(':').map(Number)
          let seconds = ss - 1
          let minutes = mm
          let hours = hh

          if (seconds < 0) {
            seconds = 59
            minutes = mm - 1
          }

          if (minutes < 0) {
            minutes = 59
            hours = hh - 1
          }

          if (hours < 0) {
            setIsRunning(false)
            return '00:00:00'
          }

          const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
          return formattedTime
        })
      }, 1000)
    } else {
      clearInterval(intervalRef.current!)
    }

    return () => clearInterval(intervalRef.current!)
  }, [isRunning])

  return (
    <div>
      <div className={styles.formGroup}>
        <input
          className={styles.formField}
          maxLength={8}
          required
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter time in format 'hh:mm:ss'"
        />
        <span>{time}</span>
      </div>
      <div className={styles.controls}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
