import styles from "./SideBar.module.css"
import { PiSidebarFill } from "react-icons/pi";
import { LiaCoinsSolid } from "react-icons/lia";
import { TbFileArrowRight } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { RiListSettingsLine } from "react-icons/ri";
import { CiBag1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
    const [isOpen , setIsOpen] = useState(false)
    const toggle = ()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div style={{ width: isOpen ? "240px" : "80px" }} className={styles.SideBar}>
        <div className={styles.topcontainer}>
            <div style={{display :isOpen ? "block" :"none"}} className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
            <div  style={{marginLeft:isOpen ? "50px": "1rem"}} className={styles.bars} onClick={toggle}>
                 <PiSidebarFill />
            </div>
        </div>

        <div className={styles.middle}>
    
                <NavLink 
                    to={"Income"} 
                    className={({ isActive }) =>
          isActive ? `${styles.NavLink} ${styles.active}` : `${styles.NavLink}`}
                    style={{
                        width: isOpen ? "220px" : "60px"  }}
                >
                    <div className={styles.iconsContainer}>
                        
                            <LiaCoinsSolid />
                    </div>
                    {isOpen && (
                        <div className={styles.textContainer}>
                            <h1>
                                Income
                            </h1>
                            <p 
                                style={{
                                    visibility: isOpen ? "visible" : "hidden",
                                    height: isOpen ? "auto" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "opacity 0.3s, height 0.3s"
                                }}
                            >
                                Click to see how much income you’ve made
                            </p>
                        </div>
                    )}
                </NavLink>

                <NavLink 
                    to={"Expenses"} 
                    className={({ isActive }) =>
                        isActive ? `${styles.NavLink} ${styles.active}` : `${styles.NavLink}`}
                    style={{
                        width: isOpen ? "220px" : "60px",
                   
                    }}
                >
                    <div className={styles.iconsContainer}>
                    <TbFileArrowRight />
                    </div>
                    {isOpen && (
                        <div className={styles.textContainer}>
                            <h1>
                               Expenses
                            </h1>
                            <p 
                                style={{
                                    visibility: isOpen ? "visible" : "hidden",
                                    height: isOpen ? "auto" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "opacity 0.3s, height 0.3s"
                                }}
                            >
                                Click to see how much you’ve spent
                            </p>
                        </div>
                    )}
                </NavLink>

                <NavLink 
                    to={"SmsAlert"} 
                    className={({ isActive }) =>
                        isActive ? `${styles.NavLink} ${styles.active}` : `${styles.NavLink}`}
                    style={{
                        width: isOpen ? "220px" : "60px",
                   
                    }}
                >
                    <div className={styles.iconsContainer}>
                        <AiOutlineMail />
                    </div>
                    {isOpen && (
                        <div className={styles.textContainer}>
                            <h1>
                               SmsAlert
                            </h1>
                            <p 
                                style={{
                                    visibility: isOpen ? "visible" : "hidden",
                                    height: isOpen ? "auto" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "opacity 0.3s, height 0.3s"
                                }}
                            >
                                Click to see your financial SMS notifications
                            </p>
                        </div>
                    )}
                </NavLink>

                <NavLink 
                    to={"Investments"} 
                    className={({ isActive }) =>
                        isActive ? `${styles.NavLink} ${styles.active}` : `${styles.NavLink}`}
                    style={{
                        width: isOpen ? "220px" : "60px",
                   
                    }}
                >
                    <div className={styles.iconsContainer}>
                            <CiBag1 />
                    </div>
                    {isOpen && (
                        <div className={styles.textContainer}>
                            <h1>
                              Investments
                            </h1>
                            <p 
                                style={{
                                    visibility: isOpen ? "visible" : "hidden",
                                    height: isOpen ? "auto" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "opacity 0.3s, height 0.3s"
                                }}
                            >
                                lick to see how much you’ve invested
                            </p>
                        </div>
                    )}
                </NavLink>

                <NavLink 
                    to={"Setting"} 
                    className={({ isActive }) =>
                        isActive ? `${styles.NavLink} ${styles.active}` : `${styles.NavLink}`}
                    style={{
                        width: isOpen ? "220px" : "60px",
                   
                    }}
                >
                    <div className={styles.iconsContainer}>
                            <RiListSettingsLine />
                    </div>
                    {isOpen && (
                        <div className={styles.textContainer}>
                            <h1>
                            Settings
                            </h1>
                            <p 
                                style={{
                                    visibility: isOpen ? "visible" : "hidden",
                                    height: isOpen ? "auto" : "0",
                                    opacity: isOpen ? 1 : 0,
                                    transition: "opacity 0.3s, height 0.3s"
                                }}
                            >
                                Click to change you settings
                            </p>
                        </div>
                    )}
                </NavLink>

        </div>

        <div    style={{marginLeft:isOpen ? "50px": "1rem"}}className={styles.bottom}>
            <div  className={styles.logos}>
                <img src="/per.png" alt="person" />
            </div>
            <div style={{display :isOpen ? "block" :"none"}} className={styles.name}>
                    <h1>Kema</h1>
            </div>

        </div>
        
    </div>
  )
}
