import React, { useState } from "react";
import PdfViewer from "../components/PdfViewer";

interface BookProps {
  subject: string;
  semester: number;
  branch: string;
}

interface ContentItem {
  name: string;
  contributor: string;
  uploadDate: string;
}

interface VideoItem {
  name: string;
  link: string;
}

const BookSection: React.FC<BookProps> = ({ subject, semester, branch }) => {
  const [activeTab, setActiveTab] = useState("books");

  const toggleTab = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  // Define an array of JSON data for books, notes, and videos
  const contentData: Record<string, (ContentItem | VideoItem)[]> = {
    books: [
      {
        name: "B. P. Lathi, Zhi Ding Modern Digital and Analog Communication System.pdf",
        link: "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
        contributor: "Sahyog-The Mentorship Club",
        uploadDate: "2023-10-15",
      },
      {
        name: "EE320A-Principles-Of-Communication-CommunicationSystems.pdf",
        contributor: "Sahyog-The Mentorship Club",
        link: "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
        uploadDate: "2023-10-15",
      },
      {
        name: "Ctheory_and_design_of_digital_communication_systems.pdf",
        contributor: "Sahyog-The Mentorship Club",
        link: "https://drive.google.com/file/d/1psjWabKw5acLgLJzevwetmI0DV3jlxfa/preview",
        uploadDate: "2023-10-15",
      },
      // Add more book items here
    ],
    notes: [
      {
        name: "Mathematics",
        contributor: "Contributor 1",
        uploadDate: "2023-10-16",
      },
      // Add more note items here
    ],
    videos: [
      {
        name: "CodeHelp by babbar",
        link: "https://www.youtube.com/watch?v=_TpOHMCODXo&list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG",
      },
      {
        name: "Gate Smasher",
        link: "https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
      },
      {
        name: "Knowledge Gate",
        link: "https://www.youtube.com/watch?v=xw_OuOhjauw&list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD",
      },
      {
        name: "Nesso Academy",
        link: "https://www.youtube.com/watch?v=vBURTt97EkA&list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
      },
      {
        name: "Gate Wallah",
        link: "https://www.youtube.com/watch?v=a3YDvmKbGrA&list=PL3eEXnCBViH-SiXK96TZd-7k3Qvk5g1YH",
      },
      {
        name: "Easy Engineering",
        link: "https://www.youtube.com/watch?v=QhRPNO2f0g0&list=PLV8vIYTIdSnZ67NQObdXE0gFjrzPrNKHp",
      },
      // Add more video items here
    ],
  };

  const [pdfurl, setPdfurl] = useState<string|null>(null);
  
  const handleUrl = (newUrl:string)=>{
    setPdfurl(newUrl);
  }

  return (
    <>
    {
      pdfurl ? (<PdfViewer pdfUrl={pdfurl}/>) : 
      (
        <div className="w-full">
      <h1 className="flex font-sans justify-center font-medium text-xl ">{subject}</h1>
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
                    <th className="py-2 px-4 text-center ">Book Names</th>
                    <th className="py-2 px-4 text-center">Contributed By</th>
                    <th className="py-2 px-4 text-center">Upload Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData.books.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 text-center">
                        <div onClick={()=>(handleUrl(item.link))}>{item.name}</div>
                      </td>
                      <td className="py-2 px-4 text-center">{item.contributor}</td>
                      <td className="py-2 px-4 text-center">{item.uploadDate}</td>
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
                    <th className="py-2 px-4 text-center">Contributed By</th>
                    <th className="py-2 px-4 text-center">Upload Date</th>
                  </tr>
                </thead>
                <tbody>
                  {contentData.notes.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="py-2 px-4 text-center">{item.name}</td>
                      <td className="py-2 px-4 text-center">{item.contributor}</td>
                      <td className="py-2 px-4 text-center">{item.uploadDate}</td>
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
                <h3 className="text-2xl font-semibold text-center mb-3 p-4 border-b-2">Channel name</h3>
                <div>
                  {contentData.videos.map((item, index) => (
                    <div key={index} className="mb-2 p-4 border-b-2 flex justify-between ">
                      <div>{item.name} </div>
                      <a href={item.link}><div className="ml-20  hover:border-y-2 shadow-orange-500 duration-75 translate-x-full">Link</div></a>
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
      )
    }
    </>
  );
};

export default BookSection;
