import { useState } from "react";
import { useLoaderData } from "react-router-dom";

 

const Update = () => {
   const books = useLoaderData();
    
const handleUpdate = id=>{

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
        const remaining = books.filter(books=>books._id !== _id);
        const updated = books.find(bookings=> bookings._id === _id);
        updated.status='confirm';
        const newBook =[updated,...remaining];
        setBooks(newBook);
  
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
            <input type="text"   name='date' defaultValue={books.date}   className="input input-bordered" required />
            </div>
             <button onClick={handleUpdate} className="btn btn-success">UpDate</button>
          </form>
        </div>
    );
};

export default Update;