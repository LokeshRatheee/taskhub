import { React, useState, useEffect, useRef } from "react";
import styles from "@/styles/daily/today/today.module.css";
import Image from "next/image";
export default function Today() {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const deleteBtnRef1 = useRef(null);
  const deleteBtnRef2 = useRef(null);

  function addTask() {
    const inputboxs = document.getElementById("inputBoxs");
    const addTaskLi = document.getElementById("addTaskLi");
    inputboxs.style.display = "block";
    addTaskLi.style.display = "none";
  }

  function deletebtnShow(event) {
    const id = event.currentTarget.id;
    const deletebtn = document.getElementById(id).nextSibling;
    if (showDeleteBtn === false) {
      console.log("set to flex");
      deletebtn.style.display = "flex";
      // debugger;
      setShowDeleteBtn(!showDeleteBtn);
    } else {
      console.log("set to none");
      deletebtn.style.display = "none";
      setShowDeleteBtn(!showDeleteBtn);
      console.log(showDeleteBtn);
    }
  }

  function deleteTaskList(event) {
    const id = event.currentTarget.id;
    const element =
      document.getElementById(id).parentNode.parentNode.parentNode;
    element.style.display = "none";
  }

  useEffect(() => {
    console.log("showDeleteBtn updated:", showDeleteBtn);
    const popID1 = document.getElementById("deletebtnId1");
    function outsideClick1(e) {
      if (deleteBtnRef1.current && e.target.id === "1") {
        console.log("parent");
      } else if (
        deleteBtnRef1.current &&
        !deleteBtnRef1.current.contains(e.target)
      ) {
        console.log("click out side");
        if (popID1.style.display != "none") {
          setShowDeleteBtn(!showDeleteBtn);
          console.log("showDeleteBtn updated:", showDeleteBtn);
          console.log("set to none");
          popID1.style.display = "none";
        }
      }
    }

    const popID2 = document.getElementById("deletebtnId2");
    function outsideClick2(e) {
      if (deleteBtnRef2.current && e.target.id === "1") {
        console.log("parent");
      } else if (
        deleteBtnRef2.current &&
        !deleteBtnRef2.current.contains(e.target)
      ) {
        console.log("click out side");
        if (popID2.style.display != "none") {
          setShowDeleteBtn(!showDeleteBtn);
          console.log("showDeleteBtn updated:", showDeleteBtn);
          console.log("set to none");
          popID2.style.display = "none";
        }
      }
    }

    document.addEventListener("click", outsideClick1);
    document.addEventListener("click", outsideClick2);


    return () => {
      document.removeEventListener("click", outsideClick1);
      document.removeEventListener("click", outsideClick2);

      console.log("this is unmount statement");
    };
  }, [showDeleteBtn]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.todaygroup}>
          <span className={styles.today}>Today</span>
          <div className={styles.tasks}>4/6 completed</div>
          <div className={styles.tasklist}>
            <ul className={styles.xyz}>
              <li className={styles.list1}>
                <Image
                  src="/daily/checklist.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.checkicon}
                />
                <div className={styles.frame}>
                  <div className={styles.leftside}>
                    <span className={styles.listheading}>
                      Cooking a salmon sushi
                    </span>
                    <p className={styles.listp}>
                      Salmon and tuna i think is good for dinner, i wanna make
                      it today :D
                    </p>
                  </div>
                  <div className={styles.rightsideicons}>
                    <Image
                      src="/daily/bi_pencil-square.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                    />
                    <Image
                      src="/daily/bi_three-dots.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                      id="1"
                      onClick={deletebtnShow}
                      ref={deleteBtnRef1}
                    />
                    <button
                      className={styles.deletebtn}
                      onClick={deleteTaskList}
                      id="deletebtnId1"
                    >
                      <Image
                        src="/daily/bi_trash-fill.png"
                        alt="Picture of the author"
                        width={26}
                        height={25}
                        className={styles.deleteicon}
                      />
                      <span className={styles.btndeletetext}>Delete</span>
                    </button>
                  </div>
                </div>
              </li>
              <li className={styles.list1}>
                <Image
                  src="/daily/checklist.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.checkicon}
                />
                <div className={styles.frame}>
                  <div className={styles.leftside}>
                    <span className={styles.listheading}>
                      Cooking a salmon sushi
                    </span>
                    <p className={styles.listp}>
                      Salmon and tuna i think is good for dinner, i wanna make
                      it today :D
                    </p>
                  </div>
                  <div className={styles.rightsideicons}>
                    <Image
                      src="/daily/bi_pencil-square.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                    />
                    <Image
                      src="/daily/bi_three-dots.png"
                      alt="Picture of the author"
                      width={26}
                      height={25}
                      className={styles.pencilsquare}
                      id="2"
                      onClick={deletebtnShow}
                      ref={deleteBtnRef2}
                    />
                    <button
                      className={styles.deletebtn}
                      onClick={deleteTaskList}
                      id="deletebtnId2"
                    >
                      <Image
                        src="/daily/bi_trash-fill.png"
                        alt="Picture of the author"
                        width={26}
                        height={25}
                        className={styles.deleteicon}
                      />
                      <span className={styles.btndeletetext}>Delete</span>
                    </button>
                  </div>
                </div>
              </li>
              <li
                className={styles.addtaskli}
                onClick={() => addTask()}
                id="addTaskLi"
              >
                <Image
                  src="/daily/fluent_add-circle-32-filled.png"
                  alt="Picture of the author"
                  width={26}
                  height={25}
                  className={styles.addtaskicon}
                />
                <span className={styles.addtask}>Add task</span>
              </li>
              <li>
                <div className={styles.inputboxs} id="inputBoxs">
                  <input
                    type="text"
                    placeholder="Task title"
                    className={styles.tasktitle}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className={styles.description}
                  />
                  <div className={styles.addCancelbtn}>
                    <button className={styles.btnadd}>Add</button>
                    <button className={styles.btncancel}>Cancel</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
