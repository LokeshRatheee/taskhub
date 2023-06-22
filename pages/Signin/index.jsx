import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styles from "./signin.module.css";

import HeaderWithLogo from "../components/organisms/HeaderWithLogo/HeaderWithLogo";
import SignupButton from "../components/organisms/signupButton/signupButton";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
// import { getSession } from "next-auth/react";
import InputBoxWithLogo from "../components/molecules/inputBoxWithLogo/inputBoxWithLogo";
import LoginButton from "../components/atoms/loginButton/loginButton";
import axios from "axios";
import MyContext from "@/Context/MyContext";
import { redirect } from "next/navigation";

export default function Signin(){
  // const router = useRouter();
  // const [apiMessage, setApiMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [footer, setfooter] = useState(null);
  console.log(router.query.prop);
  const { data: session } = useSession();
  // console.log(session);
  const { email, setemail } = useContext(MyContext);
  const { password, setpassword } = useContext(MyContext);
  // const {final , setfinial} = useState(data);
  const [loginStatus, setloginStatus] = useState(false);

  useEffect(() => {
    if (router.isReady && router.query.prop) {
      // Save the value to localStorage when the prop is available
      localStorage.setItem("footer", router.query.prop);
    }

    // Retrieve the value from localStorage or use a default value
    const storedfooter = localStorage.getItem("footer") || "default-value";
    setfooter(storedfooter);
    console.log(footer);
  }, [router.isReady, router.query.prop]);


  const handlesubmit = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      // Handle the error
      alert("something went wrong");
      console.error(result.error);
    } else {
      // Redirect to the protected page
      alert("Login Succesfull");
    }
  };

  return (
    <>
      <div className={styles.box}>
        <HeaderWithLogo
          appname="Todo Daily"
          src="/landingPage/icon.svg"
          alt="Picture of the author"
          width="41"
          height="41"
        />
        <span className={styles.signin}>{footer}</span>
        <InputBoxWithLogo label="Email" placeholder="me@example.com" />
        <InputBoxWithLogo label="Password" placeholder="password" />
        <LoginButton onClick={handlesubmit} />
        <span className={styles.or}>OR</span>
        <div className={styles.signButtons}>
          <SignupButton
            src="/signIN/flat-color-icons_google.png"
            alt="tt"
            height="22"
            width="22"
            text="Continue using Google"
            auth="google"
            // href = {"/app/daily/daily"}
            href={
              session === undefined || session === null
                ? "/signin"
                : "/app/daily/daily"
            }
          />
          <SignupButton
            src="/signIN/mdi_github.png"
            height="21"
            width="21"
            alt="rr"
            text="Continue using Github"
            auth="github"
            // href = {"/app/daily/daily"}
            href={
              session === undefined || session === null
                ? "/signin"
                : "/app/daily/daily"
            }
          />
        </div>
        <hr className={styles.divider} />

        {footer === "signin" && (
          <div className={styles.footer}>
            Not have an account ?{" "}
            <Link href="Signin?prop=signup" passHref as="Signup">
              <span className={styles.footerSign}>Signup</span>
            </Link>
          </div>
        )}
        {footer === "signup" && (
          <div className={styles.footer}>
            Already have an account ?{" "}
            <Link href="Signin?prop=signin" passHref as="Signin">
              <span className={styles.footerSign}>Signin</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

