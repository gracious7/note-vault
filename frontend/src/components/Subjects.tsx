import { useState } from "react";
import BookSection from "../pages/BookSection";
import { Button } from "@nextui-org/react";

interface SubAndBranch{
  semester: number;
  branch: string;
}

// interface Book{
//   book:string;
// }


const Subjects: React.FC<SubAndBranch> = ({ semester, branch }) => {
  const subjects = [
    "Digital Communication",
    "Operating System",
    "Microprocessor & Microcontroller",
    "Digital Image Processing",
    "Pattern recognition",
    "Control System Engineering",
    "Data Science",
  ];
  const [subject, setSubject] = useState<string|null>(null)
  
  const handleBook =(newSub: string)=>{
    setSubject(newSub)
  }

  const gotoSub = ()=>{
    setSubject(null);
  }

  return (
    <>
      {
        subject?(<BookSection subject={subject} semester={semester} branch={branch}/>):(
          <main className="dashboard full-screen m-12">
            <a href="/semester">
              <button className="absolute bottom-4 right-[4%] bg-[#3474ec] hover:bg-[#2559bb] text-white font-bold py-2 px-4 rounded-lg ">
                Back
              </button>
            </a>
            <h2 className="text-2xl md:text-4xl font-bold text-center mt-4 ">{branch}</h2>
            <h2 className="text-lg md:text-2xl font-bold text-center m-2  ">Semester: {semester}</h2>
            <h2 className="text-md md:text-xl font-medium text-center mb-4">
              Choose your Subject
            </h2>
              <div className="sm:text-sm grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 mx-10">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-lg py-4 transform transition-transform hover:scale-[102%] hover:shadow-lg text-center"
                    onClick={()=>(handleBook(subject))}
                  >
                    <h2 className="text-lg">{subject}</h2>
                  </div>
                ))}
              </div>
          </main>
        )
      }
      {subject && (
        <div className="base-button btn2">
          <Button
            className="bg-blue-600 w-auto self-center rounded-md p-3 text-white font-bold outline-none active:translate-y-1 active:shadow-lg transition-all"
            onClick={gotoSub}
          >
             Back to Subject
          </Button>
        </div>
      )}
    </>
  );
};

export default Subjects;
