import { Link } from "react-router-dom";

export default function Navbar() {

  return (

    <div style={{
      height:"60px",
      background:"#1e293b",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between",
      padding:"0 30px",
      color:"white"
    }}>

      <div style={{fontWeight:"bold",fontSize:"18px"}}>
        Memory Lane
      </div>

      <div>

        <Link to="/" style={{color:"white",marginRight:"20px"}}>
          Home
        </Link>

        <Link to="/add" style={{color:"white"}}>
          Add Memory
        </Link>

      </div>

    </div>

  )

}