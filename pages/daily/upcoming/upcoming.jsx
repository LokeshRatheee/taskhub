import { React, useState , useEffect } from "react";
import styles from "@/styles/daily/upcoming/upcoming.module.css";
import Image from "next/image";


export default function Upcoming() {
  const [numbers, setNumbers] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  const [screenWidth,setscreenWidth] = useState(0);
  const [showDeleteBtn , setShowDeleteBtn] = useState(false);

  function deletebtnShow(event){
    const id  = event.currentTarget.id;
  
    const deletebtn = document.getElementById(id).nextSibling;
    if(showDeleteBtn === false){
      console.log("none");
      deletebtn.style.display = "flex"
      setShowDeleteBtn(!showDeleteBtn);
    }
    else{
      console.log("flex");
      deletebtn.style.display = "none";
      setShowDeleteBtn(!showDeleteBtn);
    }
  }


  function forward() {
    const arr = [...numbers];
    arr.map((value, i) => {
      arr[i] = value + 1;
    });
    setNumbers(arr);
    // console.log(numbers)
  }

  function backward() {
    const arr = [...numbers];
    arr.map((value, i) => {
      arr[i] = value - 1;
    });
    setNumbers(arr);
  }


  useEffect(() => {
    setscreenWidth(window.screen.width);
  },[]);


  if(screenWidth && screenWidth < 480){
    console.log("lokesh")    
    numbers.length = 4;
  }
  else if(screenWidth && screenWidth > 767 && screenWidth < 1025){
    numbers.length = 8;
  }
  else if(screenWidth && screenWidth > 1025 && screenWidth < 1445){
    numbers.length = 8;
  }


  return (
    <>
      <div className={styles.upcomingcontainer}>
        <div className={styles.upcomingGroup}>
          <div className={styles.upcoming}>Upcoming</div>
          <div className={styles.month}>January 2022</div>
          <div className={styles.sliderBtns}>
            <button className={styles.backward} onClick={backward}>
              backward
            </button>
            <button className={styles.forward} onClick={forward}>
              forward
            </button>
          </div>
          <div className={styles.dateSlides}>
            <ul className={styles.dateSlidesUl}>
              {numbers.map((value, i) => {
                return <li key={i}>{value}</li>;
              })}
            </ul>
            <hr className={styles.divider} />
          </div>
          <div className={styles.taskContainer}>
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
                        onClick = {deletebtnShow}
                        id = "1"
                      />
                      <button className={styles.deletebtn}>
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
                        onClick = {deletebtnShow}
                        id = "2"
                      />
                      <button className={styles.deletebtn}>
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
            
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
