import { Outlet } from "react-router-dom"
import SmsAlert from "../SmsAlert/SmsAlert"
import styles from "./Root.module.css"

export default function SmsAlerLayout() {
  return (
    <div className={styles.SmsAlerLayout}>
        <SmsAlert/>
        <Outlet/>
      
    </div>
  )
}
