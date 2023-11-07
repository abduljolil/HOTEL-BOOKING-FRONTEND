 
import { useEffect, useState } from "react";
import Room from "./Room";

 

const Rooms = () => {
    const [rooms,setRooms]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {
                rooms.map(room=><Room  key={room.img} room={room} 
                    ></Room>)
            }
        </div>
    );
};

export default Rooms;