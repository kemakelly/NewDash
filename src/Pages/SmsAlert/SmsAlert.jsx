import styles from "./SmsAlert.module.css"
import { MdOutlineAllInclusive } from "react-icons/md";
import { CiAt } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


export default function SmsAlert() {
  const navigate = useNavigate()
  return (
    <div className={styles.SmsAlert}>
      <div className={styles.smsbutton}>
        <button className={styles.buts} onClick={()=>navigate("All")}>
            <MdOutlineAllInclusive />
            <h5>All</h5>
        </button>

        <button  className={styles.buts} onClick={()=> navigate("Mentions")}>
            <CiAt />
            <h5>Mentions</h5>
        </button>

        <button className={styles.buts} onClick={()=> navigate('Completed')}>
            <FaCheck />
            <h5 >Completed</h5>
        </button>
      </div>
      
    </div>
  )
}
