import Input from "../../atoms/input/input";
import styles from "./inputboxwithlogo.module.css";

export default function InputBoxWithLogo({ label, placeholder }) {
  return (
    <>
      <label className={styles.label}>{label}</label>
      <Input placeholder={placeholder} />
    </>
  );
}
