import React, { useState, useEffect } from "react";
// import {  useLocation } from "react-router-dom";
// import { HiMenuAlt4 } from "react-icons/hi";
import {
  RiDashboardFill,
  // RiShoppingBag3Fill,
  RiLoginCircleLine,
} from "react-icons/ri";
import { FaGamepad, FaStopwatch } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { ImUpload2 } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import Dashboard from "../pages/Dashboard";
import TopContributer from "../pages/TopContributer";
import Stopwatch from "../pages/apps/Stopwatch";
import Toss from "../pages/apps/Toss";
import AboutUS from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import { Button } from "@nextui-org/react";
import Logo from "../assets/images/logo.png";
import NewContribution from "./NewContribution";
import ProfileCard from "../ProfileCard";

// Define your sidebar options and their respective components
const sidebarOptions = [
  { name: "Dashboard", icon: <RiDashboardFill />, path: "/dashboard" },
  {
    name: "Top Contributor",
    icon: <BsPeopleFill />,
    path: "/topContributer",
  },
  { name: "NewContribution", icon: <ImUpload2 />, path: "/newcontribution" },
  { name: "Stopwatch", icon: <FaStopwatch />, path: "/stopwatch" },
  { name: "Toss", icon: <FaGamepad />, path: "/toss" },
  { name: "About Us", icon: <AiFillFileText />, path: "/aboutUs" },
  { name: "Contact Us", icon: <IoIosPeople />, path: "/contactUs" },
  { name: "Our Team", icon: <AiOutlineTeam />, path: "/profilecards" },
  { name: "Login", icon: <RiLoginCircleLine />, path: "/login" },
];

const MainPage: React.FC = () => {
  //   const location = useLocation();
  const [selectedPath, setSelectedPath] = useState<string>("/dashboard");
  const firstVisit: string | null = localStorage.getItem("firstVisitor");
  const [welcome, setWelcome] = useState<string | null>(null);
  +useEffect(() => {
    if (!firstVisit) {
      setWelcome("welcome");
    }
  }, []);
  const handlewelcome = () => {
    setWelcome(null);
    localStorage.setItem("firstVisitor", "1");
  };

  const handleSidebarClick = (path: string) => {
    setSelectedPath(path);
  };

  return (
    <>
      {welcome ? (
        <div className="px-12rem h-[100vh] w-[1fr] flex justify-center flex-col items-center bg-[Black] gap-6">
          <div className="text-white text-6xl md:text-8xl text-center text-bold">
            Welcome to <span className="text-[#888]">Note-</span>
            <span className="text-[#4f92ff]">Vault</span>
          </div>
          <Button
            className="bg-[#003cff] px-4 py-3 rounded-lg text-lg hover:bg-[#0000ff] hover:transition-all text-white"
            onClick={handlewelcome}
          >
            Get started
          </Button>
        </div>
      ) : (
        <div className="flex h-screen ">
          <div className="w-[20rem] overflow-hidden bg-[white] text-[#4a4949] py-4 pl-8 pr-0 space-y-6 flex flex-col items-start fixed top-0 bottom-0">
            <div className="flex items-center text-xl cursor-pointer">
              <div>
                <img
                  src={Logo}
                  alt="logo"
                  className="rounded-lg cursor-pointer"
                  width="100%"
                />
              </div>
              {/* <HiMenuAlt4 className="cursor-pointer mr-3" /> */}
            </div>

            {sidebarOptions.map((option) => (
              <div
                title={`${option.path.toUpperCase().replace("/", "")}`}
                className={`p-3 rounded-md cursor-pointer
                
                ${`${
                  option.path === selectedPath
                    ? "bg-[#4f92ff] text-[#ffffff] rounded-l-full w-full"
                    : ""
                } md:text-base lg:text-md`}
                md:text-base`} style={{marginTop:10, }}
                onClick={() => handleSidebarClick(option.path)}
              >
                {" "}
                <div className="flex ml-6 gap-[1rem] items-center h-fit">
                  <div>{option.icon}</div>
                  <div>
                    {option.path === "/dashboard" ? (
                      <>
                        <div
                          className={``}
                          onClick={() => window.location.reload()}
                        >
                          Dashboard
                        </div>
                      </>
                    ) : option.path === "/topContributer" ? (
                      <>Top Contributer</>
                    ) : option.path === "/newcontribution" ? (
                      <>Contribute</>
                    ) : option.path === "/stopwatch" ? (
                      <>Stopwatch</>
                    ) : option.path === "/toss" ? (
                      <>Music</>
                    ) : option.path === "/aboutUs" ? (
                      <>About Us</>
                    ) : option.path === "/contactUs" ? (
                      <>Contact Us</>
                    ) : option.path === "/profilecards" ? (
                      <>Our Team</>
                    ) : option.path === "/login" ? (
                      <>Login</>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-grow bg-gray-100 lg:ml-[20rem]">
            {getComponent(selectedPath)}
          </div>
        </div>
      )}
    </>
  );
};

function getComponent(path: string) {
  switch (path) {
    case "/dashboard":
      return <Dashboard />;
    case "/topContributer":
      return <TopContributer />;
    case "/newcontribution":
      return <NewContribution />;
    case "/stopwatch":
      return <Stopwatch />;
    case "/toss":
      return <Toss />;
    case "/aboutUs":
      return <AboutUS />;
    case "/contactUs":
      return <ContactUs />;
    case "/profilecards":
      return <ProfileCard/>;
    case "/login":
      return <Login />;
    default:
      return <Dashboard />;
  }
}

export default MainPage;
