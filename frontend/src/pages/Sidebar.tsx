import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";

import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiLoginCircleLine,
  RiLogoutCircleLine,
} from "react-icons/ri";

import { IoIosPeople } from "react-icons/io";


// Define your sidebar options and their respective components

import { Link, Location, useLocation } from "react-router-dom";

const login:Boolean = true;





const Sidebar = () => {

  const location = useLocation();


  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
    <div className="admin-container">
    
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2 className="font-bold text-xl pl-4 text-[#777]">Note-<span className="text-[#4f92ff]">Vault</span></h2>
        <DivOne location={location} />
        {/* <DivTwo location={location} /> */}
        <DivThree location={location} />
        <DivFour location={location}/>

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
      
      </div>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5 className="font-bold text-xl">Dashboard</h5>
    <ul>
      <Li
        url="/dashboard"
        text="Home"
        Icon={RiDashboardFill}
        location={location}
      />
          <Li
            url="/newcontribution"
            text="Contribute"
            Icon={RiShoppingBag3Fill}
            location={location}
          />
        <Li
          url="/top-contributer"
          text="Top Contributers"
          Icon={IoIosPeople}
          location={location}
        />
      <Li
        url="/aboutus"
        text="About us"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/contactus"
        text="Contact Us"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
 
);



const DivThree = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/app/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
      />

      <Li
        url="/app/toss"
        text="Study Music"
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>
  
);


const DivFour = ({ location }: { location: Location }) => (
  <div>
    <ul>
    {login == false ?
      <Li
    url="/dashboard"
    text="Logout"
    Icon={RiLogoutCircleLine}
    location={location}
  />
  :
    <Li 
        url="/login"
        text="Login"
        Icon={RiLoginCircleLine}
        location={location}
      />
    }
      
        
    </ul>
  </div>
);


interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
  
);

export default Sidebar;
