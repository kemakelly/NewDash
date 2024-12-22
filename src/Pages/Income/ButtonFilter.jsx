import styles from "./Income.module.css"
import { Link } from 'react-router-dom'
import React from "react"
import { IoFilterOutline } from "react-icons/io5";

export default function ButtonFilter({filterNumber}) {
  return (
    <div className={styles.ButtonFilter}>
      <Link>
      <div className={styles.buttonfilt}>
        <p>Filter Applied :{filterNumber}</p>
        <IoFilterOutline />
      </div>
      </Link>
    </div>
  )
}
