import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Bannar from "../../components/Bannar";

 

const Details = () => {
    const  room = useLoaderData();

    return (
      <div>
          <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={room.thumble_img1} className="w-full rounded-lg" />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
            <a href="#slide3" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={room.thumble_img2} className="w-full rounded-lg" />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
            <a href="#slide1" className="btn btn-circle hover:bg-orange-500 mr-5" >❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src= {room.profile_img} className="w-full rounded-lg" />
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-10 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-500" >❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-orange-500">❯</a>
          </div>
        </div>
        </div>
        <div className=" py-10">
            <h1 className="text-3xl font-bold text-center">{room.title}</h1>
            
            <div className="flex  justify-center   text-xl font-bold gap-28  py-10">
            <p className="text-xl w-1/2  text-center">{room.description}</p>
                <div className="w-1/2">
                <h2>Price Per Night: ${room.price_per_night}</h2>
                <h2>Room Size: {room.room_size}</h2>
                <h3>Availability: {room.availability}</h3>
                </div>
              
                
            </div>
            <div className="text-center"><button className="btn btn-success ">Book Now</button></div>

        </div>
      </div>
    );
};

export default Details;