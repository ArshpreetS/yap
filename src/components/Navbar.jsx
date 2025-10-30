import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    return (
        <nav id="navbar">
            <div>
             &lt;Arshpreet/&gt;
            </div>
            <button>
               <FontAwesomeIcon icon={faDownload} /> Resume
            </button>
        </nav>
    )
}

export default Navbar