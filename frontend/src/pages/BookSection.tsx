import React, { useState } from "react";


const BookSection = () => {
   

   
   const [activeTab, setActiveTab] = useState("books");

  const toggleTab = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <div className="w-full">
      <a href="/admin/subjects">
      <button  className="absolute bottom-4 right-[4%] bg-[#3474ec] hover:bg-[#2559bb] text-white font-bold py-2 px-4 rounded-lg ">Back</button>
      </a>
      <div className="flex justify-center mt-8 mb-4">
        <button
          onClick={() => toggleTab("books")}
          className={`${
            activeTab === "books" ? "bg-blue-500" : "bg-gray-300"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l`}
        >
          Books
        </button>
        <button
          onClick={() => toggleTab("notes")}
          className={`${
            activeTab === "notes" ? "bg-blue-500" : "bg-gray-300"
          } hover:bg-blue-700 text-white font-bold py-2 px-4`}
        >
          Topper Notes
        </button>
        <button
          onClick={() => toggleTab("videos")}
          className={`${
            activeTab === "videos" ? "bg-blue-500" : "bg-gray-300"
          } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r`}
        >
          Videos
        </button>
      </div>

      <div className="p-4">
        {activeTab === "books" && (
          <div>
            {/* <h2 className="text-2xl font-bold mt-2 text-center">Books Section</h2> */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg shadow">
                <thead className="bg-gray-800 text-white ">
                  <tr>
                    <th className="py-2 px-4 text-center ">Book Names</th>
                    <th className="py-2 px-4 text-center">Contributed By</th>
                    <th className="py-2 px-4 text-center">Upload Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                     <a href="/admin/pdfview">
                    <td  className="py-2 px-4 text-center">B. P. Lathi, Zhi Ding Modern Digital and Analog Communication System.pdf</td>
                    </a>
                    <td className="py-2 px-4 text-center">Sahyog-The Mentorship Club</td>
                    <td className="py-2 px-4 text-center">2023-10-15</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className="text-center">
                     <a href="#">
                    <td className="py-2 px-4 text-center">EE320A-Principles-Of-Communication-CommunicationSystems.pdf</td>
                    </a>
                    <td className="py-2 px-4 text-center">Sahyog-The Mentorship Club</td>
                    <td className="py-2 px-4 text-center">2023-10-15</td>

                  </tr>
                </tbody>
                <tbody>
                  <tr className="text-center">
                     <a href="#">
                    <td className="py-2 px-4 text-center">Ctheory_and_design_of_digital_communication_systems.pdf</td>
                     </a>
                    <td className="py-2 px-4 text-center">Sahyog-The Mentorship Club</td>
                    <td className="py-2 px-4 text-center">2023-10-15</td>
                  </tr>
                  {/* Add more rows for books */}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "notes" && (
          <div>
            {/* <h2 className="text-2xl font-bold mt-2 text-center">Topper Notes Section</h2> */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg shadow">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-2 px-4 text-center">Subject Name</th>
                    <th className="py-2 px-4 text-center">Contributed By</th>
                    <th className="py-2 px-4 text-center">Upload Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 text-center">Mathematics</td>
                    <td className="py-2 px-4 text-center">Contributor 1</td>
                    <td className="py-2 px-4 text-center">2023-10-16</td>
                  </tr>
                  {/* Add more rows for topper notes */}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            {/* <h2 className="text-2xl font-bold mt-2 text-center">Video References Section</h2> */}
            <div className="flex justify-center gap-[25%]">
                <div className="mb-4">
                <h3 className="text-2xl font-semibold text-center mb-3 p-4 border-b-2">Channel name</h3>
                <div>
                    <div className="mb-2 p-4 border-b-2">CodeHelp by babbar</div>
                    <div className="mb-2 p-4 border-b-2">Gate Smasher</div>
                    <div className="mb-2 p-4 border-b-2">Knowledge Gate</div>
                    <div className="mb-2 p-4 border-b-2">Nesso Academy</div>
                    <div className="mb-2 p-4 border-b-2">Gate Wallah</div>
                    <div className="mb-2 p-4 border-b-2">Easy Engineering</div>
                </div>
                </div>
                <div>
                <h3 className="text-2xl font-semibold text-center mb-3 p-4 border-b-2">Playlist</h3>
                <div>
                    <div className="mb-2 p-4 border-b-2"><a href="https://www.youtube.com/watch?v=_TpOHMCODXo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG">link</a></div>
                    <div className="mb-2 p-4 border-b-2"><a href="https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p">link</a></div>
                    <div className="mb-2 p-4 border-b-2"><a href="https://www.youtube.com/watch?v=xw_OuOhjauw&list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD">link</a></div>
                    <div className="mb-2 p-4 border-b-2"><a href="https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O">link</a></div>
                    <div className="mb-2 p-4 border-b-2"><a href="https://www.youtube.com/watch?v=a3YDvmKbGrA&list=PL3eEXnCBViH-SiXK96TZd-7k3Qvk5g1YH">link</a></div>
                    <div className="mb-2 p-4 border-b-2"><a href="https://www.youtube.com/watch?v=QhRPNO2f0g0&list=PLV8vIYTIdSnZ67NQObdXE0gFjrzPrNKHp">link</a></div>
                </div>
                </div>
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default BookSection;
