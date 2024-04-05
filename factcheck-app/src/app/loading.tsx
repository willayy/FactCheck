"use client";
import styles from "./homepage.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loading(){ 
  return (
    <main className={styles.main}>
        <div>
            <Loader
                color="#b0b8cf"
                radius={5} 
                type={"TailSpin"}        
            />
        </div>
    </main>
  ) 
} 