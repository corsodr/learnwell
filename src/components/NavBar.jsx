import { Link } from 'react-router-dom';
import logo from '../assets/FULL_LOGO_COLOR.png';

function NavBar({ setShowModal }) {
  const userIds = ["187", "188", "189"];
  
  return (
    <nav className="bg-white sticky top-0 z-10">
      <div className="container mx-auto py-4 flex items-center justify-between w-[1200px]">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-10" />
          </Link>
        </div>
        <button
          className="bg-[#47B99B] text-white font-medium rounded px-4 py-2"
          onClick={() => setShowModal(true)}
        >
          Add Video
        </button>
      </div>
    </nav>
  );
}

export default NavBar;