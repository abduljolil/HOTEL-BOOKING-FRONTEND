import { useState } from "react";


const Review = () => {
    const [review,setReview]=useState([]);

    const handleReview = id=>{
        console.log(id);
      
          fetch(`https://assingment-11-three.vercel.app/rooms/${id}`,{
            method:'PUT',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify({Review: review})
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
              setReview(newBook);
        
            }
          })
        }
    return (
        <div className="max-h-screen text-center"> 
        <p>Review:<input onChange={(e)=>setReview(e.target.value)} type="text" className="input input-bordered"  name="review"  required /></p>
        <button onClick={handleReview} className="btn btn-success">Review</button>
      </div>
        
    );
};

export default Review;