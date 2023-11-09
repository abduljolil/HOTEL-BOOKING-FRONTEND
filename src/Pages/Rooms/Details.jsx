 
import { useState } from "react";
import { useLoaderData,  } from "react-router-dom";
import Swal from "sweetalert2";

 

const Details = () => {

  const [date,setDate]=useState([]);
    const  room = useLoaderData();
    const {title,description,room_size,price_per_night,
      profile_img,thumble_img1,thumble_img2,availability}=room;

    
      const handleBooking = ()=>{
        const object={
          title,description,room_size, price_per_night,
        profile_img,thumble_img1,thumble_img2,availability,date 
        }
        console.log(object);

          fetch("https://assingment-11-three.vercel.app/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if( data.acknowledged){
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
        else{
          Swal.fire({
            title: ' Error!',
            text: 'Do you want to continue',
            icon: 'warning',
            confirmButtonText: 'Error'
          })
          
        }
      });
      }

    return (
      <div>
          <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={thumble_img1} className="w-full rounded-lg" />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
            <a href="#slide3" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={ thumble_img2} className="w-full rounded-lg" />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
            <a href="#slide1" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src= { profile_img} className="w-full rounded-lg" />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-500" >❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div>
        </div>
        <div className=" py-10">
            <h1 className="text-3xl font-bold text-center">{ title}</h1>
            
            <div className="flex  justify-center   text-xl font-medium gap-28  py-10">
            <p className="text-xl w-1/2  text-center">{ description}</p>
                <div className="w-1/2">
                <h2>Price Per Night: $ {price_per_night}</h2>
                <h2>Room Size: {room_size}</h2>
                <h3>Availability: {availability}</h3>
               <p>Date:<input onChange={(e)=>setDate(e.target.value)} type="date" name="date" required /></p>
                </div>
              
                
            </div>
            <div onClick={handleBooking} className="text-center"><button className="btn btn-success ">Book Now</button></div>

        </div>
      </div>
    );
};

export default Details;