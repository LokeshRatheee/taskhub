import { React, useEffect } from "react";
import IconButton from "../../molecules/iconButton/IconButton";
// import styles from "@/styles/signIN/signin.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styles from "./signupbutton.module.css"
const SignUpButton = ({ src, alt, width, height, text, href, auth }) => {
  console.log(auth);

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session, router, href]);

  const handleSignIn = async () => {
    await signIn(auth);
  };

  return (
    <>
      <div className={styles.signButtons} onClick={handleSignIn}>
        <IconButton
          src={src}
          alt={alt}
          width={width}
          height={height}
          text={text}
        />
      </div>
    </>
  );
};

export default SignUpButton;
