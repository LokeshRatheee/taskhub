import { React, useState, useRef, useEffect, useCallback } from "react";
import styles from "../../styles/daily/daily.module.css";
import Image from "next/image";
import Today from "./today/today";
import Upcoming from "./upcoming/upcoming";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Daily() {
  // debugger;

  const router = useRouter();
  const check = useRef(null);
  const menu = useRef(null);
  const { data: session } = useSession();
  const [showToday, setshowToday] = useState(true);
  const [showUpcoming, setshowUpcoming] = useState(false);
  const [showpop, setshowpop] = useState(false);
  const [showsidebar, setshowsidebar] = useState(false);

  useEffect(() => {
    console.log(session);
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  async function handleSignOut() {
    console.log("signout");
    await signOut();
  }

  function handleClick(value) {
    if (window.screen.width < 1025) {
      const afterClickSideBarId = document.getElementById(
        "afterClickSideBarId"
      );
      afterClickSideBarId.style.display = "none";
    }

    if (value === "today") {
      setshowToday(true);
      setshowUpcoming(false);
    } else if (value === "yesterday") {
      setshowToday(true);
      setshowUpcoming(false);
    } else if (value === "upcoming") {
      setshowToday(false);
      setshowUpcoming(true);
    }
  }

  function sideBar() {
    const afterClickSideBarId = document.getElementById("afterClickSideBarId");
    if (showsidebar === true) {
      afterClickSideBarId.style.display = "none";
      setshowsidebar(!showsidebar);
    } else {
      afterClickSideBarId.style.display = "block";
      setshowsidebar(!showsidebar);
    }
  }

  function usericon() {
    const pop = document.getElementById("popId");
    console.log(showpop);
    if (showpop === false) {
      pop.style.display = "block";
      setshowpop(!showpop);
    } else {
      pop.style.display = "none";
      setshowpop(!showpop);
    }
  }

  useEffect(() => {
    const popID = document.getElementById("popId");
    function outsideClick(e) {
      if (check.current && e.target.id === "usericonId") {
        console.log("parent");
      } else if (check.current && !check.current.contains(e.target)) {
        console.log(showpop);
        if (showpop === true) {
          popID.style.display = "none";
          setshowpop(!showpop);
        }
      }
    }
    const afterClickSideBarId = document.getElementById("afterClickSideBarId");
    function outsideClick1(e) {
      if (menu.current && !menu.current.contains(e.target)) {
        if (showsidebar === true) {
          afterClickSideBarId.style.display = "none";
          console.log(`after outside click : ${showsidebar}}`);
          setshowsidebar(!showsidebar);
          console.log(`after outside click : ${showsidebar}}`);
        }
      }
    }

    document.addEventListener("click", outsideClick);
    document.addEventListener("click", outsideClick1);

    return () => {
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("click", outsideClick1);
      console.log("this is unmount statement");
    };
  }, [showpop, showsidebar]);

  return (
    <>
      <div className={styles.appbar}>
        <Link href="/">
          <div className={styles.leftappbar}>
            <Image
              src="/landingPage/icon.svg"
              alt="Picture of the author"
              width={41}
              height={41}
              className={styles.logo}
            />
            <span className={styles.tododaily}>Todo Daily</span>
          </div>
        </Link>
        <div className={styles.rightappbar}>
          <span className={styles.username}>James</span>
          <Image
            src="/daily/Ellipse 1.png"
            alt="Picture of the author"
            width={55}
            height={55}
            className={styles.usericon}
            id="usericonId"
            onClick={usericon}
          />
        </div>
      </div>

      {/* after click sidebar */}
      <div className={styles.xyz}>
        {/* before click sidebar */}

        <div className={styles.beforeSideBar}>
          <i
            className={`fa-solid fa-bars ${styles.baricon}`}
            onClick={sideBar}
            ref={menu}
          ></i>
        </div>
        <div className={styles.afterClickSideBar} id="afterClickSideBarId">
          <div className={styles.todaydiv} onClick={() => handleClick("today")}>
            <Image
              src="/daily/ion_calendar-clear.png"
              alt="Picture of the author"
              width={29}
              height={29}
              className={styles.calendericon1}
            />
            <span className={styles.today}>Today</span>
          </div>
          <div
            className={styles.yesterdaydiv}
            onClick={() => handleClick("yesterday")}
          >
            <Image
              src="/daily/ion_calendar-number.png"
              alt="Picture of the author"
              width={29}
              height={29}
              className={styles.calendericon2}
            />
            <span className={styles.yesterday}>Yesterday</span>
          </div>
          <div
            className={styles.upcomingdiv}
            onClick={() => handleClick("upcoming")}
          >
            <Image
              src="/daily/ion_calendar-number.png"
              alt="Picture of the author"
              width={29}
              height={29}
              className={styles.calendericon3}
            />
            <span className={styles.upcoming}>Upcoming</span>
          </div>
        </div>
      </div>

      <div className={styles.pop} id="popId" ref={check}>
        <div className={styles.profile}>
          <Image
            src="/daily/healthicons_ui-user-profile.png"
            alt="Picture of the author"
            width={18}
            height={18}
            className={styles.userProfileLogo}
          />
          <span>Profile</span>
        </div>
        <div className={styles.setting}>
          <Image
            src="/daily/akar-icons_settings-horizontal.png"
            alt="Picture of the author"
            width={18}
            height={18}
            className={styles.settingLogo}
          />
          <span>Setting</span>
        </div>

        <div className={styles.Logout} onClick={handleSignOut}>
          <Image
            src="/daily/entypo_log-out.png"
            alt="Picture of the author"
            width={18}
            height={18}
            className={styles.logoutLogo}
          />
          <span>Logout</span>
        </div>
      </div>

      <div className={styles.anothercomponent}>
        {showToday && <Today />}
        {showUpcoming && <Upcoming />}
      </div>
    </>
  );
}
