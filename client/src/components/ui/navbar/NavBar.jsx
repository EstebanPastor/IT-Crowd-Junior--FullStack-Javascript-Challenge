import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="max-w-screen- xl:px-28 px-4 absolute top-0 right-0 left-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <Link
          to="/"
          className="flex items-center gap-2 hover:bg-orange-300 hover:rounded-md px-2"
        >
          <FaHome /> Home
        </Link>
        <div className="text-lg text-black sm:flex items-center gap-4 hidden"></div>
      </nav>
    </header>
  );
};

export default NavBar;
