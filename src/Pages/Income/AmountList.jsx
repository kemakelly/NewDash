import styles from "./Income.module.css"
import { Link } from "react-router-dom"




export default function AmountList({amount,date}) {
  return (
    <div className={styles.AmountList}>
        <div className={styles.leftAmountList}>
            <div className={styles.amount}>
                 <h1>{amount}</h1>
            </div>
            <div className={styles.payment}>
                 <p>{date}</p>
            </div>
          
          
        </div>
        <div className={styles.rightAmountList}>

           <Link>
             See Details
           </Link>
       
        </div>
      
    </div>
  )
}
