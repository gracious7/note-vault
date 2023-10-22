interface SubAndBranch{
  semester: number;
  branch: string;
}


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

  return (
    <main className="dashboard mx-4 md:mx-10">
      <a href="/semester">
        <button className="absolute bottom-4 right-[4%] bg-[#3474ec] hover:bg-[#2559bb] text-white font-bold py-2 px-4 rounded-lg ">
          Back
        </button>
      </a>
      <h2 className="text-2xl md:text-4xl font-bold text-center mt-4 ">{branch}</h2>
      <h2 className="text-lg md:text-2xl font-bold text-center m-2">Semester: {semester}</h2>
      <h2 className="text-md md:text-xl font-medium text-center mb-4">
        Choose your Subject
      </h2>
      <a href="/booksection">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-12 mb-6 mt-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white text-center text-base border rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition duration-300"
            >
              {subject}
            </div>
          ))}
        </div>
      </a>
    </main>
  );
};

export default Subjects;
