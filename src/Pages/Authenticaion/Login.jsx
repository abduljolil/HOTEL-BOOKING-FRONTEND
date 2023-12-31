import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

 
 

const Login = () => {
  const {singIn,googleSingIn}= useContext(AuthContext);
  const location =useLocation();
  const navigate =useNavigate();
  console.log(location);

    const handleSubmit =(e)=>{
        e.preventDefault();
        const form =e.target;
        const email =form.email.value;
        const Password =form.password.value;
 
        singIn(email,Password)
        .then(result=>{
          const loginUser =result.user;
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate (location?.state?location?.state:'/');
          console.log(loginUser);
        })
        .catch((error) =>{
          Swal.fire({
            title: ' error!',
            text: `${error}`,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
          console.log(error)});
    }
    const handleGoogle = ()=>{
      googleSingIn()
      .then(res=>{
        console.log(res.user)
        navigate('/')
      })
      .catch(error=>{
      
        console.error(error)
      })
    }
    return (
        <div className="hero   mb-10 bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className="w-1/2 mr-12">
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center mt-4">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Login" className='btn btn-warning' /> 
        </div>
      </form>
     
     <div className="text-center pb-5 text-xl">
     <button onClick={handleGoogle} className="btn btn-success">Google Singup</button>
       <p>Have an account?  <Link to='/register' className='text-blue-600  text-2xl font-bold'> Sing Up </Link></p>
       </div>
    </div>
  </div>
</div>
    );
};

export default Login;