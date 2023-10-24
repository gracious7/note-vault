import  { useState } from "react";

import { BsSearch } from "react-icons/bs";
import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.jpg";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpeg";
import b5 from "../assets/images/b5.jpg";
import b6 from "../assets/images/b6.jpg";
import b7 from "../assets/images/b7.png";
import b8 from "../assets/images/b8.webp";
import b9 from "../assets/images/b9.jpg";
import b10 from "../assets/images/b10.jpg";
import b11 from "../assets/images/b11.jpg";
import b12 from "../assets/images/b12.jpg";
import Semester from "../components/Semester";
import { Button } from "@nextui-org/react";

const 
Dashboard = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  const openSemester = (branch: string) => {
    setSelectedBranch(branch);
  };
  
  const closeSemester = () => {
    setSelectedBranch(null);
  };

  return (
    
    <>
    <main className="dashboard bg-[#f5f5f5]">
      {
        selectedBranch ? (
            <>
            <Semester branch={selectedBranch} />
            {
              selectedBranch && 
              <div className="base-button btn1">
                <Button 
                className="bg-blue-600  w-auto  rounded-md p-3 text-white font-bold outline-none active:translate-y-1 active:shadow-lg transition-all"
                onClick={closeSemester}
                >
                  Back to Home 
                </Button>

              </div>

            }
            </>
          ) : (
            <>
             <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for books" />
          
        </div>
        <h1 className="text-center font-bold text-3xl mt-8" >Select your Branch</h1><br/>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center text-center ">
          
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Bio-Medical Engineering")}>

              <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b2} /></div>
              <h2 className="">Bio-Medical</h2>
            </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Bio-Technology")}>

            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b1} /></div>
            <h2 className="">Bio-Technology</h2>
            
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Chemical Engineering")}>
          
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b4} /></div>
            <h2 className="">Chemical</h2>
            
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Computer Science")}>
      
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b5} /></div>
            <h2 className="">Computer Science</h2>
              </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Electronics & Communication Engineering")}>
  
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b6} /></div>
            <h2 className="">Electronics & Communication</h2>
            
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Electrical Engineering")}>

            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b7} /></div>
            <h2 className="">Electrical</h2>
            
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Information Technology")}>

            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b8} /></div>
            <h2 className="">Information Technology</h2>
          </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Mechanical Engineering")}>
    
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b9} /></div>
            <h2 className="">Mechanical</h2>
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Metallurgy & Material Engineering")}>
        
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b10} /></div>
            <h2 className="">Metallurgy & Material</h2>
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Mining")}>
 
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b11} /></div>
            <h2 className="">Mining</h2>
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("Civil Engineering")}>
   
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b3} /></div>
            <h2 className="">Civil</h2>
             </div>
          <div className="flex flex-col items-center font-medium text-[1rem] p-3 m-4 bg-white rounded-lg shadow-lg"
          onClick={() => openSemester("B.Arch")}>
        
            <div className="overflow-hidden"><img className="mb-3 cursor-pointer transition-all hover:scale-[105%]" alt="branches" src={b12} /></div>
            <h2 className="">B.Arch</h2>
             </div>
          
          
        </div>

            </>

)

          }
          
      </main>

      </>
  );
};

export default Dashboard;



