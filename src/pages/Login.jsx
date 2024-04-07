import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setAuth, user } = useAuthContext();
  function handleLogin(data) {
    if (data.email === user.email && data.password === user.password) {
      navigate("/homepage");
      setAuth(true);
    } else {
      alert("Wrong username or passwrod");
    }
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-slate-200">
              HabitTrackr helps you build new routines.
            </h1>
            <p className="py-6  text-slate-500">
              Log, categorize, and track your daily habits effortlessly.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(handleLogin)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <label className="label">
                  <Link to="/signup" className="label-text-alt link link-hover">
                    Dont have an account? Sign Up
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
