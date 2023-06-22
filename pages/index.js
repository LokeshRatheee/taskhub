import LandingPage from "./landingPage"
import Daily  from "./daily/daily.jsx"
import {useSession ,getSession} from "next-auth/react";
import {React ,useEffect ,useState} from "react"
import {useRouter} from "next/router"




export default function Home() {

  const [ loading , setloading] = useState(true);
  const [page, setpage] = useState("");

  useEffect(() => {
    const selectPage = async() => {
      const session = await getSession();
      if(!session){
        setpage("landing");
        setloading(false);
      }
      else{
        setpage("daily");
        setloading(false);
      }

    }
    selectPage();
  },[])

  const {data:session} = useSession();
  console.log(session);
  const router = useRouter();

  // useEffect(() => {
  //   if(session) {
  //     router.push('/app/daily/daily');
  //   }
  //   else{
  //     router.push("/app/landingPage");
  //   }
  // },[session,router])


  return (
    <>
    {page === "landing" ? <LandingPage /> : page === "daily" ? <Daily /> : console.log("sds")}
    </>
  )
}
