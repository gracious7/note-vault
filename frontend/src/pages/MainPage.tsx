import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiLoginCircleLine,
} from "react-icons/ri";
import { FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import Dashboard from "../pages/Dashboard";
import TopContributer from "../pages/TopContributer";
import Stopwatch from "../pages/apps/Stopwatch";
import Toss from "../pages/apps/Toss";
import AboutUS from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import { Button } from "@nextui-org/react";

// Define your sidebar options and their respective components
const sidebarOptions = [
  { name: "Dashboard", icon: <RiDashboardFill />, path: "/dashboard" },
  { name: "Top Contributor", icon: <RiShoppingBag3Fill />, path: "/topContributer" },
  { name: "Stopwatch", icon: <FaStopwatch />, path: "/stopwatch" },
  { name: "Toss", icon: <FaGamepad />, path: "/toss" },
  { name: "About Us", icon: <AiFillFileText />, path: "/aboutUs" },
  { name: "Contact Us", icon: <IoIosPeople />, path: "/contactUs" },
  { name: "Login", icon: <RiLoginCircleLine />, path: "/login" },
];

const MainPage: React.FC = () => {
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState<string>(location.pathname);

  const handleSidebarClick = (path: string) => {
    setSelectedPath(path);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-16 bg-blue-600 text-white p-4 space-y-6">
        <HiMenuAlt4 className="cursor-pointer" />
        {sidebarOptions.map((option) => (
          
            <div
              className={`p-3 rounded-md cursor-pointer ${
                option.path === selectedPath ? "bg-gray-500" : ""
              }`}
              onClick={() => handleSidebarClick(option.path)}
            >
              {option.icon}
            </div>
          
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-grow p-4 bg-gray-100">
        {getComponent(selectedPath)}
      </div>
    </div>
  );
};

function getComponent(path: string) {
  switch (path) {
    case "/dashboard":
      return <Dashboard />;
    case "/topContributer":
      return <TopContributer />;
    case "/stopwatch":
      return <Stopwatch />;
    case "/toss":
      return <Toss />;
    case "/aboutUs":
      return <AboutUS />;
    case "/contactUs":
      return <ContactUs />;
    case "/login":
      return <Login />;
    default:
      return (
         <Link to="/dashboard" className="items-center justify-end ">
         {/* <button>Visit Dashboard</button> */}
           <div className="px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6">
             <div className="text-white text-6xl md:text-8xl text-center text-bold">Welcome to <span className="text-[#888]">Note-</span><span className="text-[#4f92ff]">Vault</span></div>
             <Button className="bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white">Get started</Button>
           </div>
       </Link>
      )
  }
}

export default MainPage;
