import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between bg-[#060b20] text-[white] p-6">
      <div className="flex gap-[4rem]">
        <div>
          <img src="" alt="LOGO" />
        </div>
        <div className="flex gap-6">
          <NavLink to="home">Home</NavLink>
          <NavLink to="cars">Cars</NavLink>
          <NavLink to="dealers">Dealers</NavLink>
          <NavLink to="messages">Message</NavLink>
          <NavLink to="history">History</NavLink>
        </div>
      </div>
      <div className="flex gap-4">
        <p>+</p>
        <p>Bell</p>
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Navbar;
