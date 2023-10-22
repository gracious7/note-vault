const AboutUS = () => {
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
    <main className="dashboard mx-4 md:mx-10 self-center">
      <a href="/semester">
        <button className="absolute bottom-4 right-[4%] bg-[#3474ec] hover:bg-[#2559bb] text-white font-bold py-2 px-4 rounded-lg ">
          Back
        </button>
      </a>

      <h2 className="text-2xl md:text-3xl font-bold text-center mt-8 mb-4">
        Choose your Subject
      </h2>
      <a href="/booksection">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-12 mb-6 mt-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white text-center border rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition duration-300"
            >
              {subject}
            </div>
          ))}
        </div>
      </a>
    </main>
  );
};

export default AboutUS;
