import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

 

const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const navigate =useNavigate();
   
      const handleSignUp =(e)=>{
          e.preventDefault();
          const form = e.target;
          const name =form.name.value;
          const email =form.email.value;
          const password =form.password.value;
          console.log(name,email,password );
          createUser(email,password)
          .then(res=>{
            const user = res.user;
            console.log(user);
            Swal.fire({
              title: 'Success!',
              text: 'Do you want to continue',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
             navigate('/');
          })
          .catch(error =>console.log(error));
        
        }
      return (
          <div className="hero h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row ">
            <div className="w-1/2 mr-12">
               
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-4">Registration !</h1>
              <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text"  name='name' placeholder="name" className="input input-bordered" required />
                </div>
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
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Registration " className='btn btn-warning' />
                </div>
              </form>
             <div className="text-center pb-5 text-xl"> <p>Already have an account?  <Link to='/login' className='text-blue-600  text-2xl font-bold'> Login</Link></p></div>
            </div>
          </div>
        </div>
      );
  };
  

export default Registration;