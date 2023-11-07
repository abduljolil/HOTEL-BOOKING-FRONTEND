import { Link } from "react-router-dom";

 

const Room = ({room}) => { 
    return (
        <div>
            <Link to={`/rooms/${room._id}`}>
            <div className="card   bg-base-100 shadow-xl">
            <figure><img className="w-full" src={room.profile_img}alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{room.title}</h2>
            <p>Price Per Night:${room.price_per_night}</p>
            </div>
            </div>
            </Link>
 
        </div>
    );
};

export default Room;