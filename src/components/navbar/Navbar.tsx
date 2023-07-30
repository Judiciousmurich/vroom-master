import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <img src="" alt="LOGO" />
        </div>
        <div>
          <NavLink to="">Home</NavLink>
          <NavLink to="">Cars</NavLink>
          <NavLink to="">Dealers</NavLink>
          <NavLink to="">Message</NavLink>
          <NavLink to="">History</NavLink>
        </div>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default Navbar;
