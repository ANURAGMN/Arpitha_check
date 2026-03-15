import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc,getDoc } from "firebase/firestore";
import { useEffect,useState } from "react";

export default function MemoryView(){

  const {id} = useParams()

  const [memory,setMemory] = useState(null)

  useEffect(()=>{

    const load = async()=>{

      const ref = doc(db,"memories",id)

      const snap = await getDoc(ref)

      setMemory(snap.data())

    }

    load()

  },[id])

  if(!memory) return <div>Loading...</div>

  return(

    <div style={{padding:"40px"}}>

      <h1>{memory.title}</h1>

      <p>{memory.date}</p>

      <p>{memory.note}</p>

    </div>

  )

}