import { useState } from "react"
import styles from "./Income.module.css"

export default function CryptoList({CryptoTitles,AmountOfCrypto,style}) {
    const [CryptoCurrency, setCryptoCurrency]= useState("BTN")

    const conversionRate ={
        BTC: 0.034, 
        ETH: 500,
        BTN:83
    }
  return (
    <div className={styles.CryptoList}>
        <div className={styles.leftCryptoContainer}>
            <h1>{CryptoTitles}</h1>
            
        </div>
        <div className={styles.RightCryptoContainer}>
                <h1 style={style}>
                    {(AmountOfCrypto * conversionRate[CryptoCurrency]).toFixed(2)}{CryptoCurrency}
                </h1>
                <select name="cryptocurrency" value={CryptoCurrency} 
                onChange={(e)=>setCryptoCurrency(e.target.value)}
                >
                    <option value="BTN">BTN</option>
                    <option value="BTC">BTC</option>
                    <option value="ETH">ETH</option>
                </select>

            </div>
      
    </div>
  )
}
