import styles from "./SmsAlert.module.css"
import { MdOutlineDelete } from "react-icons/md";

export default function All() {
  return (
    <div className={styles.Allcontainer}>

<div className={styles.smsListContainer}>
        <div className={styles.list}>
          <div className={styles.imgTitleList}>
          <div className={styles.imgs}>
             <img src="/photo.jpg" alt="photo" />
          </div>
          <div className={styles.name}>
              <h5>Transaction Alert</h5>
              <p>You have successfully transferred $1,000 to John Doe. Ref: 12345ABC.</p>
          </div>
      </div>
       
        <div className={styles.del}>
        <MdOutlineDelete />
        </div>

        </div>
        <div className={styles.list}>
          <div className={styles.imgTitleList}>
          <div className={styles.imgs}>
             <img src="/photo3.jpg" alt="photo" />
          </div>
          <div className={styles.name}>
              <h5>Approval Completed</h5>
              <p>Valeria F.'s request for Sign-up Flow Update has been approved. </p>
          </div>
      </div>
       
        <div className={styles.del}>
        <MdOutlineDelete />
        </div>

        </div>

        <div className={styles.list}>
          <div className={styles.imgTitleList}>
          <div className={styles.imgs}>
             <img src="/photo2.jpg" alt="photo" />
          </div>
          <div className={styles.name}>
              <h5>Comment Notification</h5>
              <p>Amy L. commented: 'Great work on the new branding update!' </p>
          </div>
      </div>
       
        <div className={styles.del}>
        <MdOutlineDelete />
        </div>

        </div>

        <div className={styles.list}>
          <div className={styles.imgTitleList}>
          <div className={styles.imgs}>
             <img src="/photo3.jpg" alt="photo" />
          </div>
          <div className={styles.name}>
              <h5>Approval Completed</h5>
              <p>Hans Z. mentioned you: 'Can you review the new layout?</p>
          </div>
      </div>
       
        <div className={styles.del}>
        <MdOutlineDelete />
        </div>

        </div>


      </div>
      
    </div>
  )
}
