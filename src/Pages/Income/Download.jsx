import styles from "./Income.module.css"
import { Link } from "react-router-dom"
import { BsCloudDownload } from "react-icons/bs";

export default function Download({ButtonTitle}) {
  return (
    <div className={styles.Download}>
        <Link>
        <div className={styles.downbutton}>
            <p>{ButtonTitle}</p>
            <BsCloudDownload />
        </div>
        </Link>
      
    </div>
  )
}
