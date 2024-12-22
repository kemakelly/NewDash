import { useNavigate } from "react-router-dom"
import styles from "./Investment.module.css"

export default function Investments() {
  const navigate = useNavigate()
  return (
    <div className={styles.Investments}>
       <div className={styles.investmentbuttons}>
              <button className={styles.but} onClick={()=> navigate('FiatInvestment')}>Fiat Investment</button>
              <button className={styles.but} onClick={()=> navigate('CryptoInvestment')}>Crypto Investment</button>
              <button  className={styles.but} onClick={()=> navigate('TotalInvestment')}>Total Investment</button>
             
                  
              </div>
      
    </div>
  )
}
