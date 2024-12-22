import styles from "./Income.module.css"
import ButtonFilter from "./ButtonFilter"
import AmountTitle from "./AmountTitle"
import { useLoaderData } from "react-router-dom"
import AmountList from "./AmountList"
import Download from "./Download"
import Form from "./Form"

export default function Fiat({filterNumber}) {
  const amountData = useLoaderData()
  return (
    <div className={styles.FiatContainer}>
      <div className={styles.filterButAmountContainer}>
        <div className={styles.filterButContainer}>
          <ButtonFilter filterNumber={2} />
        </div>
        <AmountTitle 
          Title="Total Fiat Income" 
          AmountofMoney={400000} 
          style={{ color: "red" }} 
        />
      </div>

      <div className={styles.listWrapper}>
        <div className={styles.listcontainer}>
          {amountData.map((data,index)=>(
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
export const fiatLoader = async()=>{
  const response = await fetch("http://localhost:5000/Income ")
  return response.json()
}