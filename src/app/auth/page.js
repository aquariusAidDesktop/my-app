"use client"

import Header from "@/components/Header/Header";
import styles from "./page.module.css"
import Image from "next/image";
import { useRouter } from "next/navigation";





export default function Home() {

  const navigate = useRouter()

  return (
    <>
      <Header>
        <div className={styles.authContainer}>
          <div className={styles.formContainer}>
            <ul className={styles.nameContainerList}>
              <li className={styles.listItem}>Авторизация</li>
              <li className={styles.listItem}>Регистрация</li>
            </ul>
            <div className={styles.data}>
              <div className={styles.emailForm}>
                <input className={styles.input} placeholder="Введите ваш email" type="email"></input>
              </div>
              <div className={styles.passwordForm}>
                <input className={styles.input} placeholder="Введите ваш пароль" type="password"></input>
              </div>
            </div>
            <div className={styles.nextButton}>
              <button onClick={() => {navigate.push("/plans")}} className={styles.button}>Далее</button>
            </div>
      
          </div>
        </div>
      </Header>
        
    </> 
  );
}