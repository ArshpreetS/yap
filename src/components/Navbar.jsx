import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="max-w-7xl flex justify-between w-full px-6 py-4">
        <div className="title">&lt;Arshpreet/&gt;</div>
        <div className="flex items-center gap-8">
          <div>About</div>
          <div>Skills</div>
          {/* <div>Projects</div> */}
          <div>Contact</div>
        </div>
        <button>
          <FontAwesomeIcon icon={faDownload} /> Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
