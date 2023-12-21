import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import SocialLogin from '../../SocialLogin/SocialLogin';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    // Validate password length
    if (password.length < 6) {
      toast.error('Password is too short. Please enter a valid password.');
      return;
    }

    // Authenticate user
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success('Successfully Logged In');
        // Redirect to the task management dashboard after successful login
        navigate(location?.state ? location.state : '/dashboard');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Invalid email or password. Please try again.');
      });
  };

  return (
    <div className="text-red-500">
      <div
        className="min-h-screen hero"
        style={{
          backgroundImage:
            'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t4.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div>
          <h1 className="my-10 text-4xl font-extrabold text-center text-red-600">
            Login to SCC Technovision Task Manager
          </h1>
          <form onSubmit={handleLogin} className="w-96">
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-white label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="text-red-700 label">
                <Link
                  to="#"
                  className="text-white label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="mt-6 form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <h1 className="my-4 text-center">
            Dont have an account?{' '}
            <Link className="font-bold text-blue-700" to="/register">
              Register
            </Link>
          </h1>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
