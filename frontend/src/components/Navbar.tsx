import React, { useState, useEffect } from "react";
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

const sidebarOptions = [
  { name: "Dashboard", icon: <RiDashboardFill />, path: "/dashboard" },
  {
    name: "Top Contributor",
    icon: <RiShoppingBag3Fill />,
    path: "/topContributer",
  },
  { name: "Stopwatch", icon: <FaStopwatch />, path: "/stopwatch" },
  { name: "Toss", icon: <FaGamepad />, path: "/toss" },
  { name: "About Us", icon: <AiFillFileText />, path: "/aboutUs" },
  { name: "Contact Us", icon: <IoIosPeople />, path: "/contactUs" },
  { name: "Login", icon: <RiLoginCircleLine />, path: "/login" },
];

const MainPage: React.FC = () => {
  const location = useLocation();
  const [selectedPath, setSelectedPath] = useState<string>(location.pathname);
  const firstVisit: string | null = localStorage.getItem("firstVisitor");
  const [welcome, setWelcome] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (!firstVisit) {
      setWelcome("welcome");
    }
  }, []);

  const handleWelcome = () => {
    setWelcome(null);
    localStorage.setItem("firstVisitor", "1");
  };

  const handleSidebarClick = (path: string) => {
    setSelectedPath(path);
    setShowSidebar(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`w-64 fixed top-0 left-0 h-screen bg-blue-600 text-white p-4 space-y-6 transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center text-xl cursor-pointer">
          <HiMenuAlt4
            className="cursor-pointer mr-3"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        {sidebarOptions.map((option) => (
          <div
            key={option.path}
            title={option.path.toUpperCase().replace("/", "")}
            className={`p-3 rounded-md cursor-pointer ${
              option.path === selectedPath
                ? "bg-white text-[#4a4949] rounded-l-full"
                : ""
            } text-lg`}
            onClick={() => handleSidebarClick(option.path)}
          >
            <div className="flex gap-2 items-center font-medium">
              <div>{option.icon}</div>
              <div>
                {option.path === "/dashboard"
                  ? "Dashboard"
                  : option.path === "/topContributer"
                  ? "Top Contributor"
                  : option.path === "/stopwatch"
                  ? "Stopwatch"
                  : option.path === "/aboutUs"
                  ? "About Us"
                  : option.path === "/contactUs"
                  ? "Contact Us"
                  : option.path === "/login"
                  ? "Login"
                  : option.path === "/toss"
                  ? "Music"
                  : ""}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-grow p-4 bg-gray-100 ml-0">
        <div className="md:hidden">
          <HiMenuAlt4
            className="text-3xl cursor-pointer"
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
        {welcome ? (
          <div className="px-12rem w-[1fr] h-[100vh]  flex justify-center flex-col items-center bg-[Black] gap-6">
            <div className="text-white text-6xl md:text-8xl text-center font-bold">
              Welcome to{" "}
              <span className="text-[#888]">Note-</span>
              <span className="text-[#4f92ff]">Vault</span>
            </div>
            <Button
              className="bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white"
              onClick={handleWelcome}
            >
              Get started
            </Button>
          </div>
        ) : (
          getComponent(selectedPath)
        )}
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
      return <Dashboard />;
  }
}

export default MainPage;
