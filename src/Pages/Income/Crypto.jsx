import AmountList from "./AmountList";
import ButtonFilter from "./ButtonFilter";
import CryptoList from "./CryptoList";
import Download from "./Download";
import Form from "./Form";
import styles from "./Income.module.css";

export default function Crypto() {
  const cryptoData = [
    { amount: "0.345BTC", date: new Date().toLocaleDateString() },
    { amount: "0.128ETH", date: new Date().toLocaleDateString() },
    { amount: "1.024BTC", date: new Date().toLocaleDateString() },
  
  ];

  return (
    <div className={styles.CryptoContainer}>
      <div className={styles.filterButAmountContainer}>
        <div className={styles.filterButContainer}>
          <ButtonFilter filterNumber={4} />
        </div>
        <CryptoList
          CryptoTitles="Total Crypto Income"
          AmountOfCrypto={0.3456666}
          style={{ color: "green" }}
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
                <AmountList amount={crypto.amount} date={crypto.date} />
              </div>
            ))}
          </div>
          <Download ButtonTitle= "Download Report"/>

      </div>
      <Form/>
    </div>
  );
}