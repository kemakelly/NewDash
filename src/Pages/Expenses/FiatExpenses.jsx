import AmountList from "../Income/AmountList";
import AmountTitle from "../Income/AmountTitle"
import ButtonFilter from "../Income/ButtonFilter"
import Download from "../Income/Download";
import Form from "../Income/Form";
import styles from "./Expenses.module.css"

export default function FiatExpenses() {

  const cryptoData = [
    { amount: "0.345BTC", date: new Date().toLocaleDateString() },
    { amount: "0.128ETH", date: new Date().toLocaleDateString() },
    { amount: "1.024BTC", date: new Date().toLocaleDateString() },
  
  ];
  return (
    <div className={styles.FiatExpenses}>
        <div className={styles.filterButAmountContainer}>
            <div className={styles.filterButContainer}>
                <ButtonFilter filterNumber={5}/>
            </div>
            <AmountTitle 
            Title="Total Fiat Expenses" 
            AmountofMoney={549000} 
            style={{ color: "blue" }} 
            />
        </div>
        <div className={styles.listWrapper}>
          <div className={styles.listcontainer}>

            {[
               { amount: "0.345BTC", date: new Date().toLocaleDateString() },
               { amount: "$350,0000", date: new Date().toLocaleDateString() },
              { amount: "1.024BTC", date: new Date().toLocaleDateString() },
                        
                ].map((data, index) => (
                  <div className={styles.cryptList} key={index}>
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
