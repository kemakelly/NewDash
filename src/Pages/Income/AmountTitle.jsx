import { useState } from "react"
import styles from "./Income.module.css"

export default function AmountTitle({Title,AmountofMoney,style}) {
    const [currency,setCurrency] = useState("USD")
    
    const conversionRate ={
        USD:1.5,
        EUR:0.84,
        NGN:900 ,
    }
  return (
    <div className={styles.AmountTitle}>
        <div className={styles.leftAmountcontainer}>
            <h1>{Title}</h1>

        </div>
        <div className={styles.rightAmountContainer}>
        <h1 style={style}>
          {(AmountofMoney * conversionRate[currency]).toFixed(2)} {currency}
        </h1>

        <select name="currency" value={currency} onChange={(e)=>setCurrency(e.target.value)} >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NGN">NGN</option>
            </select>

        </div>
      
    </div>
  )
}
