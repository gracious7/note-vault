import React, { useState } from "react";
import PdfViewer from "../components/PdfViewer";
import data from "../assets/data/Data";



interface BookProps {
  subject: string;
  semester: number;
  branch: string;
}


const BookSection: React.FC<BookProps> = ({ subject, semester, branch }) => {

  const semesterx:string = `Semester ${semester}`;
  let subjectData;
  console.log(branch);
  
  if (data[branch] && data[branch][`Semester ${semester}`]) {
    subjectData = data[branch][semesterx][subject];
  }

  const [activeTab, setActiveTab] = useState("books");

  const toggleTab = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };


  console.log(subjectData);
  

  

  const [pdfurl, setPdfurl] = useState<string | null>(null);

  const handleUrl = (newUrl: string) => {
    setPdfurl(newUrl);
  };

  const gotoBook = () => {
    setPdfurl(null);
  };

  return (
    <>
      {pdfurl ? (
        <PdfViewer pdfUrl={pdfurl} />
      ) : (
        <div className="w-full">
          <h1 className="flex font-sans justify-center font-medium text-xl mt-4 ">
            {subject}
          </h1>
          <div className="flex justify-center mt-4 mb-4">
            <button
              onClick={() => toggleTab("books")}
              className={`${
                activeTab === "books" ? "bg-blue-500" : "bg-gray-300"
              } hover.bg-blue-700 text-white font-bold py-2 px-4 rounded-l`}
            >
              Books
            </button>
            <button
              onClick={() => toggleTab("notes")}
              className={`${
                activeTab === "notes" ? "bg-blue-500" : "bg-gray-300"
              } hover.bg-blue-700 text-white font-bold py-2 px-4`}
            >
              Topper Notes
            </button>
            <button
              onClick={() => toggleTab("videos")}
              className={`${
                activeTab === "videos" ? "bg-blue-500" : "bg-gray-300"
              } hover.bg-blue-700 text-white font-bold py-2 px-4 rounded-r`}
            >
              Videos
            </button>
          </div>

          <div className="p-4">
            {activeTab === "books" && (
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border rounded-lg shadow">
                    <thead className="bg-gray-800 text-white ">
                      <tr>
                        <th className="py-2 px-4 text-center">Book Names</th>
                        <th className="py-2 px-4 text-center">
                          Contributed By
                        </th>
                        <th className="py-2 px-4 text-center">Upload Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjectData.books.map((item, index) => (
                        <tr key={index} className="text-center">
                          <td className="py-2 px-4 text-center cursor-pointer">
                            <div onClick={() => handleUrl(item.link)}>
                              {item.name}
                            </div>
                          </td>
                          <td className="py-2 px-4 text-center">
                            {item.contributor}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {item.uploadedDate}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    
                  </table>
                </div>
              </div>
            )}

            {activeTab === "notes" && (
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border rounded-lg shadow">
                    <thead className="bg-gray-800 text-white">
                      <tr>
                        <th className="py-2 px-4 text-center">Subject Name</th>
                        <th className="py-2 px-4 text-center">
                          Contributed By
                        </th>
                        <th className="py-2 px-4 text-center">Upload Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subjectData.topper_notes.map((item, index) => (
                        <tr key={index} className="text-center">
                          <td className="py-2 px-4 text-center cursor-pointer">
                            {item.name}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {item.contributor}
                          </td>
                          <td className="py-2 px-4 text-center">
                            {item.uploadedDate}
                          </td>
                        </tr>
                      ))}

                      
                    </tbody>
                   
                  </table>
                </div>
              </div>
            )}

            {activeTab === "videos" && (
              <div>
                <div className="flex justify-center ">
                  <div className="mb-4 w-[50%]">
                    <h3 className="text-2xl font-semibold text-center mb-3 p-4 border-b-2">
                      Channel name
                    </h3>
                    <div>
                      {subjectData.videos.map((item, index) => (
                        <div
                          key={index}
                          className="mb-2 p-4 border-b-2 flex justify-between "
                        >
                          <div>{item.name} </div>
                          <a href={item.link}>
                            <div className="ml-20  hover:border-y-2 shadow-orange-500 duration-75 translate-x-full">
                              Link
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Add more video sections if needed */}
                </div>
              </div>
            )}
          </div>
          <div>
            Branch: {branch} Semester: {semester} Subject: {subject}
          </div>
          
        </div>
      )}
      {pdfurl && (
        <div className=" h-[4rem] z-50">
          <div 
          className="button-bar button prev bg-blue-500 hover:bg-blue-600 w-auto self-center p-3 pr-[8rem] md:pr-20 text-white font-bold outline-none active:shadow-lg transition-all absolute -top-[0.76rem] right-[84px] translate-x-1/2 ripple"
          onClick={gotoBook}
          >
            Previous page
          </div>
        </div>
      )}
    </>
  );
};

export default BookSection;