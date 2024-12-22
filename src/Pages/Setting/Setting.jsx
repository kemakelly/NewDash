import { useState } from "react";
import styles from "./setting.module.css"

export default function Setting() {
  const [isSaveClicked, setIsSaveClicked] = useState(false);
  const [isCancelClicked, setIsCancelClicked] = useState(false);

  const handleSaveClick = () => {
    setIsSaveClicked((prev) => !prev);
  };

  const handleCancelClick = () => {
    setIsCancelClicked((prev) => !prev);
  };
  return (
    
    <div className={styles.settingsContainer}>
    

    <div className={styles.settingsSection}>
      <h2>Account Settings</h2>
        <div className={styles.useemail}>
          <div className={styles.user}>
              <label>
                Username:
                <input type="text" 
                placeholder="Enter name"
                />
              </label>
           </div>
           <div className={styles.email}>
           <label>
              Email:
              <input type="email" 
              placeholder="Enter email"
              />
            </label>
           </div>

        </div>
      <div className={styles.passwordimg}>
            <div className={styles.passw}>
                <label>
                  Password:
                  <input type="password" 
                  placeholder="Enter password"
                  />
                </label>
            </div>
            <div className={styles.imgs}>
            <label>
              Profile Picture:
              <input type="file" />
            </label>
            </div>
     
      </div>
    </div>



    <div className={styles.settingsSec}>
      <h2>Privacy Settings</h2>
      <div className={styles.privySec}>
          <div className={styles.prive}>
              <label>
                Profile Visibility:
                  <select>
                    <option>Public</option>
                    <option>Private</option>
                  </select>
              </label>
          </div>
          <div className={styles.prive}>
          <label>
               Activity Status:
                <select>
                  <option>Online</option>
                  <option>Offline</option>
                </select>
          </label>
              
          </div>
       

      </div>
      
    </div>


    <div className={styles.settingsSec}>
      <h2>Theme Settings</h2>
      <div className={styles.privySec}>
          <div className={styles.privey}>
            <label>
              Theme:
                <select>
                  <option>Light</option>
                  <option>Dark</option>
                  <option>Custom</option>
                </select>
            </label>
             
          </div>
          <div className={styles.privey}>
            <label>
              Custom Colors:
              <input type="color" />
            </label>
          </div>
     

      </div>
      
    </div>


    <div className={styles.settingsSec}>
      <h2>General Settings</h2>
      <div className={styles.privySec}>
          <div className={styles.privey}>
              <label>
               Language:
                    <select>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                </label>
             
          </div>
          <div className={styles.privey}>
              <label>
                Date Format:
                <select>
                  <option>MM/DD/YYYY</option>
                  <option>DD/MM/YYYY</option>
                </select>
              </label>
          </div>

          <div className={styles.privey}>
            <label>
             Time Format:
                <select>
                  <option>12-hour</option>
                  <option>24-hour</option>
                </select>
            </label>
          </div>
     

      </div>
      
    </div>

    <div className={styles.settingsButton}>
    <button
        className={styles.save}style={{
          backgroundColor: isSaveClicked ? "#473628" : "#745945",
          color: isSaveClicked ? "#fff" : "#fff",  }} onClick={handleSaveClick} > Save Changes</button>

      <button
        className={styles.cancel} style={{backgroundColor: isCancelClicked ? "#5D4735" : "#896C56",color: isCancelClicked ? "#fff" : "#fff", }}onClick={handleCancelClick}> Cancel</button>
    </div>
   
  </div>
  )
}
