import React, { useEffect, useState } from "react";
import Subjects from "./Subjects";
import { Button } from "@nextui-org/react";

interface BranchProps {
  branch: string;
}

const Semester: React.FC<BranchProps> = ({ branch }) => {
  const [branchAndSem, setBranchAndSem] = useState<number | null>(null);

  const handleBranchAndSem = (semester: number) => {
    setBranchAndSem(semester);

  };

  const gotosem = () => {
    setBranchAndSem(null);
  };

  const goBack = () => {
    setBranchAndSem(null);
  };

  return (
    <div className="">
      {branchAndSem ? (
        <Subjects branch={branch} semester={branchAndSem}/>
      ) : (
        <main className="dashboard full-screen m-12">
          <section className="my-8 text-center">
            <h1 className="text-2xl md:text-4xl font-bold mt-0">{branch}</h1>
            <h1 className="text-lg md:text-xl font-medium mt-4">
              Choose Your Semester
            </h1>
          </section>
          <section className="sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 mx-10">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((semester) => (
              <div
                className="bg-white shadow-md rounded-lg py-4 transform transition-transform hover:scale-[102%] hover:shadow-lg text-center"
                onClick={() => handleBranchAndSem(semester)}
              >
                <h2 className="text-lg">Semester {semester}</h2>
              </div>
            ))}
          </section>
        </main>
      )}
      <div className="">
        {branchAndSem && (
          <div className="base-button btn2">
            <Button
              className="bg-blue-600 w-auto self-center rounded-md p-3 text-white font-bold outline-none active:translate-y-1 active:shadow-lg transition-all"
              onClick={goBack}
            >
              Back to Semester
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Semester;
