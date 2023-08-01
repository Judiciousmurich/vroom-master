import { NavLink } from "react-router-dom";
import { BiSolidHomeCircle } from "react-icons/bi";
import { FaCar, FaHistory, FaPlus, FaUserClock } from "react-icons/fa";
import { LuMessagesSquare} from "react-icons/lu";
import { PiBellSimpleZ} from "react-icons/pi";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between bg-[#060b20] text-[white] p-6">
      <div className="flex gap-[4rem]">
        <div>
          <img src="" alt="VROOM" />
        </div>
        <div className="flex gap-6">
          <NavLink className="flex items-center gap-2" to="home"><BiSolidHomeCircle/>Home</NavLink>
          <NavLink  className="flex items-center gap-2" to="cars"><FaCar/>Cars</NavLink>
          <NavLink  className="flex items-center gap-2" to="dealers"><FaUserClock/>Dealers</NavLink>
          <NavLink  className="flex items-center gap-2" to="messages"><LuMessagesSquare/>Message</NavLink>
          <NavLink  className="flex items-center gap-2" to="history"><FaHistory/>History</NavLink>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <p className="bg-[#3d903b] text-white rounded-full p-3"><FaPlus/></p>
        <p><PiBellSimpleZ/></p>
        <p>Profile</p>
      </div>
    </div>
  );
};

export default Navbar;
