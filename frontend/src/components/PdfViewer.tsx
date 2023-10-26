import React from 'react';

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-2  text-[#00ff0d]  w-[100%] h-[100%]">
        <div className="">
          <iframe
            src={pdfUrl}
            className="w-full h-screen"
            title="PDF Viewer"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default PdfViewer;
