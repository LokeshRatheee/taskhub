import React from "react";
import ImageWithAlt from '../../atoms/image/ImageWithAlt';
// import styles from "@/styles/signIN/signin.module.css";
import styles from "../HeaderWithLogo/headerWithLogo.module.css"



const HeaderWithLogo = ({ appname, src, alt, width, height }) => {
  return (
    <>
    <div className = {styles.header}>
   
      <ImageWithAlt
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.logo}
      />
      <span className={styles.tododaily}>{appname}</span>
      
      </div>
    </>
  );
};

export default HeaderWithLogo;
