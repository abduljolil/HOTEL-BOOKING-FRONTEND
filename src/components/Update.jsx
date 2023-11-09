import { useState } from "react";
import { useLoaderData } from "react-router-dom";
const Update = () => {
   const booking = useLoaderData();
   const [update,setUpdate]=useState([]);
   console.log(booking);
    
const handleUpdate = id=>{
  console.log(id);

    fetch(`https://assingment-11-three.vercel.app/booking/${id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount > 0){
        Swal.fire({
          title: 'Update Success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        const remaining = booking.filter(books=>books._id !== id);
        const updated = booking.find(bookings=> bookings._id === id);
        updated.status='confirm';
        const newBook =[updated,...remaining];
        setUpdate(newBook);
  
      }
    })
  }
    return (
        <div>
              
          <form>
          <div className="form-control">
            <label className="label">
            <span className="label-text">Email</span>
            </label>
            <input type="text"   name='date' defaultValue={booking.date}   className="input input-bordered" required />
            </div>
             <button onClick={handleUpdate} className="btn btn-success">UpDate</button>
          </form>
        </div>
    );
};

export default Update;