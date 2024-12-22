import styles from "./SmsAlert.module.css"
import { MdOutlineDelete } from "react-icons/md";

export default function Mentions() {
  return (
    <div className={styles.Mentions}>
         <div className={styles.mentionlistContainer}>
            <div className={styles.list}>
              <div className={styles.imgTitleList}>
                      <div className={styles.imgs}>
                         <img src="/photo.jpg" alt="photo" />
                      </div>
                      <div className={styles.name}>
                          <h5>Mention in a Comment</h5>
                          <p>Amy L. mentioned you: '@you, do you think this color works?</p>
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
                          <h5>Mention in Goal Discussion</h5>
                          <p>John D. mentioned you in 'Q1 Design Goals Review'.</p>
                      </div>
              </div>
                   
              <div className={styles.del}>
                         <MdOutlineDelete />
              </div>
            
            </div>
            <div className={styles.list}>
              <div className={styles.imgTitleList}>
                      <div className={styles.imgs}>
                         <img src="/photo.jpg" alt="photo" />
                      </div>
                      <div className={styles.name}>
                          <h5>Mentioned in Feedback Request:</h5>
                          <p>Sam C. tagged you for feedback on 'Product Launch Wireframe': 'Need your review here</p>
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
                          <h5>Mention in Goal Discussion</h5>
                          <p>Sebastian G. mentioned you in a thread: 'Let's collaborate on this new design iteration</p>
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
