import AmountList from "../Income/AmountList"
import ButtonFilter from "../Income/ButtonFilter"
import Download from "../Income/Download"
import Form from "../Income/Form"
import TotalList from "../Income/TotalList"
import styles from "./Expenses.module.css"

export default function TotalExpenses() {
  return (
    <div className={styles.TotalExpenses}>
      <div className={styles.filterButAmountContainer}>
        <div className={styles.filterButContainer}>
          <ButtonFilter filterNumber={12}/>
        </div>
        <TotalList
          TotalTitle="Total Expenses" 
          AmountOfCryptoCurrency={859000}
          style={{ color: "brown" }}
        />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.listcontainer}>
           {[
              { amount: "0.345BTC", date: new Date().toLocaleDateString() },
              { amount: "3.50000", date: new Date().toLocaleDateString() },
               { amount: "1.024BTC", date: new Date().toLocaleDateString() },
                      
              ].map((data,index)=>(
              <div key={index}>
                <AmountList amount={data.amount} date={data.date}/>
              </div>
            ))}
        </div>
        <Download ButtonTitle="Download Report"/>
      </div>
            <Form/>
    </div>
  )
}
