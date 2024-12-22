import { useState } from "react"
import styles from "./Income.module.css"

export default function TotalList({TotalTitle,AmountOfCryptoCurrency,style}) {
    const [currency,setCurrency]= useState("USD")
    const converstion ={
        BTC: 0.034, 
        EUR: 500,
        BTN:83,
        NGN:800

    }
  return (
    <div className={styles.TotalList}>
        <div className={styles.leftTotal}>
        <h1>{TotalTitle}</h1>
        </div>
        <div className={styles.rightTotal}>
           <h1 style={style}>
           {(AmountOfCryptoCurrency * (converstion[currency] || 1)).toFixed(2)}{currency}
           </h1>
           <select name="cryptocurrency" value={currency}
           onChange={(e)=>setCurrency(e.value.target)}
           >
            <option value="BTC">BTC</option>
            <option value="EUR">EUR</option>
            <option value="BTN">BTN</option>
            <option value="NGN">NGN</option>
           </select>

        </div>
      
    </div>
  )
}
