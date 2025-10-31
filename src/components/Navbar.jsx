import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const fileId = "1p_dC-ctpDyJAhGyqrXfEGFgsluP9gLmt";
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  function downloadResume() {
    console.log("Downloading resume from:", downloadUrl);
    fetch(downloadUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "resume.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => console.error("Download failed:", err));
  }
  return (
    <nav id="navbar">
      <div className="max-w-7xl flex justify-between w-full px-6 py-4">
        <div className="title">&lt;Arshpreet/&gt;</div>
        <div className="flex items-center gap-8">
          <div className="nav-link">
            <a href="#about" className="relative">
              About
            </a>
          </div>
          <div className="nav-link">
            <a href="#skills" className="relative">
              Skills
            </a>
          </div>
          {/* <div>Projects</div> */}
          <div className="nav-link">
            <a href="#contact" className="relative">
              Contact
            </a>
          </div>
        </div>
        <a
          href={downloadUrl}
          className="resume hover:scale-110 hover:bg-slate-400"
        >
          <FontAwesomeIcon icon={faDownload} /> Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
