import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import MemoryTimeline3D from "../components/MemoryTimeline3D";

export default function Home(){

  const [memories,setMemories] = useState([]);

  useEffect(()=>{

    const load = async()=>{

      const snap = await getDocs(collection(db,"memories"));

      const data = snap.docs.map(d=>({
        id:d.id,
        ...d.data()
      }));

      setMemories(data);

    }

    load();

  },[])

  return(

    <div style={{padding:"40px"}}>

      <h1>3D Memory Timeline</h1>

      <MemoryTimeline3D memories={memories}/>

    </div>

  )

}