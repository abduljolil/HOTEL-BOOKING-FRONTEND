import { Link } from "react-router-dom";

 

const BookingNow = ({ handleDelete, book}) => {
    console.log(book);
    return (
        <tr>
        
        <td>
            <div className="avatar">
              <div className=" rounded-full w-24 h-24">
                <img src= {book.profile_img }alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
        {book.title}
        </td>
        <td>{book.date}</td>
        <td>${book.price_per_night
        }</td>
        <th>
         <button className="btn btn-success">reviwe</button>
        </th>
        <th>
         <button onClick={()=> handleDelete(book._id)}  className="btn btn-success">delete</button>
        </th>
        <th>
         <Link to={`/update/${ book._id}`}><button className="btn btn-success">updated</button></Link>
        </th>
      </tr>

    );
};

export default BookingNow;