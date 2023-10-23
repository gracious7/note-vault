import React, { useState } from "react";
import Subjects from "./Subjects";

interface BranchProps {
  branch: string;
}

const Semester: React.FC<BranchProps> = ({ branch }) => {
  const [branchAndSem, setBranchAndSem] = useState<number | null>(null);

  const handleBranchAndSem = (semester: number) => {
    setBranchAndSem(semester);
  };

  return (
    <>
      {branchAndSem ? (
        <Subjects branch={branch} semester={branchAndSem} />
        
        
      ) : (
        <main className="dashboard mx-4 md:mx-10">
          <section className="my-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mt-0">{branch}</h1>
            <h1 className="text-lg md:text-xl font-medium mt-4">Choose Your Semester</h1>
          </section>
          <section className="sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 mx-20">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
              <div
                className="bg-white shadow-md rounded-lg p-4 transform transition-transform hover:scale-105 hover:shadow-lg text-center"
                onClick={() => handleBranchAndSem(semester)} // Use an arrow function here
              >
                <h2 className="text-lg">Semester {semester}</h2>
              </div>
            ))}
          </section>
        </main>
      )}
      
    </>
  );
};

export default Semester;
