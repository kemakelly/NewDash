import AmountList from "./AmountList";
import ButtonFilter from "./ButtonFilter"
import CryptoList from "./CryptoList"
import Download from "./Download";
import Form from "./Form";
import styles from "./Income.module.css"
import TotalList from "./TotalList"

export default function Total() {
  const cryptoData = [
    { amount: "0.345BTC", date: new Date().toLocaleDateString() },
    { amount: "3.50000", date: new Date().toLocaleDateString() },
    { amount: "1.024BTC", date: new Date().toLocaleDateString() },
  
  ];
  return (
    <div className={styles.TotalContainer}>
      <div className={styles.filterButAmountContainer}>
        <div className={styles.filterButContainer}>
          <ButtonFilter filterNumber={5}/>
        </div>
        <TotalList TotalTitle="Total Income" 
        AmountOfCryptoCurrency={350000}
        style={{ color: "purple" }}
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
