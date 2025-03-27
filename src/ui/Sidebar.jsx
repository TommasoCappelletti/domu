import { Link } from "react-router-dom";
import Notification from "./Notification";
import Button from "./Button";
import { useState } from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const post = useSelector((state) => state.post);

  return (
    <div
      className={` bg-cyan-600 border rounded-xl p-4 space-y-7 overflow-x-hidden hidden md:flex flex-col transition-all ease-in-out  ${toggleSidebar ? " w-20  items-center delay-50 duration-500" : "duration-100 w-60"}`}
    >
      <div>
        <Button onClick={() => setToggleSidebar(!toggleSidebar)}>
          <i className="fa-solid fa-bars"></i>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center space-y-3">
        <div
          className={`bg-cyan-500 border rounded-full transition-all ease-in-out  ${toggleSidebar ? " h-10 w-10" : "delay-300 h-28 w-28"}`}
        ></div>
        <p
          className={`transition-all text-center   ease-in-out ${toggleSidebar ? "opacity-0 text-[0rem]" : " opacity-100 delay-300"}`}
        >
          Condominio Andromeda
        </p>
      </div>
      <ul className="space-y-4">
        <li className="flex items-center space-x-1">
          <Link to="/comunicazioni">
            <div className={toggleSidebar ? "" : "space-x-2"}>
              <span>📢</span>
              <span
                className={`transition-all  ease-in-out ${toggleSidebar ? "opacity-0 text-[0rem]" : "opacity-100 delay-250"}`}
              >
                Comunicazioni
              </span>
            </div>
          </Link>
        </li>
        <li className="flex items-center space-x-1">
          <Link to="/bacheca">
            <div className={toggleSidebar ? "" : "space-x-2"}>
              <span>📒</span>
              <span
                className={`transition-all  ease-in-out  ${toggleSidebar ? " opacity-0 text-[0rem]" : "opacity-100 delay-250"}`}
              >
                Bacheca
              </span>
            </div>
          </Link>
          <Notification item={post} />
        </li>
        {/* <li>
          <Link to="/calendario">🗓️ Calendario</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar;
