import AmountList from "../Income/AmountList";
import ButtonFilter from "../Income/ButtonFilter"
import CryptoList from "../Income/CryptoList"
import Download from "../Income/Download";
import Form from "../Income/Form";
import styles from "./Expenses.module.css"

export default function CryptoExpenses() {
  const cryptoData = [
    { amount: "0.345BTC", date: new Date().toLocaleDateString() },
    { amount: "0.128ETH", date: new Date().toLocaleDateString() },
    { amount: "1.024BTC", date: new Date().toLocaleDateString() },
  
  ];
  return (
    <div className={styles.CryptoExpenses}>
      <div className={styles.filterButAmountContainer}>
        <div className={styles.filterButContainer}>
          <ButtonFilter filterNumber={9}/>
        </div>
        <CryptoList
          CryptoTitles="Total Crypto Expenses"
          AmountOfCrypto={0.789666}
          style={{ color: "yellow" }}
        />
      </div>
      <div className={styles.listWrapper}>
        <div className={styles.listcontainer}>
        {[
          { amount: "0.345BTC", date: new Date().toLocaleDateString() },
          { amount: "$350,0000", date: new Date().toLocaleDateString() },
         { amount: "1.024BTC", date: new Date().toLocaleDateString() },
                      
          ].map((crypto, index) => (
             <div className={styles.cryptList} key={index}>
                <AmountList amount={crypto.amount} date={crypto.date}/>
                  </div>
            ))}
        </div>
        <Download ButtonTitle="Download Report"/>
      </div>
      <Form/>
      
    </div>
  )
}
