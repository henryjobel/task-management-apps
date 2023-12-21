import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-800">
      <ul className="flex space-x-4 text-white">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;