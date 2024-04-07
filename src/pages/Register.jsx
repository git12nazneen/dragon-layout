import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password')
        console.log(name, photo ,email, password);
     

  
    createUser(email ,password)
    .then(result=>{
        console.log(result.user)
    })
    .catch(error =>{
        // console.error(error)
        console.log(error)
    })
}
    return (
        <div>
        <Nav></Nav>
        <h2 className="text-3xl">This is Register</h2>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content ">

<div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email" name="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="name" name="name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo url</span>
      </label>
      <input type="text" placeholder="photo" name="photo" className="input input-bordered"/>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" placeholder="password" name="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Register</button>
    </div>
  </form>
  <p className="text-center my-4">Already have an account  <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
</div>
</div>
</div>
    </div>
    );
};

export default Register;