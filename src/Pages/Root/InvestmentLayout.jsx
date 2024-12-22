import { Outlet } from "react-router-dom"
import Investments from "../Investments/Investments"
import styles from "./Root.module.css"

export default function InvestmentLayout() {
  return (
    <div className={styles.InvestmentLayout}>
        <Investments/>
        <Outlet/>
      
    </div>
  )
}
