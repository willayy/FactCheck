"use client";
import styles from "./homepage.module.css";
import { TailSpin } from "react-loader-spinner";

export default function Loading(){ 
  return (
    <main className={styles.main}>
        <div>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          />
        </div>
    </main>
  ) 
} 