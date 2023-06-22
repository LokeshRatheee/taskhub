import React from "react";
import Image from "next/image";
import styles from "./image.module.css";

// const ImageWithAlt = ({ src, width, height, alt }) => (
const ImageWithAlt = ({ ...props }) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <Image
    // src={src}
    // alt={alt}
    // width={width}
    // height={height}
    {...props}
    className={styles.logo}
  />
);

export default ImageWithAlt;
