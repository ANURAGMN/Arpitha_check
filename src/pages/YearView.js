import { useParams, Link } from "react-router-dom";
import { useEffect,useState } from "react";
import { db } from "../firebase";
import { collection,getDocs } from "firebase/firestore";

export default function YearView(){

  const {year} = useParams()

  const [memories,setMemories] = useState([])

  useEffect(()=>{

    const load = async()=>{

      const snap = await getDocs(collection(db,"memories"))

      const data = snap.docs.map(d=>({

        id:d.id,
        ...d.data()

      }))

      const filtered = data.filter(m => m.year === Number(year))

      setMemories(filtered)

    }

    load()

  },[year])

  return(

    <div>

      <h1>{year}</h1>

      {memories.map(m=>(

        <div key={m.id}>

          <Link to={"/memory/"+m.id}>
            {m.title}
          </Link>

        </div>

      ))}

    </div>

  )

}