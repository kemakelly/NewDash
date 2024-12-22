import { Outlet } from "react-router-dom"
import Income from "../Income/Income"
import styles from "./Root.module.css"

export default function IncomeLayout() {
  return (
    <div className={styles.IncomeLayout}>
        <Income/>
        <Outlet/>      
    </div>
  )
}
