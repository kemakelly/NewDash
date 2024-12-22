import styles from "./SmsAlert.module.css"
import { MdOutlineDelete } from "react-icons/md";

export default function Completed() {
  return (
    <div className={styles.Completed}>
       <div className={styles.RequestlistContainer}>
        <div className={styles.list}>
                  <div className={styles.imgTitleList}>
                  <div className={styles.imgs}>
                     <img src="/photo2.jpg" alt="photo" />
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
                     <img src="/photo5.jpg" alt="photo" />
                  </div>
                  <div className={styles.name}>
                      <h5>Team Join Request</h5>
                      <p>Amy L. has requested to join the 'Design Team'. — Pending approval </p>
                  </div>
              </div>
               
                <div className={styles.del}>
                <MdOutlineDelete />
                </div>
        
        </div>
        <div className={styles.list}>
                  <div className={styles.imgTitleList}>
                  <div className={styles.imgs}>
                     <img src="/photo4.jpg" alt="photo" />
                  </div>
                  <div className={styles.name}>
                      <h5>File Access Request</h5>
                      <p>Hans Z. requested access to 'Brand Guidelines.pdf' — Approve? </p>
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
                      <h5>Feedback Reques</h5>
                      <p>Sam C. requested your review on 'Mobile App Prototype'. </p>
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
