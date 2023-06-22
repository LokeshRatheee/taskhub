import React from "react";
import Image from "next/image";
import styles from "../iconButton/iconButton.module.css";
import Link from "next/link";
import {signIn} from "next-auth/react";

const IconButton = ({ src, width, height, alt, text ,href ,onClick}) => {
  console.log(text);

  return (
    <>
    
      <button className = {styles.buttonGoogle} >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={styles.google}
      />
      
      <span className={styles.googletext}>{text}</span>
      </button>
      
    </>
  );
};
export default IconButton;
