import { useNavigate } from "react-router-dom"
import styles from "./Income.module.css"


export default function Income() {
    const navigate = useNavigate()
  return (
    
    <div className={styles.incomContainer}>
    <div className={styles.income}>
    <button onClick={()=>navigate("Fiat")}>Fiat Income</button>
        <button onClick={()=>navigate("Crypto")}>Crypto Income</button>
        <button onClick={()=>navigate("Total")}>Total Income</button>
      
    </div>
  </div>
  )
}
