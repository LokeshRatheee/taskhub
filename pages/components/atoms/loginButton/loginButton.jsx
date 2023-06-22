import styles from "./loginbutton.module.css"

export default function LoginButton({onClick}){
  
    return (
        <>
        <button className={styles.loginBtn} type="submit" value="Log in" onClick={onClick} >
        Log in
      </button>
        </>
    )
}