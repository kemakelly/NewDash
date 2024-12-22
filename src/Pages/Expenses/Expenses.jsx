import styles from "./Expenses.module.css"
import { Outlet, useNavigate } from "react-router-dom"



export default function Expenses() {
  const navigate = useNavigate()
  
  return (
    <div className={styles.Expenses}>
       <div className={styles.income}>
             <button onClick={()=>navigate("FiatExpenses")}>Fiat Expenses</button>
            <button onClick={()=>navigate("CryptoExpenses")}>Crypto Expenses</button>
            <button onClick={()=>navigate("TotalExpenses")}>Total Expenses</button>
          
        </div>
      
    </div>
  )
}
