import React,{useState} from "react";
import styles from "./EmailInput.module.css";

export default function EmailInput(){
    const [email,setEmail] = useState('');

    function handleSend(){
        window.open(`mailto:${email}`);
    }

    return(
        <span>
            <input type="email"  onChange={({target:{value}})=>setEmail(value)} placeholder="Enter your email here" className={styles.emailInput__input} />
            <button className={styles.emailInput__btn} onClick={handleSend}>Send</button>
        </span>
    )
}