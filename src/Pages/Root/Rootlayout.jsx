import { Outlet } from "react-router-dom"
import SideBar from "../SideBar/SideBar"
import styles from "./Root.module.css"

export default function Rootlayout() {
  return (
    <div className={styles.Rootlayout} >
        <div className={styles.sidebarsegment}>
            <SideBar/>
        </div>
        <div className={styles.mainSegment}>
            <Outlet/>
        </div>
      
    </div>
  )
}
