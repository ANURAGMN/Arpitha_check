import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuid } from "uuid";

export default function AddMemory(){

  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");
  const [note,setNote] = useState("");
  const [image,setImage] = useState(null);

  const saveMemory = async()=>{

    let imageUrl = "";

    if(image){

      const imageRef = ref(storage,"memories/"+uuid());

      await uploadBytes(imageRef,image);

      imageUrl = await getDownloadURL(imageRef);

    }

    const year = new Date(date).getFullYear();
    const month = new Date(date).toLocaleString('default',{month:'long'});

    await addDoc(collection(db,"memories"),{

      title,
      date,
      year,
      month,
      note,
      image:imageUrl

    });

    alert("Memory saved!");

  }

  return(

    <div className="page">

      <div className="card">

        <div className="title">Add Memory</div>

        <input
          className="input"
          placeholder="Memory title"
          onChange={e=>setTitle(e.target.value)}
        />

        <input
          className="input"
          type="date"
          onChange={e=>setDate(e.target.value)}
        />

        <input
          className="input"
          type="file"
          onChange={e=>setImage(e.target.files[0])}
        />

        <textarea
          className="textarea"
          placeholder="Write about this memory..."
          onChange={e=>setNote(e.target.value)}
        />

        <button
          className="button"
          onClick={saveMemory}
        >
          Save Memory
        </button>

      </div>

    </div>

  )

}