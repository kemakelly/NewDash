import { useState } from "react"
import styles from "./Income.module.css"
import { IoIosSend } from "react-icons/io";

export default function Form() {
    const [inputForm, setInputForm]= useState("")
  return (
    <form className={styles.formcontainer}>
        <input type="text"
         name="form" 
         id="form"
          placeholder="Talk to our AI finance expert"
         value={inputForm}
         onChange={(e)=>setInputForm(e.target.value)}
         />
        <button>
            <IoIosSend />
        </button>
    </form>
  )
}
