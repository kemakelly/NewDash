import styles from "./Root.module.css"
import Expenses from '../Expenses/Expenses'
import { Outlet } from 'react-router-dom'

export default function ExpenseLayout() {
  return (
    <div  className={styles.ExpenseLayout}>
      <Expenses/>
      <Outlet/>
    </div>
  )
}
